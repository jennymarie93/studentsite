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



  


// REVEAL ON SCROLL JS
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('data-sectionstate', 'active');
        } else {
            entry.target.setAttribute('data-sectionstate', 'inactive');
        }
    });
});
document.querySelectorAll('.animate-on-scroll').forEach((section) => {
    myobserver.observe(section);
});





