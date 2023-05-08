(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.load(function() {
		$(".preloader").fadeOut(600);
    });
	
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});
	
	/* Testimonial Swiper Slider */
	var swiper = new Swiper('.testimonial-slider', {
		grabCursor: true,
		autoplay: true,
		centeredSlides: true,
		slidesPerView: 1,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true
		},
	});
	
	/* Testimonial Swiper Slider */
	var swiper = new Swiper('.brand-slider', {
		grabCursor: true,
		autoplay: true,
		spaceBetween: 30,
		slidesPerView: 6,
		breakpoints: {
			480: {
				slidesPerView: 2
			},
			
			768: {
				slidesPerView: 3
			}
		},
		pagination: {
			el: '.brand-pagination',
			type: 'bullets',
			clickable: true
		},
	});
	
	/* Contact form validation */
	var $contactform=$("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		/* Initiate Variables With Form Content*/
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var subject = $("#subject").val();
		var message = $("#message").val();

		$.ajax({
			type: "POST",
			url: "form-process.php",
			data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message + "&phone=" + phone,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-left text-success";
		} else {
			var msgClasses = "h3 text-left text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
})(jQuery);