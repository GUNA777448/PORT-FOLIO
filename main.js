import * as THREE from "three";
import gsap from "gsap";
import { portfolioData } from "./data.js";
import { acp } from "./acp.js";

// ==========================================
// 1. THREE.JS SCENE
// ==========================================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  antialias: true,
  alpha: true,
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(60);

// --- Particle Field ---
const particlesCount = 2500;
const positions = new Float32Array(particlesCount * 3);
const colors = new Float32Array(particlesCount * 3);
const sizes = new Float32Array(particlesCount);

for (let i = 0; i < particlesCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 300;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 300;
  const mix = Math.random();
  colors[i * 3] = 0.55 + mix * 0.2;
  colors[i * 3 + 1] = 0.32 + mix * 0.1;
  colors[i * 3 + 2] = 0.2 + mix * 0.1;
  sizes[i] = Math.random() * 0.3 + 0.05;
}

const particlesGeo = new THREE.BufferGeometry();
particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
particlesGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

const particlesMat = new THREE.PointsMaterial({
  size: 0.18,
  vertexColors: true,
  transparent: true,
  opacity: 0.4,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});

const neuralGrid = new THREE.Points(particlesGeo, particlesMat);
scene.add(neuralGrid);

// --- Floating Geometric Shapes ---
const floatingShapes = [];
const shapeGeometries = [
  new THREE.BoxGeometry(2.5, 2.5, 2.5), // data cube / server block
  new THREE.BoxGeometry(4, 0.12, 4), // circuit board panel
  new THREE.CylinderGeometry(1.2, 1.2, 3, 6), // database cylinder
  new THREE.RingGeometry(1.5, 2.2, 6), // hex chip ring
  new THREE.BoxGeometry(3.5, 0.08, 0.08), // circuit trace
  new THREE.OctahedronGeometry(1.8, 0), // data node
];

for (let i = 0; i < 18; i++) {
  const geo = shapeGeometries[i % shapeGeometries.length];
  const hue = Math.random() * 0.06 + 0.03; // warm orange-red range
  const color = new THREE.Color().setHSL(hue, 0.6, 0.4);
  const mat = new THREE.MeshStandardMaterial({
    color,
    wireframe: true,
    transparent: true,
    opacity: 0.25 + Math.random() * 0.15,
    emissive: color,
    emissiveIntensity: 0.15,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 150,
  );
  mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
  mesh.userData = {
    speed: 0.001 + Math.random() * 0.004,
    amplitude: 0.5 + Math.random() * 1.5,
    phase: Math.random() * Math.PI * 2,
    rotSpeed: {
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01,
    },
  };
  scene.add(mesh);
  floatingShapes.push(mesh);
}

// --- Circuit Board Grid ---
const circuitGroup = new THREE.Group();
const circuitNodeMat = new THREE.MeshStandardMaterial({
  color: 0xc45d3e,
  wireframe: true,
  transparent: true,
  opacity: 0.3,
  emissive: 0xc45d3e,
  emissiveIntensity: 0.25,
});
const circuitTraceMat = new THREE.MeshStandardMaterial({
  color: 0x8b6b4a,
  transparent: true,
  opacity: 0.18,
  emissive: 0x8b6b4a,
  emissiveIntensity: 0.15,
});
const chipGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
const pinGeo = new THREE.BoxGeometry(0.15, 0.15, 0.15);
const traceGeo = new THREE.BoxGeometry(1, 0.06, 0.06);

const gridSize = 6;
const gridSpacing = 4.5;
for (let gx = 0; gx < gridSize; gx++) {
  for (let gy = 0; gy < gridSize; gy++) {
    const px = (gx - gridSize / 2) * gridSpacing;
    const py = (gy - gridSize / 2) * gridSpacing;
    // IC chip nodes at intersections
    if ((gx + gy) % 3 === 0) {
      const chip = new THREE.Mesh(chipGeo, circuitNodeMat);
      chip.position.set(px, py, 0);
      circuitGroup.add(chip);
    } else {
      const pin = new THREE.Mesh(pinGeo, circuitNodeMat);
      pin.position.set(px, py, 0);
      circuitGroup.add(pin);
    }
    // Horizontal traces
    if (gx < gridSize - 1 && Math.random() > 0.25) {
      const trace = new THREE.Mesh(traceGeo, circuitTraceMat);
      trace.scale.x = gridSpacing;
      trace.position.set(px + gridSpacing / 2, py, 0);
      circuitGroup.add(trace);
    }
    // Vertical traces
    if (gy < gridSize - 1 && Math.random() > 0.25) {
      const trace = new THREE.Mesh(traceGeo, circuitTraceMat);
      trace.scale.x = gridSpacing;
      trace.rotation.z = Math.PI / 2;
      trace.position.set(px, py + gridSpacing / 2, 0);
      circuitGroup.add(trace);
    }
  }
}
circuitGroup.position.set(70, 0, -40);
scene.add(circuitGroup);

// --- Section Nodes ---
const sectionNodes = [];
const nodeGeo = new THREE.IcosahedronGeometry(5, 1);
const nodeMat = new THREE.MeshStandardMaterial({
  color: 0xc45d3e,
  wireframe: true,
  emissive: 0x6b3020,
  emissiveIntensity: 0.25,
});

const sectionIds = ["about", "skills", "projects", "contact"];
sectionIds.forEach((section, index) => {
  const node = new THREE.Mesh(nodeGeo, nodeMat.clone());
  node.position.set((index - 1.5) * 35, Math.sin(index) * 8, 0);
  node.userData = { section };
  scene.add(node);
  sectionNodes.push(node);
});

// --- Lighting ---
const ambientLight = new THREE.AmbientLight(0xfff5ee, 0.3);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xc45d3e, 1.5);
pointLight.position.set(30, 30, 30);
scene.add(pointLight);

const accentLight = new THREE.PointLight(0xd4a853, 0.8);
accentLight.position.set(-40, -30, 20);
scene.add(accentLight);

// --- Data Cube Cluster ---
const dataCubeGroup = new THREE.Group();
const cubeMat = new THREE.MeshStandardMaterial({
  color: 0x8b6b4a,
  wireframe: true,
  transparent: true,
  opacity: 0.3,
  emissive: 0xc45d3e,
  emissiveIntensity: 0.15,
});
[8, 13, 18].forEach((s, i) => {
  const geo = new THREE.BoxGeometry(s, s, s);
  const cube = new THREE.Mesh(geo, cubeMat.clone());
  cube.rotation.set(i * 0.25, i * 0.35, i * 0.15);
  dataCubeGroup.add(cube);
});
// Inner core sphere (processor)
const coreMat = new THREE.MeshStandardMaterial({
  color: 0xc45d3e,
  wireframe: true,
  transparent: true,
  opacity: 0.2,
  emissive: 0xc45d3e,
  emissiveIntensity: 0.3,
});
const core = new THREE.Mesh(new THREE.IcosahedronGeometry(3, 1), coreMat);
dataCubeGroup.add(core);
dataCubeGroup.position.set(-50, 20, -20);
scene.add(dataCubeGroup);

// --- Ring around Hero ---
const ringGeo = new THREE.TorusGeometry(25, 0.3, 16, 100);
const ringMat = new THREE.MeshStandardMaterial({
  color: 0xc45d3e,
  transparent: true,
  opacity: 0.1,
  emissive: 0xc45d3e,
  emissiveIntensity: 0.2,
});
const heroRing = new THREE.Mesh(ringGeo, ringMat);
heroRing.rotation.x = Math.PI / 2.5;
heroRing.position.set(0, 0, 20);
scene.add(heroRing);

const ring2 = new THREE.Mesh(
  new THREE.TorusGeometry(30, 0.2, 16, 100),
  new THREE.MeshStandardMaterial({
    color: 0x8b6b4a,
    transparent: true,
    opacity: 0.07,
    emissive: 0x8b6b4a,
    emissiveIntensity: 0.15,
  }),
);
ring2.rotation.x = Math.PI / 3;
ring2.rotation.y = Math.PI / 6;
ring2.position.set(0, 0, 20);
scene.add(ring2);

// ==========================================
// 2. INTERACTIVITY (raycaster + 3D clicks)
// ==========================================
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let mouseX = 0,
  mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(camera.position, {
    x: mouse.x * 4,
    y: mouse.y * 4,
    duration: 2.5,
    ease: "power2.out",
  });
});

window.addEventListener("click", () => {
  raycaster.setFromCamera(mouse, camera);
  const nodeHits = raycaster.intersectObjects(sectionNodes);
  const cubeHits = raycaster.intersectObjects(dataCubeGroup.children);

  if (nodeHits.length > 0) {
    const hit = nodeHits[0].object;
    const id = hit.userData.section;
    acp.updateSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    gsap.to(hit.scale, {
      x: 1.4,
      y: 1.4,
      z: 1.4,
      duration: 0.4,
      yoyo: true,
      repeat: 1,
    });
    gsap.to(camera.position, {
      z: 40,
      duration: 0.8,
      onComplete: () => gsap.to(camera.position, { z: 60, duration: 1.5 }),
    });
  } else if (cubeHits.length > 0) {
    gsap.to(dataCubeGroup.rotation, {
      x: dataCubeGroup.rotation.x + Math.PI,
      y: dataCubeGroup.rotation.y + Math.PI / 2,
      duration: 1.2,
      ease: "power2.inOut",
    });
    dataCubeGroup.children.forEach((c) => {
      if (c.material) c.material.emissiveIntensity = 0.5;
    });
    gsap.delayedCall(1, () => {
      dataCubeGroup.children.forEach((c) => {
        if (c.material)
          gsap.to(c.material, { emissiveIntensity: 0.15, duration: 0.8 });
      });
    });
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    acp.updateSection("skills_knot");
  }
});

// ==========================================
// 3. ANIMATION LOOP
// ==========================================
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  // Particle field drift
  neuralGrid.rotation.y += 0.0004;
  neuralGrid.rotation.x += 0.0001;

  // Section nodes bob
  sectionNodes.forEach((node, i) => {
    node.rotation.x += 0.004;
    node.rotation.y += 0.004;
    node.position.y += Math.sin(elapsed * 1.2 + i) * 0.012;
  });

  // Data cube cluster rotation
  dataCubeGroup.rotation.y += 0.006;
  dataCubeGroup.rotation.x += 0.003;
  dataCubeGroup.position.y = 20 + Math.cos(elapsed * 0.8) * 3;
  dataCubeGroup.children.forEach((c, i) => {
    c.rotation.y += 0.002 * (i + 1);
    c.rotation.z += 0.001 * (i + 1);
  });

  // Floating shapes
  floatingShapes.forEach((shape) => {
    const d = shape.userData;
    shape.rotation.x += d.rotSpeed.x;
    shape.rotation.y += d.rotSpeed.y;
    shape.position.y +=
      Math.sin(elapsed * d.speed * 100 + d.phase) * 0.02 * d.amplitude;
  });

  // Circuit board drift
  circuitGroup.rotation.y += 0.002;
  circuitGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.1;

  // Hero rings
  heroRing.rotation.z += 0.002;
  ring2.rotation.z -= 0.0015;

  renderer.render(scene, camera);
}
animate();

// ==========================================
// 4. CUSTOM CURSOR
// ==========================================
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (cursorDot && cursorRing) {
  let ringX = 0,
    ringY = 0;
  const ringSpeed = 0.15;

  document.addEventListener("mousemove", (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    cursorDot.style.transform = "translate(-50%, -50%)";
  });

  function updateRing() {
    ringX += (mouseX - ringX) * ringSpeed;
    ringY += (mouseY - ringY) * ringSpeed;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    cursorRing.style.transform = "translate(-50%, -50%)";
    requestAnimationFrame(updateRing);
  }
  updateRing();

  // Hover enlargement
  const hoverTargets = document.querySelectorAll(
    "a, button, .btn, .skill-item, .project-card, .domain-card, .social-icon, .magnetic-btn",
  );
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => cursorRing.classList.add("hover"));
    el.addEventListener("mouseleave", () =>
      cursorRing.classList.remove("hover"),
    );
  });
}

// ==========================================
// 5. SCROLL PROGRESS BAR
// ==========================================
const scrollProgress = document.querySelector(".scroll-progress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollProgress && docHeight > 0) {
    scrollProgress.style.width = `${(scrollTop / docHeight) * 100}%`;
  }
});

// ==========================================
// 6. NAVBAR SCROLL & ACTIVE LINK
// ==========================================
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const allSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  // Scrolled class
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  }

  // Active nav link
  let current = "";
  allSections.forEach((sec) => {
    const top = sec.offsetTop - 200;
    if (window.scrollY >= top) current = sec.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("data-section") === current,
    );
  });
});

// ==========================================
// 7. HAMBURGER MENU
// ==========================================
const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.querySelector(".nav-links");
if (hamburger && navLinksContainer) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinksContainer.classList.toggle("active");
  });
  navLinksContainer.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinksContainer.classList.remove("active");
    });
  });
}

// ==========================================
// 8. TYPEWRITER EFFECT
// ==========================================
const typewriterEl = document.getElementById("typewriter");
const phrases = [
  "Full-Stack Developer",
  "AI Automation Specialist",
  "Product Builder",
  "Open Source Contributor",
  "Community Leader",
];

if (typewriterEl) {
  let phraseIndex = 0,
    charIndex = 0,
    isDeleting = false;
  function typewrite() {
    const current = phrases[phraseIndex];
    typewriterEl.textContent = current.substring(0, charIndex);

    if (!isDeleting) {
      charIndex++;
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(typewrite, 1800);
        return;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(typewrite, isDeleting ? 40 : 80);
  }
  typewrite();
}

// ==========================================
// 9. SCROLL REVEAL (IntersectionObserver)
// ==========================================
const revealElements = document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-right",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
);

revealElements.forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.05}s`;
  revealObserver.observe(el);
});

// ==========================================
// 10. ANIMATED STAT COUNTERS
// ==========================================
const statNumbers = document.querySelectorAll(".stat-number");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);

statNumbers.forEach((el) => counterObserver.observe(el));

function animateCounter(el, target) {
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

// ==========================================
// 11. TILT CARD EFFECT (project cards + domain cards)
// ==========================================
document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});

// ==========================================
// 11b. DOMAIN CARD FLIP + TILT
// ==========================================
const domainCards = document.querySelectorAll(".domain-card");

domainCards.forEach((card) => {
  // Click to flip
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  // Subtle tilt on hover (only front side, non-flipped)
  card.addEventListener("mousemove", (e) => {
    if (card.classList.contains("flipped")) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -3;
    const rotateY = ((x - cx) / cx) * 3;
    const inner = card.querySelector(".domain-card-inner");
    if (inner) {
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  });

  card.addEventListener("mouseleave", () => {
    const inner = card.querySelector(".domain-card-inner");
    if (inner && !card.classList.contains("flipped")) {
      inner.style.transform = "rotateX(0) rotateY(0)";
    } else if (inner && card.classList.contains("flipped")) {
      inner.style.transform = "rotateY(180deg)";
    }
  });
});

// ==========================================
// 12. MAGNETIC BUTTON EFFECT
// ==========================================
document.querySelectorAll(".magnetic-btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});

// ==========================================
// 13. BACK TO TOP BUTTON
// ==========================================
const backToTop = document.getElementById("back-to-top");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 500);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================
// 14. SKILLS RENDERING
// ==========================================
function renderSkills() {
  const skillsGrid = document.querySelector("#skills-grid");
  if (!skillsGrid) return;

  const categories = {
    languages: "Programming Languages",
    frameworks: "Frameworks & Libraries",
    tools: "Development Tools",
    cloudDatabases: "Cloud & Databases",
    specializations: "Specializations",
    methodologies: "Methodologies",
    softSkills: "Soft Skills",
  };

  Object.entries(categories).forEach(([key, title]) => {
    const skillList = portfolioData.skills[key];
    if (!skillList) return;

    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skill-category reveal-up";
    categoryDiv.innerHTML = `
      <h4>${title}</h4>
      <div class="skills-list">
        ${skillList
          .map(
            (skill) => `
          <div class="skill-item">
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
    skillsGrid.appendChild(categoryDiv);

    // Also observe for reveal
    revealObserver.observe(categoryDiv);
  });
}
renderSkills();

// ==========================================
// 15. SMOOTH SCROLL FOR NAV LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// ==========================================
// 16. RESIZE HANDLER
// ==========================================
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
