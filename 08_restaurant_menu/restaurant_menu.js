const menuItems = [
    // Breakfast
    {
        nombre: "Chilaquiles Verdes",
        precio: "18.00",
        descripcion: "Crispy tortilla chips covered in a delicious green sauce, topped with shredded chicken, sour cream, fresh cheese, and purple onion. Perfect to start the day with energy.",
        imagen: "../src/img/comida/chilaquiles_verdes.png",
        categoria: "Breakfast"
    },
    {
        nombre: "Spinach and Cheese Omelette",
        precio: "20.00",
        descripcion: "Soft and fluffy omelette filled with fresh spinach and melted cheese, served with toasted bread and a portion of seasonal fruits.",
        imagen: "../src/img/comida/omeltte_huevo.png",
        categoria: "Breakfast"
    },

    // Lunch
    {
        nombre: "Classic Burger",
        precio: "25.00",
        descripcion: "Juicy grilled beef patty, topped with cheddar cheese, lettuce, tomato, and onion, served in an artisan sesame bun with crispy fries on the side.",
        imagen: "../src/img/comida/hamburguesa.png",
        categoria: "Lunch"
    },
    {
        nombre: "Chicken Caesar Salad",
        precio: "22.00",
        descripcion: "Fresh romaine lettuce, golden croutons, and grilled chicken, drizzled with a creamy anchovy-based dressing and topped with grated Parmesan cheese.",
        imagen: "../src/img/comida/ensalda_de_pollo.png",
        categoria: "Lunch"
    },

    // Drinks
    {
        nombre: "Fresh Orange Juice",
        precio: "10.00",
        descripcion: "Refreshing juice made from freshly squeezed oranges, with no added sugar, offering a citrusy taste packed with vitamin C to revitalize your day.",
        imagen: "../src/img/comida/jugo_naranja.png",
        categoria: "Drink"
    },
    {
        nombre: "Latte Coffee",
        precio: "12.00",
        descripcion: "Delicious espresso mixed with creamy steamed milk, served in a hot cup with a touch of milk foam on top.",
        imagen: "../src/img/comida/Latte.png",
        categoria: "Drink"
    },

    // Dinner
    {
        nombre: "Pepperoni Pizza",
        precio: "30.00",
        descripcion: "Authentic Italian pizza with a tomato sauce base, melted mozzarella cheese, and crispy pepperoni slices. Baked to perfection in a stone oven.",
        imagen: "../src/img/comida/pizza_pepperoni.png",
        categoria: "Dinner"
    },
    {
        nombre: "Assorted Sushi",
        precio: "40.00",
        descripcion: "Gourmet sushi selection featuring salmon, tuna, avocado, and cucumber, served with soy sauce, wasabi, and pickled ginger.",
        imagen: "../src/img/comida/Sushi.png",
        categoria: "Dinner"
    },
    {
        nombre: "Japanese Ramen",
        precio: "35.00",
        descripcion: "A delicious bowl of ramen with noodles in pork broth, topped with chashu pork slices, soft-boiled egg, green onions, and nori seaweed.",
        imagen: "../src/img/comida/Ramen.png",
        categoria: "Dinner"
    },
    {
        nombre: "Shrimp Ceviche",
        precio: "32.00",
        descripcion: "Exquisite shrimp ceviche marinated in lime juice with purple onion, fresh cilantro, and chili slices. Served with crispy tostadas.",
        imagen: "../src/img/comida/ceviche.png",
        categoria: "Dinner"
    }
];


let contMenu = document.getElementById('item_saucers');
function mostraMenu(cate) {
    contMenu.innerHTML = '';
    let menu = cate == 'all' ? menuItems : menuItems.filter(item=>item.categoria === cate);

    menu.forEach((item, i) => {
        let item_menu = document.createElement('div');
        item_menu.classList.add('cont-menu', 'df');
    
        let imgDiv = document.createElement('div');
        let imagen = document.createElement('img');
    
        imagen.classList.add('br-10', 'mr-1');
        imagen.src = item.imagen;
        imagen.alt = 'img_' + i;
        imgDiv.appendChild(imagen);
    
        let content_body = document.createElement('div');
        content_body.innerHTML = `
            <div class="df content-space-between">
                <h4 class="color-c2">${item.nombre}</h4>
                <p class="f-w-800 color-c2">$ ${item.precio}</p>
            </div>
            <hr>
            <br>
            <p class="color-c1">
                ${item.descripcion}
            </p>
        `;
    
        item_menu.appendChild(imgDiv)
        item_menu.appendChild(content_body);
    
        contMenu.appendChild(item_menu);
    })
}

mostraMenu('all');

// console.log(document.querySelectorAll('[data-category]'));

document.querySelectorAll('[data-category]').forEach(btn => {

    btn.addEventListener('click', () => {
        // contMenu.classList.add('desvanecer');
        // setTimeout(() => {
        //     contMenu.classList.remove('desvanecer');
        // }, 4000);
        mostraMenu(btn.dataset.category);
    });
});
