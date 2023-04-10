// Función para mostrar el popup
function mostrarPopup() {
    // Obtener el popup
    var popup = document.getElementById("mi-popup");
  
    // Agregar la clase "popup-activo" para mostrar el popup
    popup.classList.add("popup-activo");
  }
  
  // Esperar 5 segundos y mostrar el popup
  setTimeout(mostrarPopup, 5000);

// Mostrar el popup cada 30 segundos
    // setInterval(mostrarPopup, 30000); desactivar

  // Obtener el botón de "cerrar"
var botonCerrar = document.getElementById("cerrar-popup");

// Obtener el popup
var popup = document.getElementById("mi-popup");

// Función para cerrar el popup
function cerrarPopup() {
  // Quitar la clase "popup-activo" para ocultar el popup
  popup.classList.remove("popup-activo");
}

// Agregar un evento de clic al botón de "cerrar"
botonCerrar.addEventListener("click", cerrarPopup);
