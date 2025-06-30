// 【v6 最終版】 - 更新為全新的、有效的 API 網址
const EleventyFetch = require("@11ty/eleventy-fetch");

// 【已更新】這是您重新部署後，全新的、有效的 Google Sheet API 網址
const API_URL = "https://script.google.com/macros/s/AKfycbzTiDQHbZytuY2vSpRC3qstMG2c0whIeeJtauDU4eVzFD1rReA2TbDCoZ0b1HEG9MBh/exec";

// 輔助函式，用來將 Google Sheet 資料轉換成模板需要的結構
function transformData(data) {
    const transformed = {};
    if (data && data.pagecontent) {
        data.pagecontent.forEach(item => {
            if (item && item.block_id) {
                const blockKey = item.block_id.replace(/-/g, '');
                if (!transformed[blockKey]) {
                    transformed[blockKey] = [];
                }
                transformed[blockKey].push(item);
            }
        });
    }
    return transformed;
}

module.exports = async function() {
    console.log("🚀 [v6] Starting to fetch data with NEW API URL...");
    try {
        let rawData = await EleventyFetch(API_URL, {
            duration: "0s", // 暫時禁用快取，確保抓取最新數據
            type: "json",
            verbose: true
        });
        let processedData = transformData(rawData);
        console.log("✅ [v6] Successfully fetched and transformed data with NEW API URL.");
        return processedData;
    } catch (e) {
        console.error("❌❌❌ [v6] ERROR fetching data with NEW API URL ❌❌❌");
        console.error(e);
        return { error: "Failed to fetch data.", details: e.message };
    }
};