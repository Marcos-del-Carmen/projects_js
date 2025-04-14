let obj = [
    {
        title: 'History',
        content: 'History is the study of past events, particularly in human affairs.',
    },
    {
        title: 'Vision',
        content: 'Vision is the ability to see and interpret the world around us.',
    },
    {
        title:'Gloals',
        content: 'Goals are the desired outcomes or achievements that individuals or organizations aim to accomplish.',
    }
]

let buttons = document.getElementsByClassName('btns')
let content = document.getElementById('content-text');
content.innerHTML = `
    <h3>${obj[0].title}</h3>
    <p class="text-justify">${obj[0].content}</p>
`;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        content.innerHTML = `
        <h3>${obj[i].title}</h3>
        <p class="text-justify">${obj[i].content}</p>
        `;
        buttons[i].classList.add('active');
        for (let j = 0; j < buttons.length; j++) {
            if (j !== i) { // si son diferentes de si mismo se remueve la clase active
                buttons[j].classList.remove('active');
            }
        }
    });
}