document.querySelectorAll('.item-menu').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        // Obtiene el ID del elemento de destino
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Realiza el desplazamiento con un ajuste de 100px
        window.scrollTo({
            top: targetElement.offsetTop + 9, // Ajusta el desplazamiento
            behavior: 'smooth'
        });
    });
});