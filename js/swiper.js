/*=============== SWIPER CATEGORIES ===============*/
var swiperStock = new Swiper('.stock__container', {
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 24,
        },

    },
});