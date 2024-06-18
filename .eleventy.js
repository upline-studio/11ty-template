const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite")

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyVitePlugin);
    eleventyConfig.addPassthroughCopy('src/resources');
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