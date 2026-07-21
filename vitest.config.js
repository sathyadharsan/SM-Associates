import { defineConfig } from 'vitest/config';

// Stubs binary/style assets so data modules that import images (e.g.
// caseStudies.js → .webp thumbnails) can load in the Node test runtime.
const assetStub = {
  name: 'asset-stub',
  enforce: 'pre',
  load(id) {
    if (/\.(webp|png|jpe?g|svg|gif|css)(\?.*)?$/.test(id)) {
      return 'export default ""';
    }
    return null;
  },
};

export default defineConfig({
  plugins: [assetStub],
  test: {
    environment: 'node',
    include: ['src/chatbot/__tests__/**/*.test.js'],
  },
});
