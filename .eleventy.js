module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/static');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy('./src/_headers');

  eleventyConfig.addCollection('blog', collection => {
    return collection.getFilteredByGlob('src/blog/*.md');
  });
  eleventyConfig.addCollection('blogPosts', collection => {
    return collection.getFilteredByGlob('src/blog-posts/*.md');
  });
  eleventyConfig.addCollection('caseStudies', collection => {
    return collection.getFilteredByGlob('src/case-studies/*.md');
  });

  eleventyConfig.addPassthroughCopy({
    '/node_modules/gsap/dist/gsap.min.js': 'assets/gsap.min.js',
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: 'includes',
      data: '_data',
    },
    templateFormats: ['html', 'md', 'liquid', 'css'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passThroughFileCopy: true,
  };
};
