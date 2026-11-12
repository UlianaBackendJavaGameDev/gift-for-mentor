document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById('card');
    const openBtn = document.getElementById('openBtn');
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');

    if(musicBtn && bgMusic){
        musicBtn.addEventListener('click', () => {
            if(bgMusic.paused){
                bgMusic.play();
                musicBtn.textContent = '🔇';
                musicBtn.style.color = '#ff4d6d';
            } else{
                bgMusic.pause();
                musicBtn.textContent = '♪';
                musicBtn.style.color = '#667eea'
            }
        })
    }
    
    
    
    
    if(card && openBtn){
        openBtn.addEventListener('click', () => {
            card.classList.add('is-open')
        });
    }
});

    // Логика для сердечек
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤'; // Символ сердечка
        
        // Случайная позиция по горизонтали (от 0 до 100% ширины экрана)
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Случайная скорость падения (от 3 до 6 секунд)
        const duration = Math.random() * 3 + 3;
        heart.style.animationDuration = duration + 's';
        
        // Случайный размер (от 15px до 30px)
        const size = Math.random() * 15 + 15;
        heart.style.fontSize = size + 'px';

        document.body.appendChild(heart);

        // Удаляем сердечко из DOM, когда анимация закончится, чтобы не засорять память
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // Запускаем сердечки при клике на кнопку
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            // Создаем сердечки каждые 200 миллисекунд (5 штук в секунду)
            const heartInterval = setInterval(createHeart, 200);

            // Через 4 секунды останавливаем генерацию (чтобы не завалило весь экран)
            setTimeout(() => {
                clearInterval(heartInterval);
            }, 4000); 
        });
    }