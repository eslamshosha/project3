
$(function () {

    'use strict';

    //trigger nice scroll

    $("html").niceScroll({
        zindex: 99999999,
        
        cursorcolor: "#f7600e",
        
        cursorwidth: "10px",
        
        cursorborder: "1px solid #1abc9c"
    });

        //change header height
    $('.header').height($(window).height());

        //scroll to features

    $('.header .arrow i').click(function () {

        $('html, body').animate({

            scrollTop: $('.features').offset().top

        }, 1000);

    });

    $('.hire').click(function () {

        $('html, body').animate({

            scrollTop: $('.our-team').offset().top

        }, 1000);

    });

        //show hidden item img

    $('.show-more').click(function () {

        $('.our-work .hidden').fadeToggle(1000);
    });

        //check testimonals

    var leftArrow = $('.test .fa-chevron-left'),

        rightArrow = $('.test .fa-chevron-right');

    function checkClinets() {

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

    }

    checkClinets();

    $('.test i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {

            $('.test .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClinets();

            });
        } else {

            $('.test .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClinets();

            });


        }
    });
});