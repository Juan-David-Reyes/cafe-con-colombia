const swiper = new Swiper(".Swiper_blog_hero", {
    effect: 'fade',
    parallax: true,
    navigation: {
      nextEl: ".Swiper_blog_hero .swiper-button-next",
      prevEl: ".Swiper_blog_hero .swiper-button-prev",
    },
  });

  const btnSearch = document.querySelector('a.search');
  const closeMain = document.querySelector('main');
  const inputSearch = document.querySelector('.cont_search');

  // MOBILE

  const btnSearchMobile = document.querySelector('.navbar_MV a.search');
  const inputSearchMobile = document.querySelector('.navbar_MV .cont_search');

  btnSearch.addEventListener('click', () => {
    inputSearch.classList.toggle('active_search');
  });

  closeMain.addEventListener('click', () => {
    inputSearch.classList.remove('active_search');
    inputSearchMobile.classList.remove('active_search');
  });

  // MOBILE

  btnSearchMobile.addEventListener('click', () => {
    inputSearchMobile.classList.toggle('active_search');
  });