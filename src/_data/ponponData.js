// 【Hardcode 測試版】 - 完全繞過網路抓取，直接使用寫死的 JSON 資料

// 輔助函式，用來將資料轉換成模板需要的結構 (這部分不變)
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
    console.log("🚀 [Hardcode Test] Bypassing fetch, using hardcoded data...");

    // 【最關鍵的一步】
    // 我們不再從網路抓取，而是直接定義一個 rawData 變數
    // 請將您從瀏覽器複製的完整 JSON 資料，貼在下面的反引號 `` 之間
    const rawJsonString = `{
  "pagelayout": [
    {
      "block_id": "couponcontainer",
      "is_enabled": true
    },
    {
      "block_id": "promotraveldiscount",
      "is_enabled": true
    },
    {
      "block_id": "hotrecommend",
      "is_enabled": true
    },
    {
      "block_id": "suncarepromo",
      "is_enabled": true
    },
    {
      "block_id": "summerstylesale",
      "is_enabled": true
    },
    {
      "block_id": "brandhighlights",
      "is_enabled": true
    },
    {
      "block_id": "eventhighlights",
      "is_enabled": true
    }
  ],
  "pagecontent": [
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "sidebar-link",
      "title": "指定行動電源加價購8折",
      "key1": "",
      "key2": "[請提供對應區塊錨點]",
      "key3": 3,
      "key4": "",
      "order": ""
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "sidebar-link",
      "title": "MIT洗沐品牌週88折",
      "key1": "",
      "key2": "#promo-travel-discount",
      "key3": 4,
      "key4": "",
      "order": ""
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "sidebar-link",
      "title": "保健選品85折",
      "key1": "",
      "key2": "#hot-recommend",
      "key3": 5,
      "key4": "",
      "order": ""
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "sidebar-link",
      "title": "男士精品+香氛贈5,288點",
      "key1": "",
      "key2": "[請提供對應區塊錨點]",
      "key3": 6,
      "key4": "",
      "order": ""
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "sidebar-link",
      "title": "女士精品+香氛贈5,200點",
      "key1": "",
      "key2": "[請提供對應區塊錨點]",
      "key3": 7,
      "key4": "",
      "order": "eventhighlights"
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "kv-grid",
      "title": "滿$5,000 贈美妝蛋",
      "key1": "7/1 - 8/31",
      "key2": "#gift-promo",
      "key3": "[請提供圖片網址]",
      "key4": "活動辦法",
      "order": 2
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "kv-grid",
      "title": "LINE 購物回饋 5%",
      "key1": "7/7 - 7/13",
      "key2": "#line-promo",
      "key3": "[請提供圖片網址]",
      "key4": "活動辦法",
      "order": 3
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "kv-grid",
      "title": "MIT洗沐品牌週 88折",
      "key1": "7/14 - 7/2",
      "key2": "",
      "key3": "",
      "key4": "",
      "order": ""
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "sidebar-link",
      "title": "美食專區滿額贈",
      "key1": "",
      "key2": "[請提供對應區塊錨點]",
      "key3": 8,
      "key4": "",
      "order": ""
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "sidebar-link",
      "title": "寶島選物開幕 全館9折",
      "key1": "",
      "key2": "[請提供對應區塊錨點]",
      "key3": 9,
      "key4": "",
      "order": ""
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "sidebar-link",
      "title": "Brand Highlights",
      "key1": "",
      "key2": "#brand-highlights",
      "key3": 10,
      "key4": "",
      "order": ""
    },
    {
      "block_id": "eventhighlights",
      "group_id": "phase1",
      "type": "sidebar-link",
      "title": "Event Highlights",
      "key1": "",
      "key2": "#event-highlights",
      "key3": 11,
      "key4": "",
      "order": ""
    }
  ]
}
    `;

    try {
        // 將 JSON 字串解析為 JavaScript 物件
        const rawData = JSON.parse(rawJsonString);
        
        // 執行和之前一樣的資料轉換
        let processedData = transformData(rawData);

        console.log("✅ [Hardcode Test] Successfully processed hardcoded data.");
        return processedData;

    } catch (e) {
        console.error("❌❌❌ [Hardcode Test] ERROR processing hardcoded data ❌❌❌");
        console.error("Error might be in the JSON string you pasted or in transformData function.");
        console.error(e);
        return { error: "Failed to process hardcoded data.", details: e.message };
    }
};