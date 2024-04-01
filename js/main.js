const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
});

let burger = document.querySelector('.burger');
let header = document.querySelector('.header');
let menu = document.querySelector('.menu__list');
let body = document.querySelector('body');

burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    header.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})