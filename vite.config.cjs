const { defineConfig } = require('vite');

module.exports = defineConfig({
  resolve: {
    alias: {
      '@': require('node:path').resolve(__dirname, 'src/resources'),
    },
  },
});
