document.addEventListener('DOMContentLoaded', function() {

    // TOGGLE NAV GLOBAL MENU FOR SMALL SCREENS
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function() {
        // console.log("hello!");
        if (menunav.getAttribute('data-navstate') === 'open') {
            // if true do this:
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            // else (if false) do this:
            menunav.setAttribute('data-navstate', 'open');
        };
    });
    
});

$(document).ready(function () {
    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 400 // fade out at 400px from top
        });
        $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });
});