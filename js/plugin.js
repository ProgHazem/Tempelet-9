/*global $, alert, conosle, prompet */
$(document).ready(function () {
    'use strict';
    //Nice Scrolling
    $("body").niceScroll({
        cursorcolor: '#f7600e',
        cursorborder: '1px solid #f7600e'
    });
    
    //Change Window Height
    $('.header').height($(window).height());
    
    // arrow moving to section features
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
    $('.myworks').click(function () {
        $('html, body').animate({
            scrollTop: $('.our-work').offset().top
        }, 1000);
    });
    
    //Show More Works
    $('.our-work .show-more').click(function () {
        $('.our-work .hidden').slideDown(1000);
        $(this).hide();
        $('body').height('+= 400');
    });
    
    // check client 
    var leftArrow = $('.testimonials .fa-chevron-left'),
        
        rightArrow = $('.testimonials .fa-chevron-right');
    
    function checkClients() {
        if ($('.client:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        if ($('.client:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
    }
    checkClients();
    $('.testimonials i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testimonials .active').fadeOut(500, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(500);
                checkClients();
            });
        } else {
            $('.testimonials .active').fadeOut(500, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(500);
                checkClients();
            });
        }
    });
});