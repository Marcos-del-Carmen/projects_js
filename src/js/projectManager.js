class ProjectManeger {

    constructor() {
        this.projects = [
            {
                name: 'Cambio de colores',
                img: 'src/img/projects/project1.png',
                path: '01_p_cambia_color/index.html',
                description: 'Se selecciona en que tipo de color que desa ver ya sea en hexadecimal o nombre del color.',
                created: global.calculoDias('2025-03-09')
            },
            {
                name: 'Contador de números',
                img: 'src/img/projects/project2.png',
                path: '02_p_contador/index.html',
                description: 'Se puede incrementar y decrementar o se recetea un número.',
                created: global.calculoDias('2025-03-09')
            },
            {
                name: 'Carrusel de Perfiles',
                img: 'src/img/projects/caursel.png',
                path: '03_p_carrusel_revision/index.html',
                description: 'Se muestra una lista de las personas del equipo de trabajo.',
                created: global.calculoDias('2025-03-11')
            },
            {
                name: 'Menú de navegación',
                img: 'src/img/projects/project3.png',
                path: '04_menu_navegacion/index.html',
                description: 'Se adapta a la pantalla del dispositivo.',
                created: global.calculoDias('2025-03-22')
            },
            {
                name: 'Menú lateral',
                img: 'src/img/projects/project4.png',
                path: '05_menu_lateral/index.html',
                description: 'Se muestra al lado izquiedo de la pantalla las opciones que tiene la página.',
                created: global.calculoDias('2025-03-22')
            },
            {
                name: 'Modal bootstrap',
                img: 'src/img/projects/project5.png',
                path: '06_modal/index.html',
                description: 'Tiene un diseño parecido al que se tiene en booststrap.',
                created: global.calculoDias('2025-03-23')
            },
            {
                name: 'Combo de preguntas',
                img: 'src/img/projects/project6.png',
                path: '07_combo_preguntas/index.html',
                description: 'Muestra una lista que dependiendo si preciona el botón se muestra o se oculta.',
                created: global.calculoDias('2025-03-29')
            },
            {
                name: 'Menú de comida',
                img: 'src/img/projects/project7.png',
                path: '08_restaurant_menu/index.html',
                description: 'Catalogo de comida y dependinedo de los boton se filtra por categoria.',
                created: global.calculoDias('2025-03-29')
            },
            {
                name: 'Proyecto de video',
                img: 'src/img/projects/project8.png',
                path: '09_video/index.html',
                description: 'Se puede pude pausar y reproducir el video el usuario.',
                created: global.calculoDias('2025-04-05')
            },
            {
                name: 'Scroll entre secciones',
                img: 'src/img/projects/scroll.png',
                path: '10_scroll_project/index.html',
                description: 'Se usa sscrollTo para ir a la sección que se desea.',
                created: global.calculoDias('2025-04-12')
            },
            {
                name: 'Taps de información',
                img: 'src/img/projects/taps.png',
                path: '11_taps/index.html',
                description: 'La información se muestra dependiendo de la opción que se selecciona.',
                created: global.calculoDias('2025-04-14')
            },
            {
                name: 'Cuenta regresiva',
                img: 'src/img/projects/cuenta_regresiva.png',
                path: '12_cuenta_regresiva/index.html',
                description: 'Cuenta regresiva para sitio web, podría ser muy util para lanzamientos',
                created: global.calculoDias('2025-04-24')
            },
            {
                name: 'Lorem input',
                img: 'src/img/projects/lorem.png',
                path: '13_lorem_ipsum/index.html',
                description: 'Se muestran lorem ipsum dependiento al rango releccionado.',
                created: global.calculoDias('2025-04-26')
            },
        ];
    }

    getProjects() {
        return this.projects;
    }

    getByProjectName() {
        return this.projects.filter(p => p == p.name);
    }

    // hacer un metodo que ordene por fechas del más nuevo
    getProjectsReverse() {
        return this.projects.reverse();
    }
}