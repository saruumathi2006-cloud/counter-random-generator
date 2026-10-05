# Counter & Random Number Generator

A small React app for practicing state management, event handling, and conditional rendering.

## Objective

Build two independent, self-contained sections in one app:

- **Counter** — increment, decrement, and reset a value using `useState`, with a floor of zero and a message when the limit is reached.
- **Random Number Generator** — generate a random integer between 1 and 100 on button click, with a placeholder message before the first generation.

## Tech

- React 18
- Vite

## Project structure

- `src/components/Counter.jsx` — counter logic and UI.
- `src/components/RandomNumber.jsx` — random number generator logic and UI.
- `src/App.jsx` — renders both sections.

## Run locally

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
npm run deploy
```

`deploy` publishes the production build to GitHub Pages via the `gh-pages` package.
