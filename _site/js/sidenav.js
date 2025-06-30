function toggleSidebar(ref) {
  $("#sidebar").toggleClass('active');
}
/*
$(document).ready(
  function() {
  // 當導航列中的錨點被點擊時
  $('nav a, .anchor').on('click', function(e) {
    e.preventDefault();

    // 獲取目標錨點的 id
    var targetId = $(this).attr('href');

    // 使用 animate 函數實現平滑滾動效果
    $('html, body').animate({
      scrollTop: $(targetId).offset().top
    }, 500); // 500 是滾動的時間（以毫秒為單位）
  });
});

*/