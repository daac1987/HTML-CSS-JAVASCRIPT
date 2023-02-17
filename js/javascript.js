function ejercicio_nueve_enlaces (){
    window.alert("Los enlaces no tienen asignada la ruta. Son de ejemplo.");
}

const abrir = document.getElementById("abrir-img-original");
const divImgOriginal = document.getElementById("img-original");
const cerrar = document.getElementById("cerrar-img-original");

abrir.addEventListener("click", () => {
    divImgOriginal.classList.add("show")
});

cerrar.addEventListener("click", () => {
    divImgOriginal.classList.remove("show")
});


