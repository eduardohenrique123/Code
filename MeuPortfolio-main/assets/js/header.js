document.addEventListener('DOMContentLoaded', function() {
    // Elementos do menu
    const hamburger = document.querySelector('.hamburger');
    const menuToggle = document.querySelector('.hamburger input');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    // Abre/fecha o menu
    function toggleMenu() {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll');
            // Anima os links do menu
            navLinks.forEach((link, index) => {
                link.style.transitionDelay = `${index * 0.1}s`;
                link.classList.add('active');
            });
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
            // Remove as animações dos links
            navLinks.forEach(link => {
                link.style.transitionDelay = '0s';
                link.classList.remove('active');
            });
        }
    }
    
    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    
    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.checked = false;
            toggleMenu();
        });
    });
    
    // Fecha o menu ao clicar fora
    menuAberto.addEventListener('click', function(e) {
        if (e.target === menuAberto) {
            menuToggle.checked = false;
            toggleMenu();
        }
    });
});