// 【v10 終極純淨版】 - 只包含最基礎的資料轉換和寫死的、經過驗證的 JS 物件

// 輔助函式
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

module.exports = function() {
    console.log("🚀 [v10 Clean Slate] Using purest hardcoded JS object.");

    // 直接定義一個絕對乾淨、合法的 JavaScript 物件
    const rawData = {
        "pagelayout": [{"block_id": "eventhighlights", "is_enabled": true}],
        "pagecontent": [
            {"block_id": "eventhighlights", "group_id": "phase1", "type": "kv-grid", "title": "【測試標題】滿$8,000 折$400", "key1": "7/1 - 8/31", "key2": "#", "key3": "", "key4": "活動辦法", "order": 1},
            {"block_id": "eventhighlights", "group_id": "phase1", "type": "sidebar-link", "title": "【測試連結】全館折扣優惠", "key1": null, "key2": "#", "key3": null, "key4": null, "order": 1}
        ]
    };

    // 執行資料轉換
    let processedData = transformData(rawData);
    console.log("✅ [v10 Clean Slate] Data processed. Returning:", Object.keys(processedData));
    return processedData;
};