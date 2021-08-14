// SLIDER HERO BLOG

var swiper = new Swiper(".Swiper_blog_hero", {
    effect: 'fade',
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
    },
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



  // CATEGORIA NOTAS ASIDE

const btnRecientes = document.querySelectorAll('.categoria_notas a');
const notasAside = document.querySelectorAll('.nota_mas_reciente');
let comparadorNotas = null

btnRecientes.forEach((btnAside) => {
  btnAside.addEventListener('click', (e) =>{

    btnRecientes.forEach((elBtnAside) =>{
      elBtnAside.classList.remove('cat_activa');
    });
    e.currentTarget.classList.add('cat_activa');

    comparadorNotas = btnAside.dataset.categoriaaside;

    notasAside.forEach((el) =>{
      if(el.dataset.categoriaaside === comparadorNotas){
        el.classList.add('active_aside_cat');
      }else{
        el.classList.remove('active_aside_cat');
      }
    });
  });
});


// SLIDER NOTA 

      var swiper = new Swiper(".swiperRelacionadas", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
      });

      // FUNCION MENU MOBILE

const menuMobile = document.querySelector('.bars_menu');
const containerMenuMobile = document.querySelector('.cont_menu_mobile');
const closeMobileMenu = document.querySelector('.close_menu');


menuMobile.addEventListener('click', () =>{
  containerMenuMobile.classList.toggle('active_nav_mobile');
});

closeMobileMenu.addEventListener('click', () => {
  containerMenuMobile.classList.remove('active_nav_mobile');
});

// *****************


const btnBoletin = document.querySelector('.btn_boletin_fixed');
const btnCloseModal = document.querySelector('.cont_modal_boletin > span');
const closeModalBg = document.querySelector('.bg_modal_color');
const btnMenuMobileBoletin = document.querySelector('.btn_menu_mobile_newsletter');
const body = document.querySelector('body');

const modalNewsletter = document.querySelector('.modal_boletin');

btnMenuMobileBoletin.addEventListener('click', (e) =>{
  modalNewsletter.classList.add('active_newsletter');
  body.style.overflow = 'hidden';
});

btnBoletin.addEventListener('click', (e) =>{
  modalNewsletter.classList.add('active_newsletter');
  body.style.overflow = 'hidden';
});

btnCloseModal.addEventListener('click', (e) =>{
  modalNewsletter.classList.remove('active_newsletter');
  containerMenuMobile.classList.remove('active_nav_mobile');
  body.style.overflow = 'scroll';
});

closeModalBg.addEventListener('click', (e) =>{
  modalNewsletter.classList.remove('active_newsletter');
  containerMenuMobile.classList.remove('active_nav_mobile');
  body.style.overflow = 'scroll';
});