let btn = document.getElementById('btn-menu');
let menu = document.getElementById('nav-body');
let textMenu = document.getElementById('text-menu');
let navMenu = document.getElementsByClassName('nav-menu')[0];

btn.addEventListener('click', () => {
    let visible = menu.classList.toggle('visible');
    
    if (visible) {
        textMenu.style.display = 'block';
        navMenu.style.width = '40%';
    } else {
        textMenu.style.display = 'none';
        navMenu.style.width = '70px';
    }
})