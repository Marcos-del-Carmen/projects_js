let btn_pause = document.getElementById('btn-pause');
let btn_play = document.getElementById('btn-play');

function repoducirVid() {
    btn_play.classList.add('btn-primary');
    btn_pause.classList.remove('btn-primary');
    let vid = document.querySelector('video');
    vid.play();
}

function pausarVid() {
    btn_pause.classList.add('btn-primary');
    btn_play.classList.remove('btn-primary');
    let vid = document.querySelector('video');
    vid.pause();
}