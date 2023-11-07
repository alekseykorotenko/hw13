let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__menu-nav');
// let activeBtn = document.querySelector('')

console.log(menu);

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
