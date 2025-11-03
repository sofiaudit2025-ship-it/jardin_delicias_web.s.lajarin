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

/*  Abre el menú */
function openMenu() {
  document.querySelector(".menu-movil").classList.add("activo");
  document.body.style.overflow = "hidden"; // evita scroll detrás
}

/*cierra el menu*/
function closeMenu() {
  document.querySelector(".menu-movil").classList.remove("activo");
  document.body.style.overflow = "";
}




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

// Calcular el coste total según tipo y cantidad
function costeTotal() {
    const numero = parseInt(document.getElementById("numero").value) || 0;
    const tipo = document.getElementById("actividad").value;

    let precio = 0;
    switch (tipo) {
        case "normal":
            precio = 65;
            break;
        case "premium":
            precio = 110;
            break;
        case "vip":
            precio = 180;
            break;
    }

    const total = numero * precio;
    document.getElementById("coste").innerHTML = total > 0 ? `${total} €` : "";
}

// Mostrar ventana modal con datos de compra
function comprar() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const tipo = document.getElementById("actividad").value;
    const entradas = parseInt(document.getElementById("numero").value);
    const coste = document.getElementById("coste").innerText;

    if (!nombre || !correo || !tipo || !entradas) {
        alert("Por favor, rellena todos los campos correctamente.");
        return false;
    }

    // Llenamos los datos en la ventana modal
    document.getElementById("nombreModal").textContent = nombre;
    document.getElementById("correoModal").textContent = correo;
    document.getElementById("tipoModal").textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    document.getElementById("cantidadModal").textContent = entradas;
    document.getElementById("totalModal").textContent = coste;

    // Mostramos la ventana modal
    document.getElementById("modal-confirmacion").style.display = "flex";
    return false;
}

// Cerrar ventana modal
function cerrarModalCompra() {
    document.getElementById("modal-confirmacion").style.display = "none";
}

