// verification/benchmark_popup.js

// Mock Mapbox GL Popup
class MockPopup {
  constructor(options) {
    this.options = options;
    this.lngLat = null;
    this.html = null;
    this.map = null;
  }

  setLngLat(lngLat) {
    this.lngLat = lngLat;
    return this;
  }

  setHTML(html) {
    this.html = html;
    return this;
  }

  addTo(map) {
    this.map = map;
    return this;
  }

  remove() {
    this.map = null;
    return this;
  }
}

const map = {}; // Mock map object
const iterations = 100000;

function runBaseline() {
  const start = process.hrtime();
  let currentPopup = null;

  for (let i = 0; i < iterations; i++) {
    if (currentPopup) {
      currentPopup.remove();
    }
    currentPopup = new MockPopup({ offset: [0, -15], focusAfterOpen: false })
      .setLngLat([0, 0])
      .setHTML('<div>Content</div>')
      .addTo(map);
  }

  const end = process.hrtime(start);
  return end[0] * 1000 + end[1] / 1e6; // ms
}

function runOptimized() {
  const start = process.hrtime();
  const popup = new MockPopup({ offset: [0, -15], focusAfterOpen: false });

  for (let i = 0; i < iterations; i++) {
    popup
      .setLngLat([0, 0])
      .setHTML('<div>Content</div>')
      .addTo(map);
  }

  const end = process.hrtime(start);
  return end[0] * 1000 + end[1] / 1e6; // ms
}

console.log(`Running benchmark with ${iterations} iterations...`);

// Force GC if possible (requires node --expose-gc)
if (global.gc) {
    global.gc();
}

const baselineTime = runBaseline();

if (global.gc) {
    global.gc();
}

const optimizedTime = runOptimized();

console.log(`Baseline (Recreate): ${baselineTime.toFixed(2)} ms`);
console.log(`Optimized (Reuse):   ${optimizedTime.toFixed(2)} ms`);
console.log(`Improvement:         ${((baselineTime - optimizedTime) / baselineTime * 100).toFixed(2)}%`);

if (optimizedTime >= baselineTime) {
    console.warn("WARNING: Optimization did not show improvement in this synthetic test.");
}
