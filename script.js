// Change the navbar background when the page is scrolled
window.onscroll = function() {
    var navbar = document.getElementById("navbar");

    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = "#2c3e50";
    } else {
        navbar.style.backgroundColor = "#3498db";
    }
};
