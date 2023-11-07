let labelBtn1 = document.querySelector('#label-btn1');
let labelBtn2 = document.querySelector('#label-btn2');
let labelBtn3 = document.querySelector('#label-btn3');

labelBtn1.style.opacity = '1';

labelBtn1.addEventListener('click', function () {
  labelBtn1.style.opacity = '1';
  labelBtn2.style.opacity = '0.2';
  labelBtn3.style.opacity = '0.2';
});
labelBtn2.addEventListener('click', function () {
  labelBtn1.style.opacity = '0.2';
  labelBtn2.style.opacity = '1';
  labelBtn3.style.opacity = '0.2';
});
labelBtn3.addEventListener('click', function () {
  labelBtn1.style.opacity = '0.2';
  labelBtn2.style.opacity = '0.2';
  labelBtn3.style.opacity = '1';
});
