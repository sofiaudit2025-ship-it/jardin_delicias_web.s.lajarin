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


