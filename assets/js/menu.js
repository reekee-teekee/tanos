const dropDown = document.querySelector('.dropdown-menu');
const subMenu = document.querySelector('.submenu');
const closeBtn = document.querySelector('.close-btn');

dropDown.addEventListener('click', function () {
  subMenu.classList.toggle('open-menu');
  closeBtn.classList.toggle('open-menu');
})

closeBtn.addEventListener('click', function () {
  subMenu.classList.toggle('open-menu');
  closeBtn.classList.toggle('open-menu');
})
