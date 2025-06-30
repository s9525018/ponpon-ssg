//pop-up
$(function () {
    // Vars
    var modal = $('.pop-modal'),
        close = modal.find('.close'),
        closeIcon = modal.find('.fa'),
        modContent = modal.find('.modal-content');

    // 使用事件代理處理打開 modal
    $(document).on('click', '.modal-btn', function () {
        modal.css('display', 'block');
        modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

    // 關閉 modal
    $(document).on('click', function (e) {
        var target = $(e.target);
        if (target.is(modal) || target.is(close) || target.is(closeIcon)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function (next) {
                modal.css('display', 'none');
                next();
            });
        }
    });
});


// $(function () {
//     // Vars
//     var modBtn = $('.modal-btn'),
//         modal = $('.pop-modal'),
//         close = modal.find('.close'),
//         closeIcon = modal.find('.fa'),
//         modContent = modal.find('.modal-content');
//     // open modal when click on open modal button 
//     modBtn.on('click', function () {
//         modal.css('display', 'block');
//         modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
//     });
//     // close modal when click on close button or somewhere out the modal content 
//     $(document).on('click', function (e) {
//         var target = $(e.target);
//         if (target.is(modal) || target.is(close) || target.is(closeIcon)) {
//             modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function (next) {
//                 modal.css('display', 'none');
//                 next();
//             });
//         }
//     });
// });
