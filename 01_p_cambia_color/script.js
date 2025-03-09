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
        // margin-top: 15px;
    return btn;
}

btn_flipper.addEventListener('click', () => {
    cont_colors.innerHTML = '';

    let title = this.textGenerado();
    let btn = this.btnGenerado();

    btn.addEventListener('click', ()=>{
        let color = this.colorRamdomSimple();
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
        let color = this.colorRandomHex();
        cont_colors.style.background = color;
        title.innerHTML = `Background Color: ${color}`;
    })

    cont_colors.appendChild(title);
    cont_colors.appendChild(btn);
})


document.body.appendChild(cont_colors);

function r(array) {
    return Math.floor(Math.random() * array.length);
}

function colorRandomHex() {
    let letras = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = '';

    for (let i = 0; i < 6; i++) {
        let r = this.r(letras)
        hex = hex + letras[r];
    }
    return '#' + hex;
}

function colorRamdomSimple() {
    let colores = [
        "red",      "blue",     "green",    "yellow",   "orange",   "purple",   "pink",
        "brown",    "black",    "white",    "gray",     "turquoise","cyan",     "magenta",
        "beige",    "fuchsia",  "lilac",    "wine",     "gold",     "silver"
    ];    
    let r = this.r(colores);
    return colores[r];
}

