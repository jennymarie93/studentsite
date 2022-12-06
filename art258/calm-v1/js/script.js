document.addEventListener('DOMContentLoaded', function() {

    // JS SCRIPTS GO HERE

    const mysitenav = document.querySelector('.site-nav');
    const mymenubutton = document.querySelector('.menu-button');

    // console.log("hello!");

    mymenubutton.onclick = function() {
        if (mysitenav.getAttribute('data-navstate') === 'closed') {
            // if true do this:
            mysitenav.setAttribute('data-navstate','open');
        } else {
            // else (if false) do this:
            mysitenav.setAttribute('data-navstate', 'closed');
        };
    };

});