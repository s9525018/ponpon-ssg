// 【最終修正版 v4】 - 修正了 EleventyFetch 的引入語法
const EleventyFetch = require("@11ty/eleventy-fetch");

// 這是您的 Google Sheet API 網址
const API_URL = "https://script.google.com/macros/s/AKfycbxifDQhdb2yurGSyc3qptMGtzUSwheeJatauVvFD1rFxaAZDbTCDcbZbi1E9tWMeb/exec";

// 這是一個輔助函式，用來將從 Google Sheet 抓來的陣列資料，轉換成我們需要的物件結構
function transformData(data) {
    const transformed = {};
    // 我們只關心 pagecontent 裡的資料
    if (data && data.pagecontent) {
        data.pagecontent.forEach(item => {
            // 將 block_id 中的連字號移除，以匹配模板中的變數名 (e.g., "coupon-container" -> "couponcontainer")
            const blockKey = item.block_id.replace(/-/g, '');
            
            // 如果這個 blockKey 在我們的 transformed 物件中還不存在，就先建立一個空陣列
            if (!transformed[blockKey]) {
                transformed[blockKey] = [];
            }
            
            // 將當前的項目推入對應的陣列中
            transformed[blockKey].push(item);
        });
    }
    return transformed;
}


module.exports = async function() {
    console.log("🚀 [v4] Starting to fetch data from Google Sheets API...");

    try {
        // 使用 EleventyFetch 抓取原始資料
        let rawData = await EleventyFetch(API_URL, {
            duration: "6h", // 快取資料 6 小時。測試時可改為 "1m" (1分鐘)
            type: "json",   // 我們期待的資料類型是 JSON
            verbose: true   // 在終端機顯示詳細的 fetch 過程，方便除錯
        });

        // 對抓取到的原始資料進行結構轉換
        let processedData = transformData(rawData);

        console.log("✅ [v4] Successfully fetched and transformed data.");
        // 返回經過處理、符合模板結構的資料
        return processedData;

    } catch (e) {
        console.error("❌❌❌ [v4] ERROR fetching or transforming data ❌❌❌");
        console.error(e);

        // 在發生錯誤時，回傳一個帶有錯誤訊息的物件
        return {
            error: "Failed to fetch data from Google Sheets API.",
            details: e.message
        };
    }
};