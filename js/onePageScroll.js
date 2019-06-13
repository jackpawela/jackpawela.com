function scrollWin(x, y) {
	window.scrollBy(x, y);
}

function showPage2Elements(element, delay) {
	setTimeout(function() {
		$(element).css("visibility", "visible");
		$(element).css("animation-duration", "0.3s");
		$(element).css("animation-name", "rotateIntoView");
		$(element).css("animation-timing-function", "ease-in-out");
		$(element).css("-webkit-animation-timing-function", "ease-in-out");
	}, delay);
}


$(document).ready(function() {
	$(window).scroll(function() {
		var height = $(window).scrollTop();

		//scroll down 1px:
		if(height > 1) {
			$("#top").css("animation-duration", "0.5s");
			$("#top").css("animation-name", "shorten");
			$("#top").css("animation-timing-function", "ease-in-out");
			$("#top").css("-webkit-animation-timing-function", "ease-in-out");
			$("#headshot").css("animation-duration", "0.5s");
			$("#headshot").css("animation-name", "slideUp");
			$("#headshot").css("animation-timing-function", "ease-in-out");
			$("#headshot").css("-webkit-animation-timing-function", "ease-in-out");
			$("#scrolldown").css("animation-duration", "0.5s");
			$("#scrolldown").css("animation-name", "fadeout");
			$("#scrolldown").css("opacity", "0");

			setTimeout(function() {
				$("#top").css("height", "auto");
				$("#scrolldown").css("visibility", "hidden");
			}, 500);
		}

		//scroll down 250px:
		if(height  > 400) {
			$("#page2").css("top", "1000px");
			$("#page2").css("visibility", "visible");
			$("#page2").addClass("active");
			$("#page2.inactive").removeClass("inactive");
			setTimeout(function() {
				$("#page2title").css("visibility", "visible");
				$("#page2title").addClass("bounceInDown");
			}, 300);
			setTimeout(function() {
				$("#page2tagline").css("visibility", "visible");
				$("#page2tagline").addClass("bounceInDown");
			}, 400);
			
			showPage2Elements("#fast", 1000);
			showPage2Elements("#intuitive", 1100);
			showPage2Elements("#responsive",1200);


		//scroll up to <= 1px:
		} else {
			$("#page2").addClass("inactive");
			$("#page2").removeClass("active");
		}

/*
		//scroll down 500px:
		if(height > 1000) {
			$("#page3").css("top", "1000px");
			$("#page3").css("visibility", "visible");
			$("#page3").addClass("active");
			$("#page3.inactive").removeClass("inactive");
			setTimeout(function() {
				$("#page3title").css("visibility", "visible");
				$("#page3title").addClass("bounceInDown");
			}, 300);
			setTimeout(function() {
				$("#page3tagline").css("visibility", "visible");
				$("#page3tagline").addClass("bounceInDown");
			}, 400);

		//scroll up to <= 50px
		} else {
			$("#page3").addClass("inactive");
			$("#page3").removeClass("active");
		}
*/ 
	});
});
