// toggle visibility for css3 animations 
$(document).ready(function() {
	$('header').addClass('visibility');
	$('.carousel-iphone').addClass('visibility');
	$('.payoff h1').addClass('visibility');
	$('.detail .item').addClass('visibility');
	$('.features .col-md-4').addClass('visibility');
	$('.social .col-md-12').addClass('visibility');
	$('.get-it .col-md-12').addClass('visibility');
});


//iphone carousel animation
$(window).load(function () {
	$('header').addClass("animated fadeIn");
	$('.carousel-iphone').addClass("animated fadeInLeft");
});

// Fixed navbar
$(window).scroll(function () {

var scrollTop = $(window).scrollTop();

	if (scrollTop > 220) {
		$('.navbar-default').css('display', 'block');
		$('.navbar-default').addClass('fixed-to-top');
			
	} else if (scrollTop == 0)   {
	
		$('.navbar-default').removeClass('fixed-to-top');
	}
	
	$('.purchase .row').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated pulse");
			}		
				
	});
	
	
	$('.get-it .col-md-12').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeIn");
			}		
				
	});
	
//animations	
	$('.payoff h1').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeIn");
			}		
				
	});
	
	$('.detail .item').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeInRight");

				// Vivus animation
				var vivusSvg = $(this).find('.vivus-svg');

				if(vivusSvg && vivusSvg.is(':empty')) {
					new Vivus(vivusSvg.attr('id'), {
						type: 'delayed', 
						duration: 150, 
						file: vivusSvg.attr('svg-file')
					});
				}
			}		
				
	});
	
	$('.features .col-md-4').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated flipInX");
			}		
				
	});
	
	$('.social .col-md-12').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+850) {
				$(this).addClass("animated fadeInLeft");
			}		
				
	});
	
	
});


// Parallax Content

function parallax() {

		// Turn parallax scrolling off for iOS devices
		   
		    var iOS = false,
		        p = navigator.platform;
		
		    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
		        iOS = true;
		    }
	
		var scaleBg = -$(window).scrollTop() / 3;

        if (iOS === false) {
            $('.payoff').css('background-position-y', scaleBg - 150);
            $('.social').css('background-position-y', scaleBg + 200);
        }
   
}

function navbar() {

	if ($(window).scrollTop() > 1) {
	    $('#navigation').addClass('show-nav');
	} else {
	    $('#navigation').removeClass('show-nav');
	}
	
}

$(document).ready(function () {

	var browserWidth = $(window).width();
	
	if (browserWidth > 560){ 
	
		$(window).scroll(function() {
			parallax();
			navbar();
		});
	
	}

});	


$(window).resize(function () {

	var browserWidth = $(window).width();
	
	if (browserWidth > 560){ 
	
		$(window).scroll(function() {
			parallax();
			navbar();
		});
	
	}

});	


// iPhone Header Carousel
$('.payoff .carousel').carousel({
  interval: 2500
})

// iPhone Features Carousel
$('.detail .carousel').carousel({
  interval: 5000
})

