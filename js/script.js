$(document).ready(function () {
    /* Scroll on Buttons */
    $('.js--scroll-to-lessontopics').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-lessontopics').offset().top
        }, 1000);
    });

    // Navigation scroll
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
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
        $('.js--wp-1').addClass('animated jackInTheBox');
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
