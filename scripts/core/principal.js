const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.links-header');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
