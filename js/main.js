;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
					
					// Preserve dropdown state for project pages
					var currentPage = window.location.pathname;
					if (currentPage.includes('work.html') || currentPage.includes('project.html')) {
						$('.dropdown.active').addClass('open');
					}
				}, 100);
			}
		});

		// Close sidebar when clicking on navigation links (for anchor links within same page)
		$('#colorlib-main-nav a[href^="#"]').on('click', function(event) {
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			}
		});
	};

	// Dropdown functionality
	var dropdownMenu = function() {
		$('.dropdown-toggle').on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			var $dropdown = $(this).parent('.dropdown');
			var $toggle = $(this);
			
			// Close all other dropdowns
			$('.dropdown').not($dropdown).removeClass('open');
			$('.dropdown').not($dropdown).find('.dropdown-toggle').blur();
			
			// Toggle current dropdown
			$dropdown.toggleClass('open');
			
			// If dropdown was closed, blur the toggle to remove focus state
			if (!$dropdown.hasClass('open')) {
				$toggle.blur();
			}
		});

		// Close dropdown when clicking outside
		$(document).on('click', function(event) {
			if (!$(event.target).closest('.dropdown').length) {
				$('.dropdown').removeClass('open');
				$('.dropdown-toggle').blur(); // Remove focus when closing dropdown
			}
		});

		// Close dropdown when clicking on dropdown menu items that navigate to different pages
		$('.dropdown-menu a[href]').on('click', function(event) {
			var href = $(this).attr('href');
			if (href.indexOf('#') === -1 || href.indexOf('work.html') !== -1) {
				// If it's a page navigation, close the sidebar
				if( $('body').hasClass('menu-show') ) {
					$('body').removeClass('menu-show');
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
				}
			}
		});

		// Remove focus from external links (GitHub, LinkedIn, etc.) after clicking
		$('#colorlib-main-nav a[target="_blank"], .colorlib-social-icons a[href^="http"]').on('click', function(event) {
			var $this = $(this);
			// Small delay to allow the link to process before removing focus
			setTimeout(function() {
				$this.blur();
			}, 100);
		});
	};

	// Animations

	var pageLoadAnimations = function() {
		// Function to animate elements on page load
		var animateOnLoad = function(selector, animationClass, baseDelay) {
			var $elements = $(selector);
			
			$elements.each(function(index) {
				var $element = $(this);
				var delay = baseDelay + (index * 200); // Staggered animation
				
				setTimeout(function() {
					$element.addClass(animationClass + ' animated');
				}, delay);
			});
		};
		
		// Function to animate rotated text (preserve rotation while animating)
		var animateRotatedText = function() {
			var $rotatedElements = $('.rotate .heading');
			
			// Initially hide rotated text without affecting rotation
			$rotatedElements.css({
				'opacity': '0',
				'transform': 'rotate(90deg) translateY(20px)'
			});
			
			// Animate them in with a delay
			setTimeout(function() {
				$rotatedElements.css({
					'opacity': '1',
					'transform': 'rotate(90deg) translateY(0px)',
					'transition': 'all 0.4s ease-out'
				});
			}, 350);
		};
		
		// Animate main headings (About, Projects)
		animateOnLoad('h2.bold', 'fadeInUp', 150);
		
		// Animate back navigation links
		animateOnLoad('.back-to-projects', 'fadeInUp', 250);
		
		// Animate rotated text with custom approach
		animateRotatedText();
		
		// Animate other important elements that should appear on page load
		setTimeout(function() {
			$('.intro-heading').addClass('fadeInUp animated');
		}, 450);
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Owl Carousel
	var owlCarouselFeatureSlide = function() {
		var owl = $('.owl-carousel1');
		owl.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:true,
		   dots: false,
		   autoHeight: true,
		   responsive:{
		      0:{
		         items:1
		      },
		      600:{
		         items:2
		      },
		      1000:{
		         items:3
		      }
		   },
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
		var owl2 = $('.owl-carousel');
		owl2.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:false,
		   dots: true,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});
		var owl3 = $('.owl-carousel3');
		owl3.owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:false,
		   dots: false,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});	
	};

	


	// Document on load.
	$(function(){
		fullHeight();
		burgerMenu();
		dropdownMenu();
		pageLoadAnimations();
		counterWayPoint();
		contentWayPoint();
		owlCarouselFeatureSlide();
	});


}());