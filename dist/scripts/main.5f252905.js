
(function () {
  'use strict';

  document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        // Use event.pageX / event.pageY here
        
        if (event.pageY<= 50 || event.pageY >= $(window).height()- 40 ){
          if (!$("header").hasClass("clicked") && $("header").hasClass("down")) {
              $("header").removeClass("down");
              // $(".logo").removeClass("fadeOutUp").addClass("fadeInDown");
              $(".info").removeClass("fadeOutDown").addClass("fadeInUp");
            } 
        }
        else {
          // $("header").addClass("down");
          //   $(".logo").removeClass("fadeInDown");
          //   $(".info").removeClass("fadeInUp").addClass("fadeOutDown");
        }
    }

  $(window).on("load", function(){
    var $header = $("header");
    $(".pic-slide").slick({
      fade: true,
      lazyLoad: 'progressive',
      prevArrow: '<div data-role="none" class="slick-prev" aria-label="Previous" tabindex="0"></div>', 
      nextArrow: '<div data-role="none" class="slick-next" aria-label="Next" tabindex="0"></div>'
    });
    $(".works-pic").mCustomScrollbar({
      theme: "dark",
      callbacks:{
          whileScrolling:function(){
            if (!$header.hasClass("clicked") && !$header.hasClass("down")) {
              $header.addClass("down");
              // $(".logo").addClass("fadeOutUp").removeClass("fadeInDown");
              $(".info").removeClass("fadeInUp").addClass("fadeOutDown"); 
            }
            // if ($(".logo").hasClass("fadeInDown"))
            // else {
            //   $header.removeClass("clicked").delay(400)
            //            .queue(function() {
            //                $(this).addClass("down");
            //                $(this).dequeue();
            //            });
            // }
            // else {
            //   $header.addClass("down");
            // } 
            // $(".logo").addClass("fadeOutUp").removeClass("fadeInDown");
            // $(".info").removeClass("fadeInUp").addClass("fadeOutDown");                      
          },
          onTotalScrollBack:function(){
            if (!$header.hasClass("clicked") && $header.hasClass("down")) {
              $header.removeClass("down");
              // $(".logo").removeClass("fadeOutUp").addClass("fadeInDown");
              $(".info").removeClass("fadeOutDown").addClass("fadeInUp");
            } 
          }
      }
    });

    function centerEl(el, container) {
        // var elHeight = el.outerHeight(true);
        // var aboveHeight = 0;
        // el.prevAll().each(function(){
        //   aboveHeight += $(this).outerHeight(true);          
        // });
        // var windowHeight = $(window).height();
        // var offset;

        // if (elHeight < windowHeight) {
        //     offset = aboveHeight - (windowHeight/2-elHeight/2);
        // }
        // else {
        //   offset = aboveHeight;
        // }
        
        // container.animate({
        //       scrollTop: offset
        //   }, 500);
        container.mCustomScrollbar('scrollTo', function(){ 
          var elHeight = el.outerHeight(true);
          var aboveHeight = 0;
          el.prevAll().each(function(){
            aboveHeight += $(this).outerHeight(true);          
          });
          var windowHeight = $(window).height();
          var offset;

          if (elHeight < windowHeight) {
              offset = Math.max(0, (aboveHeight - (windowHeight/2-elHeight/2)));
          }
          else {
            offset = aboveHeight;
          }

          return offset;
        }, {scrollInertia:500});

    }

    // function isScrolledIntoView(el, view){
    //       var centerY = Math.max(0,((view.outerHeight(true)- el.outerHeight(true)) / 2) + view.scrollTop());

    //       var elementTop = el.offset().top;
    //       var elementBottom = elementTop + el.outerHeight(true);

    //       return elementTop <= centerY && elementBottom >= centerY;
    //   }

    // function isScrolledIntoView(elem){
    //       // var centerY = Math.max(0,(($(window).height()-$(elem).outerHeight(true)) / 2 +1));
    //       // var elementTop = $(elem).offset().top;
    //       // var elementBottom = elementTop + $(elem).height();
    //       // return elementTop < centerY && elementBottom > centerY;
    //       var centerY = $(window).height()/3;
    //       var elementTop = $(elem).offset().top + 40;
    //       var elementBottom = elementTop + $(elem).outerHeight(true);
    //       return elementTop < centerY && elementBottom > centerY;
    //   }


    // function scrollDirection(container) {
    //   var position = container.scrollTop();
    //   container.scroll(function(){
    //     var scroll = container.scrollTop();
    //     if (scroll > position) {
    //       // scrolling downwards
    //       $("header").addClass("down").removeClass("clicked");
    //       $(".logo").removeClass("fadeInDown");
    //       $(".info").removeClass("fadeInUp").addClass("fadeOutDown");
    //     } else {
    //       // scrolling upwards
    //       $("header").removeClass("down");
    //       $(".logo").addClass("fadeInDown");
    //       $(".info").removeClass("fadeOutDown").addClass("fadeInUp");
    //     }
    //     position = scroll;
    //   });
    // }

    // scrollDirection($(".works-pic"));
    // scrollDirection($(".works-name"));

      // $(".works-pic").scroll(function() {
      //   $(".work").each(function() {
      //       var $this = $(this);
      //       if(isScrolledIntoView($this)) {
      //         if(!$this.hasClass("clicked")) {
      //             $this.addClass("clicked");
      //         }
      //         $this.siblings().removeClass("clicked");
      //       }
      //   });
      // });

  $header.click(function(event){
    if ($(event.target).is('a')) { return false; }
    $header.removeClass("clicked");
  });

  $(".logo a").click(function(e){
    e.preventDefault();
    $header.toggleClass("clicked");
  });

  var colorThief = new ColorThief();

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  // // Converts a hex colour to its opposite:

  // function decimalToHex(decimal) {
  // var hex = decimal.toString(16);
  // if (hex.length == 1) hex = '0' + hex;
  // return hex;
  // }
  // function hexToDecimal(hex) {return parseInt(hex,16);}
   
  // function returnOpposite(colour) {
  //   return decimalToHex(255 - hexToDecimal(colour.substr(0,2))) + decimalToHex(255 - hexToDecimal(colour.substr(2,2))) + decimalToHex(255 -  hexToDecimal(colour.substr(4,2)));
  // }
  function changeColor(img, name) {
      var color = colorThief.getColor(img.find(".slick-current")[0]);//returns an array of rgb values
      // console.log($pic.find("img")[0]);
      var hexValue = rgbToHex(color[0], color[1], color[2]);
      var luma = 0.2126 * color[0] + 0.7152 * color[1] + 0.0722 * color[2];
      $(".works-pic").css("background-color",hexValue);
      name.css("color",hexValue);
      name.siblings().css("color", "#000");
      if (luma < 50) {
          $(".projet-note").css("color","#ddd");
          $(".under-line").addClass("light");
      }
      else {
          $(".projet-note").css("color","#111");
          $(".under-line").removeClass("light");
      }
  }

  $(".slick-arrow").click(function(){
      var $pointer = $(this).closest(".work");
      var pointer = "#"+$pointer.attr("id").split('-')[0];
      var $name = $(pointer);
      centerEl($pointer, $(".works-pic"));
      centerEl($name, $(".works-name"));
      changeColor($pointer, $name);
  })

  $(".work-name").click(function(){
      var $this= $(this);
      var pointer = "#"+$this.attr("id")+"-pic";
      var $pic = $(pointer);
      centerEl($pic, $(".works-pic"));
      centerEl($this, $(".works-name"));
      changeColor($pic, $this);

      // $this.addClass('showSingle');
      // // $pic.addClass('showSingle');
      // setTimeout(function () { 
      //     $this.removeClass('showSingle');
      //     // $pic.removeClass('showSingle');
      // }, 800);

      // var $container = $this.parent(".works");
      // var $projet = $this.siblings(".projet");
      // if(!$projet.hasClass("clicked")) {
      //     $projet.addClass("clicked");
      // }
      // $container.siblings().find(".projet").removeClass("clicked");
      // centerEl($projet);
  });
    
  });//onload function

  $(window).on("resize", function(){
    if ($(window).width()<=990) {
      $(".works-pic").css("background-color","transparent");
      $(".projet-note").css("color","#111");
      $(".under-line").removeClass("light");
    }
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