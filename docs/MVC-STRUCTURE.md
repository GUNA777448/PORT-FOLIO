# MVC Folder Structure

This project is now actively running with MVC modules under `src/`.

## Active Structure

```text
src/
  index.js
  controllers/
    AppController.js
  models/
    AppModel.js
  views/
    AppView.js
```

## Responsibilities

- `models/`: State, data access, validation, and business logic.
- `views/`: Three.js + DOM rendering and UI updates.
- `controllers/`: Event wiring, orchestration, and app lifecycle.

## Entry and Flow

1. `index.js` boots the app.
2. `AppController` initializes observers, events, and animation loops.
3. `AppView` handles all rendering logic.
4. `AppModel` owns app state and data rules.
