$(function () {
  $('#BackTop').click(function () {
      $('html,body').animate({
          scrollTop: 0
      }, 500);
  });
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('#BackTop').fadeIn(200);
      } else {
          $('#BackTop').stop().fadeOut(200);
      }
  }).scroll();

  function toggleSidebar(ref) {
      $("#sidebar").toggleClass('active');
    }
    
    $(document).ready(
      function() {
      // 當導航列中的錨點被點擊時
      $('.menu a').on('click', function(e) {
        // 移除 e.preventDefault(); 让默认的锚点行为生效
    
        // 獲取目標錨點的 id
        var targetId = $(this).attr('href');
    
        // 使用 animate 函數實現平滑滾動效果
        $('html, body').animate({
          scrollTop: $(targetId).offset().top
        }, 500);
      });
    });
});
