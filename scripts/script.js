$(document).ready(function() {
	$(".hover-wrapper").hover(
		function(){
			$(this).find(".hover-content").fadeIn();
		},
		function(){
			$(this).find(".hover-content").fadeOut();
		}
	);
	
	$("#testimonials").hover(function(){
			$(this).find(".carousel-control").show();
		}, function(){
			$(this).find(".carousel-control").hide();
		}
	);
	
	
	$(function() {
	  $('.nav-link').click(function() {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top - 50
			}, 600);
			return false;
		  }
	  });
	});
	
	
	
});