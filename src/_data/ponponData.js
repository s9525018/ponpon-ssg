// src/_data/ponponData.js
const EleventyFetch = require("@11ty/eleventy-fetch");

// 你的 API 網址，已確認
const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhLQSSt7uAgsBnMQo6vttXtfUst_0i3iwCK7U7pAMP5kj0dcfK_RC35B3d-JbArXPbNEHkajm7ZdDFP8qFaEZkaKTP2kSda2Exbew0f-QW-Ej9QnjONxo3WLo75_i9GaJIF3jqyE5ZPAlNd7EYDVuT0tRZTIN7_D7lxrKlhKJort16LeFjqKgBIkBai93J3XmuxcTWKzHY9FmhblUs2QLEcWGWNcl0Ei6D1zm_CZTLSRSiAcIP40cbD9ccQumTxzkKztTWuRgLcso6LY_68JJXjHQnUIg&lib=M-kU93n5tzwcL2V2_poFr-ARb25tth-fC";

module.exports = async function() {
  console.log("🚀 Fetching data from Google Sheets API...");

  try {
    const ponponData = await EleventyFetch(API_URL, {
      duration: "0s", //  暫時設為 0 秒，確保每次都抓取最新數據，方便除錯
      type: "json",
      verbose: true // 顯示詳細日誌
    });

    console.log("✅ Data fetched successfully!");

    // 【新增的監視器】讓我們看看準備回傳的資料長什麼樣子
    console.log("--- Data being returned to Eleventy: ---");
    console.log(JSON.stringify(ponponData, null, 2)); // 打印出漂亮格式的JSON
    
    return ponponData;

  } catch (error) {
    console.error("❌ Error fetching data from Google Sheets API:", error);
    return {};
  }
};