//controlando etiquetas con el DOM

//pasos
//1. almacenar en memoria (crear una variable), la etiqueta que quiero controlar
let etiquetaImagen=document.getElementById("fotografia")


//2. controlando nuestras etiquetas
//2.1 controlar es cambiar la fuente (SRC) de una etiqueta
etiquetaImagen.src="./img/img2.png"

//2.2 controlar es cambiar el contenido de texto de una etiqueta
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="HISTORIA"

//2.3 controlar es agregar estilos 
etiquetaTitulo.classList.add('fuente','alineado')

//2.4 controlar es mover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove('text-danger')

//2.5 controlar es DETECTAR eventos
let etiquetaboton=document.getElementById("boton")
etiquetaboton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})