$(document).ready(function() {
	
	//portfolio content hide,show
	$(".hover-wrapper").hover(
		function(){
			$(this).find(".hover-content").fadeIn();
		},
		function(){
			$(this).find(".hover-content").fadeOut();
		}
	);
	
	//hide,show testimonial carousel control
	
	$("#testimonials").hover(function(){
			$(this).find(".carousel-control").show();
		}, function(){
			$(this).find(".carousel-control").hide();
		}
	);
	
	
	//scroll
	$(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
	
	
	
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos + 50 && refElement.position().top + refElement.height() > scrollPos + 50) {
            $('.nav ul li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}