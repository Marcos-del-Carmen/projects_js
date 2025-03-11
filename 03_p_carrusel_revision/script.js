const persons = 
[
    {
        nombre: "Laura Fernández",
        imagen: '../src/img/persona1.png',
        puesto: "Diseñadora UX/UI",
        descripcion: "Responsable de la experiencia de usuario y diseño de interfaces atractivas y funcionales."
    },
    {
        nombre: "Ana Martínez",
        imagen: '../src/img/persona2.png',
        puesto: "Gerente de Proyecto",
        descripcion: "Coordina los equipos de trabajo y asegura que los proyectos se entreguen a tiempo y con la calidad esperada."
    },
    {
        nombre: "Carlos López",
        imagen: '../src/img/persona3.png',
        puesto: "Desarrollador Backend",
        descripcion: "Especialista en la creación y mantenimiento de servidores y bases de datos con Node.js y MongoDB."
    },
    {
        nombre: "Marcos del Carmen",
        imagen: '../src/img/persona4.png',
        puesto: "Desarrollador Frontend",
        descripcion: "Encargado de diseñar y desarrollar interfaces web interactivas con tecnologías modernas como Angular y Vue.js."
    },
];

let img_profile = document.getElementById('img_profile');
let nombre = document.getElementById('nombre')
let cargo = document.getElementById('cargo')
let descripcion = document.getElementById('descripcion')

let btn_previous = document.getElementById('btn-previous');
let btn_next = document.getElementById('btn-next');
let btn_ramdom = document.getElementById('btn-ramdom');

let i = 0;
llenarCampos(3);

btn_next.addEventListener('click', ()=> {
    limpiarCampos();
    llenarCampos(i);
    i++;
    
    if (i === persons.length) {
        i = 0;
    }
    
})

btn_ramdom.addEventListener('click', ()=> {
    let r = Math.floor(Math.random() * persons.length);
    limpiarCampos();
    llenarCampos(r);
})

btn_previous.addEventListener('click', ()=> {
    limpiarCampos();
    llenarCampos(i)
    if (i === 0) {
        i = persons.length;
    }
    i--;
})

document.addEventListener("DOMContentLoaded", () => {
    llenarCampos(i);
});

function limpiarCampos() {
    img_profile.src = '';
    nombre.textContent = '';
    cargo.textContent = '';
    cargo.textContent = '';
}

function llenarCampos(i) {
    img_profile.src = persons[i].imagen
    nombre.textContent = persons[i].nombre
    cargo.textContent = persons[i].puesto
    descripcion.textContent = persons[i].descripcion;
}



