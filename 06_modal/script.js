let btn = document.getElementById('btn-modal');
let btn_close = document.getElementById('btn-close');
let modal = document.getElementsByClassName('font-modal')[0];

btn.addEventListener('click', ()=>{
    modal.classList.add('visible');
    modal.classList.add('justify-elements-center');
    modal.classList.remove('oculto');
});

btn_close.addEventListener('click', ()=>{
    modal.classList.add('oculto');
    modal.classList.remove('visible');
});
