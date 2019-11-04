jQuery('document').ready(function($){
  
  jQuery('.about_more, .more-menu').hover(function(){
    jQuery('.more-menu').addClass('active');  
  }, function() {
    jQuery('.more-menu').removeClass('active');
  });

	var slickslide = jQuery('.single_slide').slick({
		dots: true,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
		nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
  	});

  	$('.single_slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  	   $('.slick_content').removeClass('fadeInUp');        
  	   $('.slick_content').addClass('d-none');        
  	});

    $('.single_slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
    	 $('.slick_content').removeClass('d-none');        
  	   $('.slick-active .slick_content').addClass('fadeInUp');        
    });

    var slides = jQuery('.slick-dots li').length;
    if(slides<=1) {
      jQuery('.slick-dots').addClass('d-none');
    } else {
      jQuery('.slick-dots').removeClass('d-none');
    }
  
}); 


  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function isScrolledIntoProject(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }


  // If element is scrolled into view, fade it in
  $(window).scroll(function() {


  	// About Section
  	$('.about .section_heading,.projects .section_heading').each(function() {
      if (isScrolledIntoView(this) === true) { 
        jQuery(this).children('.txt').addClass('fadeInUp');
        jQuery(this).children('.bg_sign').show().addClass('fadeInDown');
	    }
    });
    $('.about .desc').each(function() {
      if (isScrolledIntoView(this) === true) { 
        jQuery(this).addClass('fadeInUp');
     }
    });

    // Project Section
     $('.projects .row').each(function() {
      	if (isScrolledIntoProject(this) === true) { 

      		jQuery(this).children('div').children('.project_box').show();

 	  	    jQuery(this).find('.fadeInLeft_js').each(function() {
		        jQuery(this).addClass('fadeInLeft');
		    });

		    jQuery(this).find('.fadeInUp_js').each(function() {
		        jQuery(this).addClass('fadeInUp');
		    });

		 	jQuery(this).find('.fadeInRight_js').each(function() {
		        jQuery(this).addClass('fadeInRight');
		    });

		    jQuery(this).find('.fadeInUp_js').each(function() {
		        jQuery(this).addClass('fadeInUp');
		    });

 	  	} 
     });


  	// Progress Bar Scroll
    $('.projects .progress').each(function() {
      if (isScrolledIntoView(this) === true) {
       var progressBar = jQuery(".progress-bar");
		progressBar.each(function(indx){
			$(this).css("width", $(this).attr("aria-valuenow") + "%");
		});
	  }
    });

  });

  // Remove Class Transparent
  jQuery(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 550) {
          $("nav.navbar").removeClass("transparent");
          $("nav.navbar").addClass("slideDown");
          $(".top-page .login_register_wr").removeClass("absolute");
      } else {
          $("nav.navbar").addClass("transparent");
          $("nav.navbar").addClass("slideUp");
          $(".top-page .login_register_wr").addClass("absolute");
      }
  }); 
