// Generates PNG screenshots of the demo using headless Chromium (Puppeteer).
// Outputs: assets/screenshot-flow.png, assets/screenshot-terrain.png
// Usage (CI): node scripts/generate-screenshots.js

const path = require('path');
const fs = require('fs');

async function main() {
  const puppeteer = require('puppeteer');
  const root = process.cwd();
  const fileUrl = 'file://' + path.join(root, 'index.html');
  const outDir = path.join(root, 'assets');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    defaultViewport: { width: 1600, height: 900, deviceScaleFactor: 1 },
  });
  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: 'load' });

  // Wait for canvas to be ready
  await page.waitForSelector('#canvas');
  await page.waitForTimeout(1500);

  // Ensure help is hidden
  await page.evaluate(() => { const h = document.querySelector('#help'); if (h) h.style.display = 'none'; });

  // Flow screenshot
  await page.evaluate(() => {
    const mode = document.querySelector('#mode');
    if (mode) { mode.value = 'flow'; mode.dispatchEvent(new Event('input')); mode.dispatchEvent(new Event('change')); }
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outDir, 'screenshot-flow.png') });

  // Terrain screenshot
  await page.evaluate(() => {
    const mode = document.querySelector('#mode');
    if (mode) { mode.value = 'terrain'; mode.dispatchEvent(new Event('input')); mode.dispatchEvent(new Event('change')); }
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outDir, 'screenshot-terrain.png') });

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

