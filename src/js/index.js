let global = new Global();
let projectManeger = new ProjectManeger();

let cont = document.getElementById('container');

projectManeger.getProjects().forEach(pro => {
    let card = document.createElement('div');
    card.classList.add('br-10', 'border-1px', 'card-container');
    card.innerHTML = `
        <div class="image-container">
            <img class="image" src="${pro.img}">
        </div>
        <div class="p-1">
            <h3 class="text-center mb-1">${pro.name}</h3>
            <p class="text-ellipsis">${pro.description}</p>
            <p>${pro.created}</p>
            <div class="cont-buttons">
                <a class="btn btn-primary" href="${pro.path}">Ir a proyecto</a>
            </div>
        </div>
    `;
    cont.appendChild(card);
});

document.body.appendChild(cont);

