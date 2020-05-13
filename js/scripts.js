/*
    PARA CONFIGURAR EL SLIDER CON SWIPER
*/

let mySwiper = new Swiper ('.swiper-container', {
    //PARA QUE SE AUTO INICIE
    autoplay: {
        delay: 2500,
    },
    //PARA CONTROLAR CON LOS BOTONES DEL TECLADO
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    //LOOP INFINITO
    loop: true,
    //EFECTO AL PASAR EL SLIDE
    effect: 'fade',
    //TIEMPO ENTRE CAMBIO DE IMAGEN
    speed: 700,
    //PARA MOFICAR EL CURSOR: PARA QUE APARESCA LA MANITO
    grabCursor: true,
})

/*
    CONFIGURACIÓN PERSONALIZADA
*/


/**
 *  PARA REALIZAR LA CONFIGURACIÓN DE LA ALTURA DEL BANNER Y LAS DIFERENTES MEDIDAS DE PANTALLA
 */

//CALCULAR LA ANCHURA DE LA PANTALLA PARA DETERMINAR EL ALTO DEL SLIDE PARA CUBRIR LA BARRA DE NAVEGACIÓN
let encabezado = document.getElementById('encabezado');
let banner = document.getElementById('banner');

//FUNCIÓN QUE SE EJECUTA AL CARGAR LA PÁGINA
function redimenzionarAltoSlider(){
    let anchoPantalla = screen.width;
    if(anchoPantalla > 767){
        banner.style.height = "auto";
    }else{
        let altoEncabezado = encabezado.getBoundingClientRect().height;
        banner.style.height = altoEncabezado + "px";
    }
}redimenzionarAltoSlider();

//EL EVENTO RESIZE ME PERMITE DETERMINAR CUANDO SE MODIFICA LAS DIMENSIONES DE LA PANTALLA
window.addEventListener("resize", (e) => {
    let anchoPantalla = screen.width;
    if(anchoPantalla < 768){
        let altoEncabezado = encabezado.getBoundingClientRect().height;
        banner.style.height = altoEncabezado + "px";
    }else{
        banner.style.height = "auto";
    }
});

/**
 *  PARA CAMBIAR EL COLOR DE LA BARRA DE NAVEGACIÓN PASANDO EL BANNER
 */

let logo = document.getElementsByClassName('logotipo')[0];
let iconoBuscar = document.getElementsByClassName('fa-search')[0];
let iconoMenu = document.getElementsByClassName('fa-bars')[0];

window.addEventListener('scroll', (e)=>{
    //Variables
    let banner = document.getElementById('banner');
    let alturaBanner = banner.getBoundingClientRect().height;

    if (window.scrollY > alturaBanner) {
        encabezado.style.backgroundColor = "#fff";
        logo.style.filter = "invert(100)";
        iconoMenu.style.color = "#000000";
        iconoBuscar.style.color = "#000000";
    } else {
        encabezado.style.backgroundColor = "rgba(0,0,0,0.5)";
        logo.style.filter = "invert(0)";
        iconoMenu.style.color = "#ffffff";
        iconoBuscar.style.color = "#ffffff";
    }
});


/**
 *  CONFIGURACIÓN DEL MENU PRINCIPAL
 */

let menuPrincipal = document.getElementById('menuPrincipal');
let bntClose = document.getElementsByClassName('btnClose')[0];

iconoMenu.addEventListener('click', (e)=>{
    fadeIn(menuPrincipal, 'block');
});

bntClose.addEventListener('click', (e)=>{
    fadeOut(menuPrincipal); 
});


function fadeOut(el){
    el.style.opacity = 1;
  
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
};
  
function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .2) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
};