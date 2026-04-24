# Portfolio - MVC Architecture

This portfolio is now organized using an MVC structure under `src/`.

## Run the project

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## MVC Structure

```text
src/
  index.js                # Main entry point (bootstraps the app)
  controllers/
    AppController.js      # Flow orchestration, event wiring, app lifecycle
  models/
    AppModel.js           # App state, content data access, validation, business logic
  views/
    AppView.js            # DOM + Three.js rendering and UI updates
```

## How to work with this architecture

1. Add state and pure logic in `models/AppModel.js`.
2. Add rendering and DOM updates in `views/AppView.js`.
3. Add event flow, orchestration, and interactions in `controllers/AppController.js`.
4. Keep `src/index.js` minimal: only bootstrap and initialize controller.
5. Avoid putting app logic directly in `index.html` or root-level scripts.

## Mapping from old structure

- Old single-file app logic in `main.js` has been split into MVC modules.
- Runtime entry now points to `src/index.js` in `index.html`.

## UI quality guidelines (Good UI)

- Keep hierarchy strong: section title, supporting copy, clear CTA.
- Preserve visual rhythm: consistent spacing and card alignment.
- Use motion intentionally: avoid stacking too many animations in one area.
- Ensure mobile-first behavior for nav, cards, and timeline blocks.
- Keep contrast readable for text and interactive states.

## Experience updates included

- GDG role updated from Co-Lead to Lead.
- Added `Technical Lead @ HotaCreatives`.
