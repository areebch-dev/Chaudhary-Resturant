// ==================================== Search Form =======================================
let searchIcon = document.querySelector('.bx-search-alt-2');

searchIcon.addEventListener('click', () => {
    let searchForm = document.querySelector('.search-form');
    searchForm.classList.toggle('active');
    
});

// ========================================= NavBar toggle ==================================

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x'); // menu icon ko cross icon me badalne ke liye
  navbar.classList.toggle('active'); // navbar show/hide
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};