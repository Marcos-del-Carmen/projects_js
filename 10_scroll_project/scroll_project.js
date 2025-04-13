const botones = document.getElementsByClassName('btnsScroll');
const caja = document.getElementsByClassName('section-scroll');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => {
            
        let cajaPost = caja[i].getBoundingClientRect();
        caja[i].classList.add('caja-roja');
        window.scrollTo({
            top: window.scrollY + cajaPost.top,
            behavior: 'smooth'
        });
    });
}

// const btnScroll = document.getElementsByClassName('btnScroll');
// console.log('btn', btnScroll);
// for (let i = 0; i < btnScroll.length; i++) {   
//     btnScroll[i].addEventListener('click', () => {
//         const medidas = caja[i].getBoundingClientRect();
//         console.log(`La caja está a ${medidas.top}px del borde superior.`);

//         const scrollTop = document.documentElement.scrollTop;
//         console.log(`Scroll actual: ${scrollTop}px`);
//     });
// }
