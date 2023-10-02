// 1 Agrega a tus enlaces de navegación la clase "smooth-scroll" y el atributo "data-target" con el ID de la sección de destino.
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});

//2

//3

//4


