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

    // CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
    const myobserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-sectionstate", "active");
        } else {
            entry.target.setAttribute("data-sectionstate", "inactive");
        }
        });
    });

    document.querySelectorAll("section").forEach((section) => {
        myobserver.observe(section);
    });

   const buddha = document.querySelector("#buddha");
   
    const buddhasize = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            buddha.setAttribute("data-buddha", "small");
        } else {
            buddha.setAttribute("data-buddha", "big");
        }
        });
    });

    document.querySelectorAll("#section-gallery .row").forEach((section) => {
        buddhasize.observe(section);
    });

});

