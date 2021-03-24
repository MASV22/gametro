
window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañodepantalla = window.innerHeight;
    if (posicionObj1 < tamañodepantalla) {
        animacion.style.animation= 'mover 1s ease-out';
        
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado2');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañodepantalla = window.innerHeight;
    if (posicionObj1 < tamañodepantalla) {
        animacion.style.animation= 'mover 1s ease-out';
        
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado3');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañodepantalla = window.innerHeight;
    if (posicionObj1 < tamañodepantalla) {
        animacion.style.animation= 'mover 1s ease-out';
        
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado4');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañodepantalla = window.innerHeight;
    if (posicionObj1 < tamañodepantalla) {
        animacion.style.animation= 'mover 1s ease-out';
        
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado5');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañodepantalla = window.innerHeight;
    if (posicionObj1 < tamañodepantalla) {
        animacion.style.animation= 'mover 1s ease-out';
        
    }
})


window.addEventListener('scroll', function(){


    
    let animacion = document.getElementById('animado7');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañodepantalla = window.innerHeight;
    if (posicionObj1 < tamañodepantalla) {
        animacion.style.animation= 'mover 1s ease-out';
        
    }
})




/*

const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 250);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
        complete();
        return;
        
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

*/