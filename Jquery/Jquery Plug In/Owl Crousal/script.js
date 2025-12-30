$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        // nav: true,
        margin:10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });
});
