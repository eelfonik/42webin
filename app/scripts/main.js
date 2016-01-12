
(function () {
  'use strict';

  $(window).on("load resize", function(){
    $(".works-pic").mCustomScrollbar({
      theme: "dark",
      callbacks:{
          whileScrolling:function(){  
            $("header").addClass("down");
            $(".logo").removeClass("fadeInDown");
            $(".info").removeClass("fadeInUp").addClass("fadeOutDown");                      
          },
          onTotalScrollBack:function(){
            $("header").removeClass("down");
            $(".logo").addClass("fadeInDown");
            $(".info").removeClass("fadeOutDown").addClass("fadeInUp");
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

      

  $(".logo a").click(function(e){
    e.preventDefault();
    var $header = $("header");
    if ($header.hasClass("clicked")) {
      $header.removeClass("clicked");
    }
    else {
      $header.addClass("clicked");
    }
    // $("header").toggleClass("clicked");
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

  $(".work-name").click(function(){
      var $projets = $("#projets");
      var $this= $(this);
      var pointer = "#"+$this.attr("id")+"-pic";
      var $pic = $(pointer);
      centerEl($pic, $(".works-pic"));
      centerEl($this, $(".works-name"));

      // $this.addClass('showSingle');
      // // $pic.addClass('showSingle');
      // setTimeout(function () { 
      //     $this.removeClass('showSingle');
      //     // $pic.removeClass('showSingle');
      // }, 800);

      
      var color = colorThief.getColor($pic.find("img")[0]);//returns an array of rgb values
      var hexValue = rgbToHex(color[0], color[1], color[2]);
      var luma = 0.2126 * color[0] + 0.7152 * color[1] + 0.0722 * color[2];
      $(".works-pic").css("background-color",hexValue);
      $this.css("color",hexValue);
      $this.siblings().css("color", "#000");
      if (luma < 50) {
          $(".projet-note").css("color","#ddd");
      }
      else {
          $(".projet-note").css("color","#000");
      }
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
