function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function filterFunction2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

$(document).ready(function() {

	$("#myInput").on('propertychange input', function (e) {
		parent = $(this).closest(".search_form_sect");
		parent.addClass("active");
	});

	$(this).keydown(function(eventObject){
		if (eventObject.which == 27) {
		  $(".search_form_sect").removeClass("active");
		}
	});

	$(document).mouseup(function(e) {
		hide_element = $("#myDropdown");
		if (!hide_element.is(e.target)
		    && hide_element.has(e.target).length === 0) {
		    $(".search_form_sect").removeClass("active");
		  }
	});

	// disable scroll
	var $nonScrollable = $("header");

	//  header catalog
	$(".nav-header .menu-item-has-children > a").mouseenter(function(){ 
		$nonScrollable.disablescroll();
		$('.submenu').addClass('open');
		$('body').addClass('stop-scrolling1');
	});
	$(".submenu .submenu__inner").mouseleave(function(){ 
		$nonScrollable.disablescroll("undo");
		$('.submenu').removeClass('open');
		$('body').removeClass('stop-scrolling1');
	});


	//  header top menu
	$('.header_burger .mobile_button').click(function() {
		$('.menu_toggle').animate({'width': 'toggle'}, 100);
		$('body').toggleClass('stop-scrolling');
		return false;
	});
	$(".menu_toggle li a").on("click", function() {
		$(this).toggleClass('active');
  		$(this).parent().find('.sub-menu').slideToggle("fast");
	});
	$('body').on('click', '.menu_toggle li:not(.menu-item-has-children)', function() {
		$('.menu_toggle').animate({'width': 'toggle'}, 100);
		$('body').toggleClass('stop-scrolling');
	});
	$('.header_burger .close').click(function() {
		$('.menu_toggle').animate({'width': 'toggle'}, 100);
		$('body').removeClass('stop-scrolling');
	});


	//  cart
	$('.cart__content').click(function() {
		$nonScrollable.disablescroll();
		event.preventDefault();
		$('.tds-menu-header-mask').addClass('overlay');
		$('.cart__main').addClass("open");
	});
	$('.header__user .close').click(function() {
		$('.cart__main').removeClass("open");
		$('.tds-menu-header-mask').removeClass('overlay');
		$nonScrollable.disablescroll("undo");
	});
	$(document).mouseup(function (e) {
	    var container = $('.cart__main');
	    if (container.has(e.target).length === 0){
	        container.removeClass('open');
	        $('.tds-menu-header-mask').removeClass('overlay');
	        $nonScrollable.disablescroll("undo");
	    }
	});


	// Phone mask
	$(function(){
	   $(".phone-mask").mask("+7(999) 999-99-99");
	});


	// submenu tabs
	$(function() {
		$('ul.submenu__caption').on('mouseover', 'li:not(.active)', function() {
			$(this)
	    	.addClass('active').siblings().removeClass('active')
	    	.closest('div.tabs').find('div.tabs__content').removeClass('active animated fadeIn').eq($(this).index()).addClass('active animated fadeIn');
	  	});
	});


	// modal tabs
	$(function() {
		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
	    	.addClass('active').siblings().removeClass('active')
	    	.closest('div.tabs').find('div.tabs__content').removeClass('active animated fadeIn').eq($(this).index()).addClass('active animated fadeIn');
	  	});
	});


	// categoty__slider
	$('.categoty__slider').slick({
		infinite: false,
		slidesToShow: 5,
		dots: false,
		fade: false,
		arrows: false,
		autoplay: false,
		// adaptiveHeight: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        prevArrow: '<div class="slick-prev"><img src="./img/arrow.svg" alt=""></div>',
        nextArrow: '<div class="slick-next"><img src="./img/arrow.svg" alt=""></div>',
        responsive: [
        	{
        		breakpoint: 1199,
        		settings: {
        			
        		}
        	},
        	{
        		breakpoint: 991,
        		settings: {
        			
        		}
        	},
    		{
    			breakpoint: 768,
    			settings: {
    				
    			}
    		},
    		{		
    			breakpoint: 576,
    			settings: {
    				
    			}
    		}	
    	]
	});


	// modal autoFocus on input off
	$('[data-fancybox=""]').fancybox({
	    autoFocus: false
	});


	// shop__slider
	$(window).ready(function() {
		$('.shop__slider').on('setPosition', function () {
		$(this).find('.slick-slide > div').height('auto');
		var slickTrack = $(this).find('.slick-track');
		var slickTrackHeight = $(slickTrack).height();
		$(this).find('.slick-slide > div').css('height', slickTrackHeight + 'px');
		});
	 })
	$('.shop__slider').slick({
		// infinite: false,
		slidesToShow: 4,
		dots: false,
		fade: false,
		arrows: true,
		autoplay: false,
		// adaptiveHeight: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        speed: 300,
        prevArrow: '<div class="slick-prev"><img src="./img/slide_arrow.svg" alt=""></div>',
        nextArrow: '<div class="slick-next"><img src="./img/slide_arrow.svg" alt=""></div>',
        responsive: [
        	{
        		breakpoint: 1199,
        		settings: {
        			slidesToShow: 3,
        		}
        	},
        	{
        		breakpoint: 991,
        		settings: {
        			slidesToShow: 3,
        		}
        	},
    		{
    			breakpoint: 768,
    			settings: {
    				slidesToShow: 2,
    			}
    		},
    		{		
    			breakpoint: 576,
    			settings: {
    				slidesToShow: 2,
    				dots: true,
    			}
    		}	
    	]
	});


	//	quantity
   $('.quantity .minus').click(function () {
       var $input = $(this).parent().find('.input-text');
       var count = parseInt($input.val()) - 1;
       count = count < 1 ? 1 : count;
       $input.val(count);
       $input.change();
       return false;
   });
   $('.quantity .plus').click(function () {
       var $input = $(this).parent().find('.input-text');
       $input.val(parseInt($input.val()) + 1);
       $input.change();
       return false;
   });


   	//  aside filter toggle
	$('.filter__title').click(function() {
		$(this).toggleClass('active').next().slideToggle(100);
	});


	//  aside mobile filter
	$('.btn__filter').click(function() {
		$('#filterform').slideToggle(100);
	});
	$('.btn__sort').click(function() {
		$('.product__ordering').slideToggle(100);
	});
	$('.filter__close').click(function() {
		$('#filterform').hide(100);
		$('.product__ordering').hide(100);
	});

	// rangeSlider 
	// https://refreshless.com/nouislider/
	if ($('#priceslider')[0]) {
	   	function bindValues(price_slider, inputNumberMin, inputNumberMax){
           price_slider.noUiSlider.on('update', function( values, handle ) {
               var value = values[handle];

               if ( handle ) {
                   inputNumberMax.value = Math.round(value);
               } else {
                   inputNumberMin.value = Math.round(value);
               }
           });
           inputNumberMin.addEventListener('change', function(){
               price_slider.noUiSlider.set(this.value);
           });
           inputNumberMax.addEventListener('change', function(){
               price_slider.noUiSlider.set([null, this.value]);     
           });
           
       }
       var price_sliders = $('.price__sliders');
       var inputsNumberMin = $('.price-filter-min-price');
       var inputsNumberMax = $('.price-filter-max-price');
       for ( var i = 0; i < price_sliders.length; i++ ) {
           noUiSlider.create(price_sliders[i], {
               start: [0, 10000],
               connect: true,
               range: {
                   'min': 0,
                   'max': 10000
               },
           });
           bindValues(price_sliders[i], inputsNumberMin[i], inputsNumberMax[i]);
       }
	}


	//  gallery slider
	$('.gallery__slider').slick({
		slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
        dots: false,
        autoplaySpeed: 3000,
        asNavFor: '.gallery__thumb',
        speed: 200,
        responsive: [
        	{
        		breakpoint: 1199,
        		settings: {
        		}
        	},
        	{
        		breakpoint: 991,
        		settings: {
        		}
        	},
    		{
    			breakpoint: 768,
    			settings: {
    			}
    		},
    		{		
    			breakpoint: 576,
    			settings: {
    			}
    		}	
    	]
	});
	$('.gallery__thumb').slick({
		slidesToShow: 4	,
        slidesToScroll: 1,
        asNavFor: '.gallery__slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        speed: 200,
        responsive: [
    		{		
    			breakpoint: 576,
    			settings: {
    				vertical: false,
    			}
    		}	
    	]
	});

	var slickTotal=$('.gallery__slider');
 	slideArray = $( slickTotal.slick("getSlick").slideCount);
 	slideNumb = (slideArray[0]);
 	if (slideNumb <= 4) {
 		 $('.gallery__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 		 	var mySlideNumber = nextSlide;
 		 	console.log(mySlideNumber)
 		 	$('.gallery__thumb .slick-slide').removeClass('slick-current');
 		 	$('.gallery__thumb .slick-slide').eq(mySlideNumber).addClass('slick-current');
 		});
 	}


	// product description tabs
	$(".product__tabs .item__title").on("click", function() {
		$(this).toggleClass('active');
  		$(this).next('.tab__content').slideToggle(100);
	});


	//  select style
	$('.select').select2({
	});


	//  view/hide pass
	$('body').on('click', '.password-control', function(){
	    if ($(this).prev().attr('type') == 'password'){
	        $(this).addClass('view');
	        $(this).prev().attr('type', 'text');
	    } else {
	        $(this).removeClass('view');
	        $(this).prev().attr('type', 'password');
	    }
	    return false;
	});


	// //SMOOTH SCROLL TO ID - <=768px - animate off
	/*$(document).on('click', '.sm-scroll a[href^="#"]', function(event){
		event.preventDefault();
		var body_width = $(window).width();
		if ( body_width >= 768)  {
	        $('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 500);
	    } else {
	    	$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top 
			}, 0);
	    }
	});*/


	// //ARROW UP 
	/*$(document).ready(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 0) {
	    		$('#arrowup').fadeIn(300);
			} else {
			$('#arrowup').fadeOut(200); 
				}
		});
		$('#arrowup').click(function() {
			$('body,html').animate({
	    		scrollTop: 0
			}, 200); 
			return false;
		});
	});*/

	// -------------

	$("[data-dropdown-btn]").on("click", function(e) {
		e.preventDefault();
		dr = $("[data-dropdown = '"+$(this).attr("data-dropdown-btn")+"']");
		if(dr.is(":hidden")) {
			dr.slideDown(300);
			$(this).addClass("active");
		} else {
			dr.slideUp(300);
			$(this).removeClass("active");
		}
	});

	// -------------

	$(".del_tag").on("click", function(e) {
		e.preventDefault();
		parent = $(this).closest(".tag_2");
		parent.remove();
	});
	$(".show_list").on("click", function(e) {
		e.preventDefault();
		parent = $(this).closest(".select_form");
		parent.toggleClass("active");
	});

	// -------------

	$(this).keydown(function(eventObject){
		if (eventObject.which == 27) {
		  $(".select_form").removeClass("active");
		}
	});

	$(document).mouseup(function(e) {
		hide_element = $(".select_form");
		if (!hide_element.is(e.target)
		    && hide_element.has(e.target).length === 0) {
		    hide_element.removeClass("active");
		  }
	});

});


