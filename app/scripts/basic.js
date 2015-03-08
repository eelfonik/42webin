(function($) {
	'use strict';

	$.Velocity
    .RegisterEffect("transition.leftInside", {
        defaultDuration: 700,
        calls: [ 
            [ { translateX: [0, -99+'%'], translateZ: 0 } ]
        ]
    });
    $.Velocity.RegisterEffect("transition.leftOutside", {
        defaultDuration: 700,
        calls: [ 
            [ { translateX: [ -99+'%', 0], translateZ: 0 } ]
        ]
    });
    $.Velocity.RegisterEffect("transition.zoomShow", {
        defaultDuration: 700,
        calls: [ 
            [ { scale: 100 } ]
        ]
    });
    $.Velocity.RegisterEffect("transition.zoomHide", {
        defaultDuration: 600,
        calls: [ 
            [ { scale: 1} ]
        ]
    });
    $.Velocity.RegisterEffect("transition.myfadeIn", {
        defaultDuration: 700,
        calls: [ 
            [ { opacity: [ 1, 0 ] } ]
        ]
    });
    $.Velocity.RegisterEffect("transition.myfadeOut", {
        defaultDuration: 700,
        calls: [ 
            [ { opacity: [ 0, 1 ] } ]
        ]
    });

	$(document).ready(function(){
		// TweenMax.to($('.num'), speed, {top: newq[0],
  //                      			left: newq[1],
  //                      			repeat:-1,
  //                      			onRepeat: makeNewPosition
  //        						} );
    // $(window).on('load resize', function(){
    // 	animateDiv();
    // });
     
    $('.num').on('click', function(){
    		var $this = $(this);
      		$this.toggleClass('green');
      		if ($this.hasClass('green')) {
      			$this.velocity('stop',true);
      		}
      	});
    $('#zero').on('click', function(){
    	$('#intro').velocity("transition.leftInside") ;
    });
    $('.opener').on('click', function(){
    	$('#intro').velocity("transition.leftInside") ;
    });
    $('#one').on('click', function(){
    	$(this).addClass('zoom');
    	$(this).velocity("transition.zoomShow", function(){
    			$('#projectOne').velocity('transition.fadeIn');
    	});
  		
    	// $('#intro').velocity("transition.leftInside") ;
    });

    $('#closerzero').on('click', function(){
    	$('#intro').velocity("transition.leftOutside") ;
    	$('#zero').removeClass('green');
    });

    $('#closerone').on('click',function(){
    	// $('#one').removeClass('zoom');
    	$('#projectOne').velocity('transition.fadeOut', function(){
    			$('#one').removeClass('zoom green').velocity("transition.zoomHide");
    		});
    });

    // $("#oneThumb").anystretch("images/1.png");

       
	});
	

	function makeNewPosition(){
    
    var h = $(window).height() - 200;
    var w = $(window).width() - 100;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}
	
	function animateDiv(){
    
    
    $('.num').each(function(){
    	var $this = $(this);
    	var newq = makeNewPosition();
    	var oldq = $this.offset();
    	var speed = calcSpeed([oldq.top, oldq.left], newq);
    	// var numTween = new TweenMax($this, speed/1000, {top: newq[0],
     //                   			left: newq[1],
     //                   			onComplete: animateDiv
     //     						});
    	$this.velocity({ top: newq[0], left: newq[1] }, speed, function(){
      		if (!$this.hasClass('green')) {
      			animateDiv();
      		}
      	});
    });
    
}

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.025;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
})(jQuery);