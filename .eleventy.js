const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite")
const {transform} = require('esbuild');
const vm = require('node:vm');


async function transformTs(content) {
    return await transform(content, {
        format: 'cjs',
        loader: 'ts'
    });
}

function exec(content) {
    const ctx = {
        module: {}
    }
    vm.createContext(ctx)
    vm.runInContext(content, ctx);
    return ctx.module.exports;
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyVitePlugin);
    eleventyConfig.addPassthroughCopy('src/resources');
    eleventyConfig.addDataExtension("ts", async (fileContent) => {
        const transformResult =  await transformTs(fileContent);
        return exec(transformResult.code)
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
}