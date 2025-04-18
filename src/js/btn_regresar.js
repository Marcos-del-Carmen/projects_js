let btn_regresar = document.createElement('button');
btn_regresar.classList.add('btn');
btn_regresar.innerText = 'Regresar';

document.body.style.position = 'relative';

Object.assign(btn_regresar.style, {
    bottom: '10px',
    left: '20px',
    position: 'fixed',
    backgroundColor: '#333',
    color: '#fff'
});

btn_regresar.addEventListener('click', () => {
    window.location.href = '../index.html';
});

document.body.appendChild(btn_regresar);