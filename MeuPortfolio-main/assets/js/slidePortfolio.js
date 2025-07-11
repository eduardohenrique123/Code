document.addEventListener('DOMContentLoaded', function() {
    const cases = document.querySelectorAll('[class^="case"]');
    
    cases.forEach((caseItem, index) => {
        const slide = caseItem.querySelector('.slide');
        const images = slide.querySelectorAll('img');
        const nextBtn = slide.querySelector('.next');
        const prevBtn = slide.querySelector('.prev');
        let currentIndex = 0;
        let slideInterval;
        const intervalTime = 5000;
        
        // Inicializa o slider
        function initSlider() {
            // Mostra a primeira imagem
            images.forEach((img, i) => {
                img.style.opacity = i === 0 ? '1' : '0';
                img.style.transition = 'opacity 0.5s ease-in-out';
            });
            
            // Inicia o slideshow automático
            startSlideShow();
            
            // Event listeners para navegação
            if (nextBtn) {
                nextBtn.addEventListener('click', nextSlide);
            }
            
            if (prevBtn) {
                prevBtn.addEventListener('click', prevSlide);
            }
            
            // Pausa o slideshow ao interagir
            slide.addEventListener('mouseenter', pauseSlideShow);
            slide.addEventListener('mouseleave', startSlideShow);
        }
        
        // Próximo slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlide();
        }
        
        // Slide anterior
        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlide();
        }
        
        // Atualiza o slide visível
        function updateSlide() {
            images.forEach((img, i) => {
                img.style.opacity = i === currentIndex ? '1' : '0';
            });
        }
        
        // Inicia o slideshow automático
        function startSlideShow() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }
        
        // Pausa o slideshow
        function pauseSlideShow() {
            clearInterval(slideInterval);
        }
        
        // Inicializa o slider para este case
        initSlider();
    });
});