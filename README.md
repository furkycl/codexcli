**Generative Art Studio**
- **Modes:** Flow Field trails and Noise Terrain.
- **Controls:** particles, steps, noise scale, speed, width, fade, background.
- **Palettes:** curated swatches with instant blending.
- **Persistence:** settings saved to `localStorage`.
- **Utilities:** randomize, regenerate, clear, reset, PNG export.
- **Shortcuts:** Space (animate), R (randomize), G (regenerate), S (save), P (palette), H (help).

**Live Demo**
- GitHub Pages: `https://furkycl.github.io/codexcli/` (publishes from `main` via Actions)

**Screenshots**
- Flow Field: `assets/screenshot-flow.svg`
- Noise Terrain: `assets/screenshot-terrain.svg`

The repo includes a workflow that generates real PNG screenshots on push and replaces these placeholders with:
- `assets/screenshot-flow.png`
- `assets/screenshot-terrain.png`

**Local Usage**
- Open `index.html` in a modern browser.
- Adjust controls in the left sidebar; use Save PNG to export.

**Development**
- Screenshot generator: `scripts/generate-screenshots.js` (uses Puppeteer in CI).
- CI will auto-generate and commit PNG screenshots on pushes to `main` that touch UI files.

