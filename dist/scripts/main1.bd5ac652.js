
(function () {
  'use strict';

    // $(this).html(mainTl.reversed() ? "works":"info");

    // mainTl.reversed() ? mainTl.play(): mainTl.reverse();
    // $(this).innerHTML = mainTl.reversed() ? "info":"works";
    // mainTl.play();
    // $(".app-bar").toggleClass("hide");


  $(window).on("load resize", function(){
    

      var mainTl = new TimelineMax({
      paused:true,
      reversed:true
    });
    // mainTl.to(".logo a",0.5, {text:"about"})
    mainTl.to(".logo", 0.1, {y:"-15%", rotationX:90, transformOrigin:"50% top 0"},0)
          .to(".info", 0.1, {y:"15%", rotationX:-90, transformOrigin:"50% bottom 0"},0);
          // .to(".app-bar",0.0001, {x:"100%"})


    function centerEl(el) {
        var elOffset = el.offset().top;
        var elHeight = el.height();
        var windowHeight = $(window).height();
        var offset;

        if (elHeight < windowHeight) {
          offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
        }
        else {
          offset = elOffset;
        }

        $('html, body').animate({
              scrollTop: offset
          }, 500);
    }

    function isScrolledIntoView(elem){
          var centerY = Math.max(0,(($(window).height()-$(elem).outerHeight()) / 2) + $(window).scrollTop());

          var elementTop = $(elem).offset().top;
          var elementBottom = elementTop + $(elem).height();

          return elementTop <= centerY && elementBottom >= centerY;
      }


  
      var position = $(window).scrollTop();

      $(window).scroll(function() {
        $(".projet").each(function() {
            if(isScrolledIntoView($(this))) {
              if(!$(this).hasClass("clicked")) {
                  $(this).addClass("clicked");
              }
              $(this).parent(".works").siblings().find(".projet").removeClass("clicked");
            }
        });
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          // scrolling downwards
          $("header").addClass("down");
          $(".logo").removeClass("fadeInDown");
          $(".info").removeClass("fadeInUp").addClass("fadeOutDown");
        } else {
          // scrolling upwards
          $("header").removeClass("down");
          $(".logo").addClass("fadeInDown");
          $(".info").removeClass("fadeOutDown").addClass("fadeInUp");
        }
        position = scroll;
      });

      

  $(".logo a").click(function(e){
    e.preventDefault();
    $("header").toggleClass("clicked");
    $("#hello").toggleClass("fadeInDown");
    // if (mainTl.reversed()) {
    //   mainTl.play();
    // }
    // else {
    //   if(!mainTl.reversed() && mainTl.progress() === 1) {
    //     mainTl.reverse();
    //   }
    // }
  });

  $(".projet-name").click(function(e){
      e.preventDefault();
      var $this= $(this);
      var $container = $this.parent(".works");
      var $projet = $this.siblings(".projet");
      if(!$projet.hasClass("clicked")) {
          $projet.addClass("clicked");
      }
      $container.siblings().find(".projet").removeClass("clicked");
      centerEl($projet);
  });
    
  });




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
