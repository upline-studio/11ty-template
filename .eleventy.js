const vm = require('node:vm');
const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite');
const { transform } = require('esbuild');
const svgIcon = require('./11ty/svgIcon.js');
const viteConfig = require('./vite.config.cjs');

async function transformTs(content) {
  return await transform(content, {
    format: 'cjs',
    loader: 'ts',
  });
}

function exec(content) {
  const ctx = {
    module: {},
    require,
  };

  vm.createContext(ctx);
  vm.runInContext(content, ctx);
  return ctx.module.exports;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: viteConfig,
  });
  eleventyConfig.addShortcode('svgIcon', svgIcon);
  eleventyConfig.addPassthroughCopy('src/resources');
  eleventyConfig.addDataExtension('ts', async (fileContent) => {
    const transformResult = await transformTs(fileContent);
    return exec(transformResult.code);
  });
  return {
    dir: {
      input: 'src/views',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
    templateFormats: ['md', 'njk'],
  };
};
