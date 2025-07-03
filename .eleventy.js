module.exports = function(eleventyConfig) {
  // 這句話是告訴 Eleventy，所有圖片、CSS 等靜態檔案，
  // 都要從 src/assets 複製到最終的 _site/assets 資料夾。
  // 即使您現在沒有 assets 資料夾，加上這行也是一個好的實踐。
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // 【最最最關鍵的一行設定】
  // 這句話明確地告訴 Eleventy：
  // "你的所有輸入檔案（模板、數據、組件）都在 src 資料夾裡找！"
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};