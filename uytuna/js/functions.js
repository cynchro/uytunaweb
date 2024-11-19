// Mostrar el botón de regreso al menú al hacer scroll
window.addEventListener('scroll', function () {
    const button = document.querySelector('.back-to-menu');
    if (window.scrollY > 300) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }

        /** **/

        const sections = document.querySelectorAll('.slide-in-left, .slide-in-right');
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
    
            if (sectionPosition < screenPosition) {
                section.classList.add('slide-in');
            }
        });

});

// Función para desplazarse hacia el menú
function scrollToMenu() {
    const menu = document.querySelector('header');
    menu.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener("scroll", function () {
    const mainImage = document.getElementById("mainImage");
    if (window.scrollY > 100) { // Ajusta el valor según cuándo quieres que ocurra el efecto
        mainImage.classList.add("scrolled");
    } else {
        mainImage.classList.remove("scrolled");
    }

        /** **/

        const sections = document.querySelectorAll('.slide-in-left, .slide-in-right');
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
    
            if (sectionPosition < screenPosition) {
                section.classList.add('slide-in');
            }
        });
});
