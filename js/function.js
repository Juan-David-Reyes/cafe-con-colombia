const swiper = new Swiper(".Swiper_blog_hero", {
    effect: 'fade',

    parallax: true,
    navigation: {
      nextEl: ".Swiper_blog_hero .swiper-button-next",
      prevEl: ".Swiper_blog_hero .swiper-button-prev",
    },
  });