let video=document.querySelector("video");
let seccionDur=document.querySelector("#duracion");


/* const transformarTiempo=(tiempo)=>{
    if(tiempo<60){
        return `00:${tiempo.toFixed(2)}`
    }
}

const mostrarDur=()=>{
    let duracion=transformarTiempo(video.duration)

    seccionDur.textContent=duracion
}

*/


const reproducir=()=>{
    video.play()
}

const pausar=()=>{
    video.pause()
}

const mutear=()=>{
    video.muted=true
}

const desmutear=()=>{
    video.muted=false
}

let img1 = document.querySelector("#rompe1");
let img2 = document.querySelector("#rompe2");
let img3 = document.querySelector("#rompe3");

const caja1 = document.querySelector("#caja1");
const caja2 = document.querySelector("#caja2");
const caja3 = document.querySelector("#caja3");

/* ROMPE 1 */
img1.addEventListener('dragstart', inicioTraslado);
img1.addEventListener('dragend', finTraslado);

/* ROMPE 2 */
img2.addEventListener('dragstart', inicioTraslado2);
img2.addEventListener('dragend', finTraslado2);

/* ROMPE 3 */
img3.addEventListener('dragstart', inicioTraslado3);
img3.addEventListener('dragend', finTraslado3);


function inicioTraslado(evento) {
    evento.dataTransfer.setData('Text', "/multimedia/Rompe1.png");
}

function finTraslado(evento) {
    let rompe1 = evento.target;
    rompe1.style.display = "none";
}

function inicioTraslado2(evento) {
    evento.dataTransfer.setData('Text', "/multimedia/Rompe2.png");
}

function finTraslado2(evento) {
    let rompe2 = evento.target;
    rompe2.style.display = "none";
}

function inicioTraslado3(evento) {
    evento.dataTransfer.setData('Text', "/multimedia/Rompe3.png");
}

function finTraslado3(evento) {
    let rompe3 = evento.target;
    rompe3.style.display = "none";
}

caja1.addEventListener('dragover', noDefault);
caja2.addEventListener('dragover', noDefault);
caja3.addEventListener('dragover', noDefault);

caja1.addEventListener('drop', soltarElemento1);
caja2.addEventListener('drop', soltarElemento2);
caja3.addEventListener('drop', soltarElemento3);

function soltarElemento1(evento) {
    let dataRompe1 = evento.dataTransfer.getData('Text');
    caja1.innerHTML = `<img id=rompe1 src="${dataRompe1}"/>`;
}

function soltarElemento2(evento) {
    let dataRompe2 = evento.dataTransfer.getData('Text');
    caja2.innerHTML = `<img id=rompe2 src="${dataRompe2}"/>`;
}

function soltarElemento3(evento) {
    let dataRompe3 = evento.dataTransfer.getData('Text');
    caja3.innerHTML = `<img id=rompe3 src="${dataRompe3}"/>`;
}

function noDefault(evento) {
    evento.preventDefault();
}

function reiniciar(){
    location.reload()
}