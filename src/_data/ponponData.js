// 【v9 正式版】 - 使用了正確的 API 網址，並恢復了網路抓取
const EleventyFetch = require("@11ty/eleventy-fetch");

const API_URL = "https://script.google.com/macros/s/AKfycbzTiDQHbZytuY2vSpRC3qstMG2c0whIeeJtauDU4eVzFD1rReA2TbDCoZ0b1HEG9MBh/exec";

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
    console.log("🚀 [v9] Starting to fetch data with correct input dir config...");
    try {
        let rawData = await EleventyFetch(API_URL, {
            duration: "6h",
            type: "json",
            verbose: true
        });
        let processedData = transformData(rawData);
        console.log("✅ [v9] Successfully fetched and transformed data.");
        return processedData;
    } catch (e) {
        console.error("❌❌❌ [v9] ERROR fetching data ❌❌❌");
        console.error(e);
        return { error: "Failed to fetch data.", details: e.message };
    }
};