
(function () {
  'use strict';


// $(window).on('scroll', function () {
//     var scrollTop = $(window).scrollTop();
//     if (scrollTop > 0) {
//         $('.app-bar').velocity({height: "80vh"},200);
//     }
//     else {
//          $('.app-bar').velocity({height: "100vh"},200);   
//     }
// });

(function () {
    var previousScroll = 0;

    $(window).scroll(function(){
       var currentScroll = $(this).scrollTop();
       if (currentScroll > previousScroll){
            console.log('up');
           $('.app-bar').velocity({height: "80vh"},400);
       } else {
            console.log('down');
          $('.app-bar').stop().velocity({height: "100vh"},400);
       }
       previousScroll = currentScroll;
    });
}()); //run this anonymous function immediately

  // var querySelector = document.querySelector.bind(document);

  // var navdrawerContainer = querySelector('.navdrawer-container');
  // var body = document.body;
  // var appbarElement = querySelector('.app-bar');
  // var menuBtn = querySelector('.menu');
  // var main = querySelector('main');

  // function closeMenu() {
  //   body.classList.remove('open');
  //   appbarElement.classList.remove('open');
  //   navdrawerContainer.classList.remove('open');
  // }

  // function toggleMenu() {
  //   body.classList.toggle('open');
  //   appbarElement.classList.toggle('open');
  //   navdrawerContainer.classList.toggle('open');
  //   navdrawerContainer.classList.add('opened');
  // }

  // main.addEventListener('click', closeMenu);
  // menuBtn.addEventListener('click', toggleMenu);
  // navdrawerContainer.addEventListener('click', function (event) {
  //   if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
  //     closeMenu();
  //   }
  // });
})();
