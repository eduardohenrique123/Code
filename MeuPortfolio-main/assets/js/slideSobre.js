document.addEventListener('DOMContentLoaded', function() {
    const headlineScroll = document.getElementById('headline-scroll');
    
    if (headlineScroll) {
        // Clona o elemento para criar um efeito de loop contínuo
        const clone = headlineScroll.cloneNode(true);
        clone.id = 'headline-scroll-clone';
        headlineScroll.parentNode.appendChild(clone);
        
        // Configura a animação
        function setupAnimation() {
            const scrollWidth = headlineScroll.scrollWidth;
            const duration = scrollWidth / 50; // Ajusta a velocidade baseada na largura
            
            headlineScroll.style.width = `${scrollWidth}px`;
            clone.style.width = `${scrollWidth}px`;
            
            // Cria a animação CSS dinamicamente
            const style = document.createElement('style');
            style.textContent = `
                @keyframes scrollText {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${scrollWidth}px); }
                }
                
                #headline-scroll, #headline-scroll-clone {
                    animation: scrollText ${duration}s linear infinite;
                }
                
                #headline-scroll:hover, #headline-scroll-clone:hover {
                    animation-play-state: paused;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Verifica se as fontes estão carregadas para calcular corretamente a largura
        document.fonts.ready.then(() => {
            setupAnimation();
        });
    }
});