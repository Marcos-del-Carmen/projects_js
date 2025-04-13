let btns = document.getElementsByClassName('btn-press');
let text = document.getElementsByClassName('text');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e)=>{
        text[i].classList.toggle('visible');
    })
}
