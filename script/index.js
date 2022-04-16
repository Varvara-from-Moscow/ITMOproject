const btnAspiranture = document.querySelector('.education__button_type_aspiranture');
const btnMagistarture = document.querySelector('.education__button_type_magistrature');
const containerAspiranture = document.querySelector('.education__container_type_aspiranture');
const containerMagistrature = document.querySelector('.education__container_type_magistrature');
const btnShare = document.querySelectorAll('.publications-card__share');
const fieldShare = document.querySelectorAll('.publications-card__social-items');
const cardPublication = document.querySelectorAll('.publications__card');

btnAspiranture.addEventListener('click', () => {
  btnAspiranture.classList.add('education__button_active');
  containerMagistrature.classList.add('education__container_visible');
  btnMagistarture.classList.remove('education__button_active');
  containerAspiranture.classList.remove('education__container_visible');
})

btnMagistarture.addEventListener('click', () => {
  btnMagistarture.classList.add('education__button_active');
  containerAspiranture.classList.add('education__container_visible');
  btnAspiranture.classList.remove('education__button_active');
  containerMagistrature.classList.remove('education__container_visible');
})

btnShare.forEach((element) => {
  element.addEventListener('click', () =>{
    element.nextElementSibling.classList.toggle('publications-card__social-items_active')  })
})

cardPublication.forEach((element) => {
  element.addEventListener('mouseleave', () => {
    fieldShare.forEach((element) => element.classList.remove('publications-card__social-items_active'))})
})

const swiper = new Swiper('.swiperPublication', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is <= 480px
    490: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 33
    }
  },
  slidesPerGroup: 3,
  // And if we need scrollbar
});





const buttonBurgerMenu = document.querySelector(".header__btn-menu");
const popupBurger = document.querySelector(".popup_type_burger-menu");
const buttonClosePopup = document.querySelector(".popup__btn-cross");

buttonBurgerMenu.addEventListener("click", () => {
  popupBurger.classList.add("popup_opened");
});

buttonClosePopup.addEventListener("click", () => {
  popupBurger.classList.remove("popup_opened");
});

console.log(123);