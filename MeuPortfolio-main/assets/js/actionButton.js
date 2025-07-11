document.addEventListener('DOMContentLoaded', function() {
    // Botões flutuantes
    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');
    
    // Header para verificar scroll
    const header = document.querySelector('.header');
    
    // Mostrar/ocultar botões ao rolar
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        
        // Adiciona classe ao header quando scrollar
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Mostrar/ocultar botões flutuantes
        if (scrollPosition > 300) {
            backToTopButton.classList.add('show');
            whatsappButton.style.opacity = '1';
            whatsappButton.style.pointerEvents = 'auto';
        } else {
            backToTopButton.classList.remove('show');
            whatsappButton.style.opacity = '0';
            whatsappButton.style.pointerEvents = 'none';
        }
    }
    
    // Evento de scroll
    window.addEventListener('scroll', toggleButtons);
    
    // Voltar ao topo
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // WhatsApp button - abre em nova aba
    whatsappButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://wa.me/5511930246426', '_blank');
    });
    
    // Inicializa a verificação de scroll
    toggleButtons();
});