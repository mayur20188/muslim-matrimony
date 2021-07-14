
var svgContainer = document.getElementById('svgPreloader');
var animItem = bodymovin.loadAnimation({
	wrapper: svgContainer,
	animType: 'svg',
	loop: true,
	path: 'assets/js/preloader.json'
});

// --------preloader--------------
$(window).on('load', function () {
	setTimeout(() => {
		$('.loader-icon').addClass('animate__backOutDown');
		$('.preloader').fadeOut('slow');
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animate__animated',
			offset: 0,
			mobile: true,
			live: true
		});
		wow.init();
	}, 1000);
	headerStuck();
});

// --------header--------------
$(document).ready(function () {
	headerStuck()
	$('.toggle-btn, .close-menu, .menu-overlay-bg').on('click', function () {
		$('.menu-part').toggleClass('active');
		$('.menu-overlay-bg').toggleClass('active');
	});

	$(window).on('load', function () {
		var headerheight = $('.header-wrapper').outerHeight();
		$('.bg-banner').css({ "padding-top": headerheight + 'px' });
	});
	$(window).on('resize', function () {
		var headerheight = $('.header-wrapper').outerHeight();
		$('.bg-banner').css({ "padding-top": headerheight + 'px' });
	});

	$('#testimonial-slider').slick({
		infinite: true,
		speed: 500,
		fade: true,
		arrows: false,
		asNavFor: '#testi-thumb-slider'
	});
	$('#testi-thumb-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: '<div class="slick-prev slick-thumb-prev"><img src="assets/images/up_arrow.png"></div>',
		nextArrow: '<div class="slick-next slick-thumb-next"><img src="assets/images/down_arrow.png"></div>',
		asNavFor: '#testimonial-slider',
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					vertical: false,
					verticalSwiping: false,
					centerMode: true,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					vertical: false,
					verticalSwiping: false,
					centerMode: true,
				}
			}
		]
	});

	if ($('.c-review-slider').length) {
		$('.c-review-slider').owlCarousel({
			loop: false,
			margin: 30,
			nav: true,
			navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
			dots: false,
			autoWidth: true,
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			responsive: {
				0: {
					items: 1,
					autoWidth: false,
					margin: 10,
				},
				480: {
					items: 1,
					autoWidth: false,
					margin: 15,
				},
				576: {
					items: 1,
					autoWidth: false,
					margin: 15,
				},
				992: {
					items: 2,
					autoWidth: false
				},
				1200: {
					items: 3,
					autoWidth: false
				},
				1600: {
					items: 4,
					autoWidth: false
				}
			}
		})
	};
	storiesSwiperslider();
	blogSwiperslider();

	if ($('[data-scroll]').length) {
		$("[data-scroll]").click(function () {
			var target = $(this).attr('data-target');
			var headerheight = $('.header-wrapper').outerHeight();
			// animate
			$('html, body').animate({
				scrollTop: $('#' + target).offset().top - headerheight
			}, 1000);
		});
	}
});

function headerStuck() {
	var headerHeight = jQuery('.header-wrapper');
	var scroll = jQuery(window).scrollTop();
	if (scroll >= 50) {
		headerHeight.addClass('header-sticky');
	} else {
		headerHeight.removeClass('header-sticky');
	}

	$(window).scroll(function () {
		var headerHeight = $('.header-wrapper');
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			headerHeight.addClass('header-sticky');
		} else {
			headerHeight.removeClass('header-sticky');
		}
	});
}
function storiesSwiperslider() {
	new Swiper('.stories-slider', {
		slidesPerView: 3,
		spaceBetween: 15,
		loop: true,
		autoplay: true,
		navigation: {
			prevEl: '.lsswiper-button-prev',
			nextEl: '.lsswiper-button-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		}
	});
}
function blogSwiperslider() {
	var blogsliderswiper = new Swiper('.blog-slider', {
		slidesPerView: 3,
		spaceBetween: 15,
		loop: true,
		navigation: {
			prevEl: '.bswiper-button-prev',
			nextEl: '.bswiper-button-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3,
			},
		}
	});
}

function equalize(sel) {
	var els = Array.prototype.slice.call(document.querySelectorAll(sel));
	var row = [];
	var max;
	var top;
	function setHeights() {
		row.forEach(function (e) {
			e.style.height = max + 'px';
		});
	}

	for (var i = 0; i < els.length; i++) {
		var el = els[i];
		el.style.height = 'auto';
		if (el.offsetTop !== top) {
			setHeights();
			top = el.offsetTop;
			max = 0;
			row = [];
		}
		row.push(el);
		max = Math.max(max, el.offsetHeight);
	}
	setHeights();
}
window.onload = window.onresize = function () {
	equalize('.c-review-slider .c-review-item');
	equalize('.pf-categoy-row > .col-md-12 .eat-box');

};
function isMobile() {//for detect mobile browser
	var appsVersion = navigator.appVersion,
		isAndroid = (/android/gi).test(appsVersion),
		isIOS = (/iphone|ipad|ipod/gi).test(appsVersion);
	return (isAndroid || isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
}


// ------------help-page-javascript----------
$(".help-more-btn").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).find('span').html("View all topics");
		$(this).find('i').attr("class", "fa fa-chevron-down ml-2");
	} else {
		$(this).addClass("active");
		$(this).find('span').html("View less topics");
		$(this).find('i').attr("class", "fa fa-chevron-up ml-2");
	}
	$(this).parents('.help-box').find('.help-list-qst').find('.col-lg-6').toggleClass('col-lg-12');
});

// -------testimonial-slider-----


$(window).on("load resize", function () {
	layoutSpace();
	if ($('#testi-slider').length) {
		var swiper = new Swiper('#testi-slider', {
			slidesPerView: 2,
			// centeredSlides: true,
			spaceBetween: 0,
			navigation: {
				nextEl: '.swiper-next',
				prevEl: '.swiper-prev',
			},
			loop: true,
			breakpoints: {
				767: {
					slidesPerView: 1,
					slidesPerColumn: 1,
				},
				991: {
					slidesPerView: 1,
					slidesPerColumn: 1,
				},
				1199: {
					slidesPerView: 2,
				}
			}
		});
	}
});
function layoutSpace() {
	var containerwidth = $(".container").innerWidth();
	var windowWidth = $(window).innerWidth();
	var remainningWidth = (windowWidth - containerwidth) / 2;
	$(".users-section").css("padding-left", remainningWidth + 'px');
}

function googleTranslateElementInit() {
	new google.translate.TranslateElement({
		pageLanguage: 'en',
		multilanguagePage: true,
		// layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT
	},
		'google_translate_element'
	);
}


$(document).ready(function () {

	function setCookie(cname, cvalue, exdays = 999) {
		const d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		const expires = 'expires=' + d.toUTCString();
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	}

	$(document).on("click", ".lang-select", function () {
		var code = $(this).data('code');
		var lang = $(this).data('lang');
		setCookie("googtrans", "/en/" + lang);
		var theLang = $(this).attr('data-lang');
		$('.goog-te-combo').val(theLang);
		// debugger;
		window.location = $(this).attr('href');
		location.reload();

	});

	const value = `; ${document.cookie}`;
	const parts = value.split(`; googtrans=`);
	const gotrans = parts.pop();
	// console.log(gotrans)
	$('.dropdown-menu a').each(function (index, ele) {
		$(this).removeClass('active')
		$('a[data-code="' + gotrans + '"]').addClass('active');
		var selelangflag = $('a[data-code="' + gotrans + '"]').find('img').attr('src');
		var selelangname = $('a[data-code="' + gotrans + '"]').find('span').attr('data-langname');
		// console.log("Flag: " + selelangflag, '---', "lang Name: " + selelangname);
		$('.lang-item').find('img').attr('src', selelangflag)
		$('.lang-item').find('span').html(selelangname)
	});
});