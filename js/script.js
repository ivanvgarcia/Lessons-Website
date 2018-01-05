$(document).ready(function () {
    /* Scroll on Buttons */
    $('.js--scroll-to-lessontopics').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-lessontopics').offset().top
        }, 1000);
    });

    // Navigation scroll
    // Select all links with hashes
    $('a[href*="#"]:not([href="#"])').click(function () {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


    // Sticky Navigation
    $('.js--section-lessontopics').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '120px'
    });

    // Sticky Level Buttons
    $('.js--lessons, .js--lesson-head').waypoint(function (direction) {
        if (direction == "down") {
            $('.level-buttons, .lesson-buttons').addClass('sticky-level-buttons');
        } else {
            $('.level-buttons, .lesson-buttons').removeClass('sticky-level-buttons');
        }
    }, {
        offset: '100px'
    });

    // Animate Waypoint
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated tada');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated bounceInLeft');
    }, {
        offset: '90%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated bounce');
    }, {
        offset: '90%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated bounce');
    }, {
        offset: '50%'
    });

    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated bounce');
    }, {
        offset: '50%'
    });

//    $('.js--nav-icon').click(function () {
//        var nav = $('.js--nav');
//        var icon = $('.js--nav--icon i');
//
//        nav.slideToggle(200);
//        
//        if (icon.hasClass('fa-bars')) {
//            icon.addClass('fa-times');
//            icon.removeClass('fa fa-bars');
//        } else {
//            icon.addClass('fa-bars');
//            icon.removeClass('fa-times');
//        }
//    });

});
