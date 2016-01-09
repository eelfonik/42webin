
(function () {
  'use strict';


  $(window).on("load resize", function(){


    function centerEl(el, container) {
        var elHeight = el.outerHeight(true);
        var aboveHeight = 0;
        el.prevAll().each(function(){
          aboveHeight += $(this).outerHeight(true);          
        });
        var windowHeight = $(window).height();
        var offset;

        if (elHeight < windowHeight) {
            offset = aboveHeight - (windowHeight/2-elHeight/2);
        }
        else {
          offset = aboveHeight;
        }
        
        container.animate({
              scrollTop: offset
          }, 500);
    }

    // function isScrolledIntoView(el, view){
    //       var centerY = Math.max(0,((view.outerHeight(true)- el.outerHeight(true)) / 2) + view.scrollTop());

    //       var elementTop = el.offset().top;
    //       var elementBottom = elementTop + el.outerHeight(true);

    //       return elementTop <= centerY && elementBottom >= centerY;
    //   }

    function isScrolledIntoView(elem){
          // var centerY = Math.max(0,(($(window).height()-$(elem).outerHeight(true)) / 2 +1));
          // var elementTop = $(elem).offset().top;
          // var elementBottom = elementTop + $(elem).height();
          // return elementTop < centerY && elementBottom > centerY;
          var centerY = $(window).height()/3;
          var elementTop = $(elem).offset().top + 40;
          var elementBottom = elementTop + $(elem).outerHeight(true);
          return elementTop < centerY && elementBottom > centerY;
      }


    function scrollDirection(container) {
      var position = container.scrollTop();
      container.scroll(function(){
        var scroll = container.scrollTop();
        if (scroll > position) {
          // scrolling downwards
          $("header").addClass("down").removeClass("clicked");
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
    }

    scrollDirection($(".works-pic"));
    // scrollDirection($(".works-name"));

      $(".works-pic").scroll(function() {
        $(".work").each(function() {
            var $this = $(this);
            if(isScrolledIntoView($this)) {
              if(!$this.hasClass("clicked")) {
                  $this.addClass("clicked");
                  // var pointer = "#"+$this.attr("id").split('-')[0];
                  // console.log(pointer);
                  // centerEl($(pointer), $(".works-name"));
              }
              $this.siblings().removeClass("clicked");
            }
        });
      });

      

  $(".logo a").click(function(e){
    e.preventDefault();
    $("header").toggleClass("clicked");
    // $("#hello").toggleClass("fadeInDown");
  });

  $(".work-name").click(function(){
      var $this= $(this);
      var pointer = "#"+$this.attr("id")+"-pic";
      var $pic = $(pointer);
      centerEl($pic, $(".works-pic"));
      // $this.addClass('expanded');
      // $this.siblings().removeClass('expanded');
      centerEl($this, $(".works-name"));
      
      // var $container = $this.parent(".works");
      // var $projet = $this.siblings(".projet");
      // if(!$projet.hasClass("clicked")) {
      //     $projet.addClass("clicked");
      // }
      // $container.siblings().find(".projet").removeClass("clicked");
      // centerEl($projet);
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
