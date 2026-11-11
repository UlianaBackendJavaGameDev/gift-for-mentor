document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById('card');
    const openBtn = document.getElementById('openBtn');


    if(card && openBtn){
        openBtn.addEventListener('click', () => {
            card.classList.add('is-open')
        });
    }
});