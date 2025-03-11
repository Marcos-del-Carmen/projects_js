const objColor = new Colors();

let num_counter = document.getElementById('num_counter');
let btn_decrease = document.getElementById('btn-decrease');
let btn_reset = document.getElementById('btn-reset');
let btn_increase = document.getElementById('btn-increase');

btn_decrease.addEventListener('click', (e)=> {
    num = parseInt(num_counter.textContent);
    num_counter.textContent = num-1;
    num_counter.style.color = objColor.colorRandomHex();
})

btn_reset.addEventListener('click', (e)=> {
    num_counter.textContent = 0
    num_counter.style.color = objColor.colorRandomHex();
})

btn_increase.addEventListener('click', (e)=> {
    num = parseInt(num_counter.textContent);
    num_counter.style.color = objColor.colorRandomHex();
    num_counter.textContent = num+1;
})