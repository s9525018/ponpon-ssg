// 男子穿搭圖鑑 tab 切換
document.querySelectorAll('.men-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.men-tab').forEach(function(t) {
            t.classList.remove('active');
        });
        document.querySelectorAll('.pms-container').forEach(function(c) {
            c.classList.remove('active');
        });
        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-target')).classList.add('active');
    });
});

// 女子穿搭圖鑑 tab 切換
document.querySelectorAll('.women-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        // 移除所有tab的active
        document.querySelectorAll('.women-tab').forEach(function(t) {
            t.classList.remove('active');
        });
        // 隱藏所有內容
        document.querySelectorAll('.pws-container').forEach(function(c) {
            c.classList.remove('active');
        });
        // 顯示對應內容
        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-target')).classList.add('active');
    });
});