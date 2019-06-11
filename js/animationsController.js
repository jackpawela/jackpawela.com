$(document).ready(function() {
	setTimeout(function() {
		$("#name").css("visibility", "visible");
		$("#name").addClass("bounceInDown");
	}, 100);
	setTimeout(function() {
		$("#headline").css("visibility", "visible");
		$("#headline").addClass("bounceInDown");
	}, 200);
	setTimeout(function() {
		$("#scrolldown").css("visibility", "visible");
		$("#scrolldown").addClass("bounceInDown");
	}, 300);
	setTimeout(function() {
		$(".about, .contact").css("visibility", "visible");
		$(".about, .contact").addClass("fadeIn");
	}, 300);
});
