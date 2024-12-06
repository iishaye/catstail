$(document).ready(function() {
    // When the user scrolls the page
    $(window).on('scroll', function() {
        // Check the scroll position
        if ($(this).scrollTop() > 50) {  // You can adjust this value based on when you want the effect to trigger
            $('header').addClass('scrolled'); // Add 'scrolled' class to navbar
        } else {
            $('header').removeClass('scrolled'); // Remove 'scrolled' class when back at the top
        }
    });
});
