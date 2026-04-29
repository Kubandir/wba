document.addEventListener('DOMContentLoaded', function () {
    let fallbackSrc = '../img/performance.jpg';

    document.querySelectorAll('.performance-card.past.no-media').forEach(function (card) {
        if (card.querySelector('img, video')) return;
        let img = document.createElement('img');
        img.className = 'performance-photo';
        img.src = fallbackSrc;
        img.alt = '';
        card.classList.remove('no-media');
        card.insertBefore(img, card.firstChild);
    });
});
