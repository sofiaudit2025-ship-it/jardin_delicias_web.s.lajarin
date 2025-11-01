let contador = 0;

function carga() {
    // Verificamos si existe el elemento con id="porcentaje"
    const porcentaje = document.getElementById("porcentaje");
    const pantallaCarga = document.getElementById("carga");

    // Si no existe (por ejemplo, en artistas.html), salimos sin hacer nada
    if (!porcentaje || !pantallaCarga) return;

    if (contador <= 100) {
        porcentaje.textContent = contador + "%";
        contador++;
        setTimeout(carga, 30); // velocidad de carga
    } else {
        pantallaCarga.style.top = "-100%";
    }
}

window.onload = carga;

window.onload = carga;


/* Abre la ventana modal mostrando la imagen y el pie de foto del elemento figure pasado como parámetro. */
function openModal(figura) {
    console.log("Función openModal");
    var modal = document.getElementById("modal");
    var rutaImagen = figura.querySelector("img").getAttribute("src");
    console.log("Valor de la ruta de la imagen: " + rutaImagen);

    //  Seleccionamos correctamente el figcaption
    var pieImagen = figura.querySelector("figcaption").innerHTML;
    console.log("Pie de imagen: " + pieImagen);

    modal.querySelector("img").src = rutaImagen;
    modal.querySelector("figcaption").innerHTML = pieImagen;
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}







// tarjeta

