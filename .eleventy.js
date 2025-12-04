// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  
  eleventyConfig.addShortcode("nav", function() {
    return `<nav>
      <a href="/">Home</a>
      <a href="/wallet/">Wallet</a>
      <a href="/phone/">Phone</a>
      <a href="/airpods/">Airpods</a>
    </nav>`;
  });
};