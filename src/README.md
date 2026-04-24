# Source Architecture

This source folder uses MVC for maintainable feature development.

## Active runtime modules

- `models/AppModel.js`: state, validations, content access, and app-level business logic.
- `views/AppView.js`: Three.js rendering and all DOM/UI updates.
- `controllers/AppController.js`: event orchestration, lifecycle, and interaction flow.
- `index.js`: application bootstrap entry point.

## Development rules

1. Put state and computed logic only in `models/`.
2. Put element querying, DOM writes, and rendering only in `views/`.
3. Put event wiring and behavior orchestration only in `controllers/`.
4. Keep new features split across these layers from the start.
