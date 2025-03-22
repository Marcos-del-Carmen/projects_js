let btn = document.getElementById('btn-menu');
let nav_options = document.getElementById('nav-options');

btn.addEventListener('click', ()=> {
    nav_options.classList.toggle('visible');
});