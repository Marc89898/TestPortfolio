let ubicacionPrincipal = window.pageYOffset;
let fondo = document.getElementById("suelo").style.top;
let nom = document.getElementById("nom").style.top;

window.onscroll = function () {
    let Desplazamiento_Actual = window.pageYOffset;
    if (ubicacionPrincipal >= Desplazamiento_Actual) {
        document.getElementById('SecondPage').style.top = '0';
    }
    else {
        document.getElementById('SecondPage').style.top = '-100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;

    let deviceWidth = screen.width;
    let scrollThreshold = 150;

    if (deviceWidth < 768) { // móvil
        scrollThreshold = 50;
    } else if (deviceWidth < 992) { // tablet
        scrollThreshold = 100;
    }

    if(document.documentElement.scrollTop > scrollThreshold){
        document.getElementById("nom").style.opacity = "0";
    } else if(document.documentElement.scrollTop < 250){
        document.getElementById("nom").style.opacity = "1";
    }   

}
