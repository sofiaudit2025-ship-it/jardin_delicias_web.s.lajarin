let contador = 0;

function carga() {
    if (contador <= 100) {
        document.getElementById("porcentaje").textContent = contador + "%";
        contador++;
        setTimeout(carga, 30); // velocidad de carga
    } else {
        // Transición suave al finalizar
        document.getElementById("carga").style.top = "-100%";
    }
}

window.onload = carga;


 /* Abre la ventana modal mostrando la imagen y el pie de foto del elemento figure pasado como parámetro.
 */
function openModal(figura) {
  const modal = document.getElementById("modal");
  const rutaImagen = figura.querySelector("img").getAttribute("src");
  const pieImagen = figura.querySelector("figcaption").innerHTML;

  modal.querySelector("img").setAttribute("src", rutaImagen);
  modal.querySelector("figcaption").innerHTML = pieImagen;
  modal.style.display = "flex";
}

/*Cierra el modal*/
function closeModal() {
  document.getElementById("modal").style.display = "none";
}