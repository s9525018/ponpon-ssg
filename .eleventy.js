module.exports = function(eleventyConfig) {
  
  // Passthrough Copy: 將 src/css, src/js, src/images 複製到輸出的 _site 資料夾
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/images");

  // 返回設定，以便 Eleventy 知道我們的源文件在哪裡
  return {
    dir: {
      input: "src",      // 源文件夾
      output: "_site",   // 輸出文件夾
      includes: "_includes" // 可重用組件文件夾 (下一步會用到)
    }
  };
};