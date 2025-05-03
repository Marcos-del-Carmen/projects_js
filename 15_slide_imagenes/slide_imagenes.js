let images = [
    {
        img: '../src/img/fondo/acapulco.jpg',
        post: '1'
    },
    {
        img: '../src/img/fondo/blossom.jpg',
        post: '2'
    },
    {
        img: '../src/img/fondo/cocktail.jpg',
        post: '3'
    },
    {
        img: '../src/img/fondo/cocos.jpg',
        post: '4'
    },
    {
        img: '../src/img/fondo/PLATANILLO.jpg',
        post: '5'
    }
]

let total = images.length-1;

let cont_slide_img = document.getElementById("cont_slide_img");
let img = document.createElement("img");
img.classList.add("br-5");
img.src = `${images[0].img}`;

cont_slide_img.appendChild(img);

let btn_next = document.getElementById("btn_next");
let btn_prev = document.getElementById("btn_prev");

btn_prev.disabled = true;

let index = 0;
btn_prev.addEventListener("click", function () {
    index--;    
    if (index <= 0) { 
        btn_prev.disabled = true; 
        btn_prev.classList.add("bg-grey");
    } // cuando es la primera imagen
    if (index == total-1) { 
        btn_next.disabled = false;
        btn_next.classList.remove("bg-grey");
    } // cuando es la penultima imagen
    img.src = `${images[index].img}`;
    cont_slide_img.appendChild(img);
})


btn_next.addEventListener("click", function () {
    index++;
    if (index >= total) { 
        btn_next.disabled = true; 
        btn_next.classList.add("bg-grey");
    } // cuando es la ultima imagen
    if (index == 1) { 
        btn_prev.disabled = false; 
        btn_prev.classList.remove("bg-grey");
    } // cuando es la segunda imagen
    img.src = `${images[index].img}`;
    cont_slide_img.appendChild(img);
})