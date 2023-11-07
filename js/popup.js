let popupOverlay = document.getElementById('popup-overlay');
console.log(popupOverlay);
let popup = document.querySelector('.popup');
console.log(popup);
let cross = document.querySelector('#cross');
console.log(cross);
let link = document.querySelector('#contact');
console.log(link);

link.addEventListener('click', function () {
  popupOverlay.style.display = 'block';
  //   popupOverlay.style.opacity = '0.7';
});

cross.addEventListener('click', function () {
  popupOverlay.style.display = 'none';
});

window.onclick = function (event) {
  if (event.target == popupOverlay) {
    popupOverlay.style.display = 'none';
  }
};
