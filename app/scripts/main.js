
(function () {
  'use strict';

    // $(this).html(mainTl.reversed() ? "works":"info");

    // mainTl.reversed() ? mainTl.play(): mainTl.reverse();
    // $(this).innerHTML = mainTl.reversed() ? "info":"works";
    // mainTl.play();
    // $(".app-bar").toggleClass("hide");

  // var s = Snap("#svg");
  // var bg = s.paper.rect(0,0,"100%","100%");
  // var dot = s.paper.rect(0,0,0,0);
  // var dot2 = s.paper.rect(10,10,0,0);
  
  // var p = s.group(dot,dot2).toPattern(0,0,20,20);
  // dot.attr({
  //               fill: "#fff",
  //               "fill-opacity":1
  //           });
  // dot2.attr({
  //               fill: "#fff",
  //               "fill-opacity":0.5
  //           });
  // bg.attr({
  //   fill: p
  // });
  // var myLoadList = [ "../images/z0.svg", "../images/arrow.svg" ];
  // s.loadFilesDisplayOrdered( myLoadList );
  // Snap.load("../images/z0.svg", function(f){
  //   s.append(f);
  // });
  // Snap.load("../images/arrow.svg", function(f){
  //   s.append(f);
  // });
  
  // Snap.load("../images/house1.svg", function (f) {
  //               var g = f.select("#Page-1");
  //               // var g = f.selectAll("text");
  //               f.select("#line").animate({
  //                   fill: "#34d728",
  //                   d:"M45,65 C31.937,65 21.065,54.375 20.764,41.316 L21.738,41.293 C22.026,53.828 32.462,64.026 45,64.026 C57.538,64.026 67.974,53.828 68.262,41.293 L69.236,41.316 C68.935,54.375 58.063,65 45,65 L45,65 Z"
  //               },10000);
  //               s.append(f);
  //               g.drag();
  //           });

  $(window).on("load resize", function(){
  //   var s = Snap();
  // var dot = s.circle(10,10,50);
  // dot.attr({
  //               fill: "#bada55",
  //               stroke: "#000",
  //               strokeWidth: 5
  //           });
    var wh = $(this).height();
    $(".fold").css("height", wh/2+"px");
      var mainTl = new TimelineMax({
      paused:true,
      reversed:true
    });
  var ww = ($(window).width()-90)/2;
    mainTl.to(".logo", 0.5, {y:"-15%", rotationX:90, transformOrigin:"50% top 0"})
          .to(".info", 0.5, {y:"15%", rotationX:-90, transformOrigin:"50% bottom 0"},0)
          .to(".app-bar",0.0001, {x:"100%"})
          .to("#toggle",0.5, {text:"info", x:ww, backgroundColor:"#fff",borderRadius:"5px"});

  $("#toggle").click(function(){
    // $folds.toggleClass("unfold");
    if (mainTl.reversed()) {
      mainTl.play();

      // dot.animate({
      //     width:10,
      //     height:10
      // },5000,mina.elastic);
      // dot2.animate({
      //     width:10,
      //     height:10
      // },5000,mina.elastic);
      
      // s.select("path").animate({
      //     fill: "#523B3B",
      //     transform: 'r360,150,150',
      //     d:"M109.625671,39.3635411 C336.60679,-89.0920279 398.600413,137.96561 398.600413,137.96561 L552,22.2288759 L405.749105,322 L276.721289,224.439694 L81.1119835,255.607059 C81.1119835,255.607059 -117.355447,167.81911 109.625671,39.3635411 Z"
      // },2000,mina.bounce);
                

      // TweenMax.to("#toggle", 0.5, {text:"info"});
      // $("#toggle").html("info");
    }
    else {
      if(!mainTl.reversed() && mainTl.progress() === 1) {
        mainTl.reverse();
        dot.animate({
          width:0,
          height:0
        },5000,mina.elastic);
        dot2.animate({
          width:0,
          height:0
        },5000,mina.elastic);
        s.select("path").animate({
            fill: "#47AD66",
            transform: 'r180,150,150',
            d:"M82.3762305,24.7483366 C252.531525,-56.0132404 299.004743,86.7406553 299.004743,86.7406553 L414,13.9755643 L304.363726,202.445312 L207.638649,141.107963 L61.0010826,160.703264 C61.0010826,160.703264 -87.7790641,105.509914 82.3762305,24.7483366 Z"
        },2000,mina.elastic);
        // $("#toggle").html("works");
      }
    }
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
