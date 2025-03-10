const objColor = new Colors();

let cont_colors = document.getElementsByClassName('cont-colors')[0];

let btn_flipper = document.getElementById('btn_flipper')
let btn_hex = document.getElementById('btn_hex')

cont_colors.style.width = "100%";
cont_colors.style.height = "100vh";
cont_colors.style.background = "#333";

function textGenerado() {
    let title = document.createElement('h1');
    title.innerHTML = `Press click`;
    title.style.cssText = `
        width: 100%;
        color: rgb(255, 255, 255);
        background: rgb(51, 51, 51);
        padding: 10px;
        border-radius: 5px;
    `;
    return title;
}

function btnGenerado(titulo) {
    let btn = document.createElement('button');
    btn.textContent = 'Click Me';  
    btn.classList.add('btn');
    btn.style.cssText = `
        display: block;
    `;
    return btn;
}

btn_flipper.addEventListener('click', () => {
    cont_colors.innerHTML = '';

    let title = this.textGenerado();
    let btn = this.btnGenerado();

    btn.addEventListener('click', ()=>{
        let color = objColor.colorRamdomSimple();
        cont_colors.style.background = color;
        title.innerHTML = `Background Color: ${color}`;
    })

    cont_colors.appendChild(title);
    cont_colors.appendChild(btn);
})

btn_hex.addEventListener('click', () => {
    cont_colors.innerHTML = '';

    let title = this.textGenerado();
    let btn = this.btnGenerado();

    btn.addEventListener('click', ()=>{
        let color = objColor.colorRandomHex();
        cont_colors.style.background = color;
        title.innerHTML = `Background Color: ${color}`;
    })

    cont_colors.appendChild(title);
    cont_colors.appendChild(btn);
})


document.body.appendChild(cont_colors);
