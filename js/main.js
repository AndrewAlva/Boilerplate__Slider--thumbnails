// $(document).ready(function(){
    var peopleSwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button--next',
            prevEl: '.swiper-button--prev',
        },
    });

    swiperThumbs(peopleSwiper, {
        // Our default options
        element: 'swiper-thumbnails',
        activeClass: 'is-active',
        scope: '.custom-slider-container' // Parent selector that surrounds your Swiper html & Swiper thumbnail html to support multiple Swiper instances on one page.
    });
// });