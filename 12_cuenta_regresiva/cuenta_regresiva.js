// fecha del evento 30 de abril 
let dias = document.getElementById('days');
let horas = document.getElementById('hours');
let minutos = document.getElementById('minutes');
let segundos = document.getElementById('seconds');
let dayEvent = document.getElementById('date-event');

let dateEvent = new Date(2025, 3, 30, 10, 30, 0);
let dateFormat = dateEvent.toLocaleString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric", hour:'numeric', minute:"numeric", dayPeriod: "narrow"})
dayEvent.innerHTML = `<b>${dateFormat}</b>`;

let timeEvent = dateEvent.getTime();

function cuentaRegresiva(){ 

    let timeToday = new Date().getTime();
    t = timeEvent - timeToday;

    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMinute = 60 * 1000;

    let days  = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);    
    let minutes = Math.floor((t% oneHour) / oneMinute);
    let seconds = Math.floor((t%oneMinute) / 1000);

    dias.innerHTML = days;
    horas.innerHTML = hours;
    minutos.innerHTML = minutes;
    segundos.innerHTML = seconds;
}

setInterval(cuentaRegresiva, 1000);
cuentaRegresiva();
