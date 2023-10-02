function toggleInformacion() {
    const informacionDiv = document.getElementById('informacion');
    const toggleButton = document.getElementById('toggleButton');

    if (informacionDiv.style.display === 'none' || informacionDiv.style.display === '') {
        informacionDiv.style.display = 'block';  // Mostrar la información
        toggleButton.textContent = 'Ocultar Información';
    } else {
        informacionDiv.style.display = 'none';   // Ocultar la información
        toggleButton.textContent = 'Mostrar Información';
    }
}
//5
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
        // Cambiar a tema oscuro
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        // Cambiar a tema claro
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
});
//6 const scrollToTopButton = document.getElementById("scroll-to-top");

// Muestra el botón cuando se desplaza hacia abajo
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Desplazamiento suave al hacer clic en el botón
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
