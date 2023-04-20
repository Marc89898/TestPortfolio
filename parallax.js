let titulo = document.getElementById("nom");
let suelo = document.getElementById("suelo")
let cielo = document.getElementById("cielo")
let fons = document.getElementById("fons")

window.addEventListener('scroll', () =>{

    let value = window.scrollY;

    titulo.style.marginTop = value * 1.5 +'px';
    suelo.style.marginTop = value * -1 + 'px';
    cielo.style.marginTop = value * -0.3 + 'px';
    

});