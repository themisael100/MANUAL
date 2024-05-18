// Función para desplazarse suavemente hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Mostrar u ocultar el botón de volver hacia arriba dependiendo del desplazamiento de la página
window.addEventListener('scroll', function () {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});