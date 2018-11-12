$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 1, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    if ($(window).scrollTop() >= (window.innerHeight + 30)) {
      $('.Navbar ul li a').css("color","black");                
      $('.Navbar').css("background-color","rgba(255, 255, 255, 0.781)");                
    }
      if ($(window).scrollTop() <= (window.innerHeight + 30)) {
        $('.Navbar ul li a').css("color","white");                
        $('.Navbar').css("background-color","unset");                
      }

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.navbar a.active').removeClass('active');
                    $('.navbar a').eq(i).addClass('active');
            }

    });
}).scroll();


var $animation_elements = $('.animation-element');
var $window = $(window);

$window.on('scroll', check_if_in_view);

$window.on('scroll resize', check_if_in_view);

$window.trigger('scroll');

function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
      
        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);
      
          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
          } else {
            $element.removeClass('in-view');
          }
        });
      }