const { chromium } = require("playwright");

const url = "http://127.0.0.1:4173";
const viewports = [
  { name: "320x640", width: 320, height: 640 },
  { name: "360x800", width: 360, height: 800 },
  { name: "375x812", width: 375, height: 812 },
  { name: "390x844", width: 390, height: 844 },
  { name: "414x896", width: 414, height: 896 }
];

function summarize(collisions) {
  return collisions.slice(0, 10).map((c, i) =>
    `${i + 1}. ${c.a} <-> ${c.b} | overlap=${Math.round(c.overlapArea)} | y=${Math.round(c.y1)}-${Math.round(c.y2)}`
  );
}

(async () => {
  const browser = await chromium.launch({ headless: true, channel: "msedge" });
  const context = await browser.newContext();
  const page = await context.newPage();

  const report = [];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

    await page.waitForTimeout(1200);

    const totalHeight = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    const step = Math.max(300, Math.floor(vp.height * 0.7));
    for (let y = 0; y < totalHeight; y += step) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(120);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(250);

    const data = await page.evaluate(() => {
      const q = Array.from(document.querySelectorAll("body *"));
      const visible = q
        .map((el) => {
          const cs = window.getComputedStyle(el);
          const r = el.getBoundingClientRect();
          const text = (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 40);
          return {
            el,
            tag: el.tagName.toLowerCase(),
            id: el.id || "",
            cls: (el.className && typeof el.className === "string") ? el.className.split(/\s+/).slice(0, 2).join(".") : "",
            x: r.left,
            y: r.top,
            w: r.width,
            h: r.height,
            disp: cs.display,
            vis: cs.visibility,
            op: Number(cs.opacity || 1),
            pos: cs.position,
            text,
          };
        })
        .filter((n) => n.disp !== "none" && n.vis !== "hidden" && n.op > 0.02 && n.w > 24 && n.h > 24 && n.x + n.w > 0 && n.y + n.h > 0 && n.x < window.innerWidth && n.y < window.innerHeight + document.body.scrollHeight);

      function pickLabel(n) {
        const id = n.id ? `#${n.id}` : "";
        const cls = n.cls ? `.${n.cls}` : "";
        const txt = n.text ? ` \"${n.text}\"` : "";
        return `${n.tag}${id}${cls}${txt}`;
      }

      const collisions = [];
      const maxPairs = 120000;
      let pairs = 0;

      for (let i = 0; i < visible.length; i++) {
        const a = visible[i];
        const ax2 = a.x + a.w;
        const ay2 = a.y + a.h;

        for (let j = i + 1; j < visible.length; j++) {
          pairs++;
          if (pairs > maxPairs) break;

          const b = visible[j];

          if (a.pos === "fixed" || b.pos === "fixed") continue;
          if (a.pos === "sticky" || b.pos === "sticky") continue;

          const bx2 = b.x + b.w;
          const by2 = b.y + b.h;

          const ix1 = Math.max(a.x, b.x);
          const iy1 = Math.max(a.y, b.y);
          const ix2 = Math.min(ax2, bx2);
          const iy2 = Math.min(ay2, by2);
          const iw = ix2 - ix1;
          const ih = iy2 - iy1;
          if (iw <= 0 || ih <= 0) continue;

          const overlapArea = iw * ih;
          const areaA = a.w * a.h;
          const areaB = b.w * b.h;
          const minArea = Math.min(areaA, areaB);
          const ratio = overlapArea / minArea;

          if (overlapArea < 220 || ratio < 0.18) continue;

          collisions.push({
            a: pickLabel(a),
            b: pickLabel(b),
            overlapArea,
            ratio,
            y1: iy1,
            y2: iy2,
          });
        }
      }

      const doc = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(doc.scrollWidth, body.scrollWidth);
      const overflow = scrollWidth - window.innerWidth;

      return {
        elementCount: visible.length,
        collisions: collisions
          .sort((m, n) => n.overlapArea - m.overlapArea)
          .slice(0, 20),
        overflow,
        viewportWidth: window.innerWidth,
        scrollWidth,
      };
    });

    report.push({ viewport: vp.name, ...data });
  }

  await browser.close();

  for (const r of report) {
    console.log(`\n=== ${r.viewport} ===`);
    console.log(`visible-elements: ${r.elementCount}`);
    console.log(`horizontal-overflow: ${r.overflow > 0 ? `${r.overflow}px` : "none"} (scrollWidth=${r.scrollWidth}, viewport=${r.viewportWidth})`);
    if (!r.collisions.length) {
      console.log("collisions: none detected");
    } else {
      console.log(`collisions: ${r.collisions.length} potential`);
      for (const line of summarize(r.collisions)) console.log(line);
    }
  }

  const totalCollisions = report.reduce((s, r) => s + r.collisions.length, 0);
  const overflowCases = report.filter((r) => r.overflow > 0).length;
  console.log(`\nSUMMARY totalPotentialCollisions=${totalCollisions} overflowViewports=${overflowCases}/${report.length}`);
})();
