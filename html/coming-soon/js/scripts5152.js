/*
Version : 1.0
*/

jQuery(function($) {
    "use strict";

    // Window Load Function
    $(window).on('load',function() {
		
        // Preloader
        $(".le_preloader").addClass('animated fadeOut').delay(300).fadeOut();

    });

    // Masonry
    var $masonry = $('.masonry');

    // initialize Masonry after all images have loaded  
    $masonry.imagesLoaded( function() {
         $masonry.masonry({
            "itemSelector": ".brick",
            "columnWidth": ".grid-sizer",
        });
    });

    // MagnificPopup  
    var img = jQuery('a').filter(function() {
    var href = jQuery(this).attr('href');
    if(typeof href !=='undefined') {
      href = href.toLowerCase();
      return href.substr(-4) === '.jpg' || href.substr(-5) === '.jpeg' ||  href.substr(-4) === '.png' || href.substr(-4) === '.gif';
    }
    });

    img.magnificPopup({
    type:'image',
    removalDelay: 300,
    gallery: {
            enabled:true
          }, 
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable i
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    });

    // Page Open
    $('.portfolio, .le_home_close').on('click', function(){
        $('#home').addClass('fadeOut hide').removeClass('fadeIn show');
        $('.le_porfolio_close').addClass('fadeIn show').removeClass('fadeOut hide');
    });

    $('.le_porfolio_close').on('click', function(){
        $(this).addClass('fadeOut hide').removeClass('fadeIn show');
        $('#home').addClass('fadeIn show').removeClass('fadeOut hide');
    });
    $('.contact').on('click', function(){
        $('#contact').addClass('fadeIn show').removeClass('fadeOut hide');
        $('#home').addClass('fadeOut hide').removeClass('fadeIn show');
    });

    $('.le_contact_close').on('click', function(){
        $('#contact').removeClass('fadeIn show').addClass('fadeOut hide');
        $('#home').removeClass('fadeOut hide').addClass('fadeIn show');
    });

	// Newsletter Form

	$('#le_newsletter_form').ajaxForm(function() { // bind form using 'ajaxForm'

        // Form has been received; here we add 'show' class to target element
        $('.le_newsletter_form_success').addClass('show animated fadeInUp');

	});

    // Show placeholder on focus
    $('.le_email_input').on('focusin',function(){
        $(this).attr('placeholder','Enter your email id');
    });

    // Hide placeholder on focus out
    $('.le_email_input').on('focusout',function(){
        $(this).attr('placeholder','');
    });

	// Contact Form

	$('#le_contact_form').ajaxForm(function() { // bind form using 'ajaxForm'

        // Form has been received; here we add 'show' class to target element
        $('.le_contact_form_success').addClass('show animated fadeInUp');

	});

});