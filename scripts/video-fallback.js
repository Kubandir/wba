document.addEventListener('DOMContentLoaded', function () {
    let fallbackSrc = '../img/performance.jpg';

    document.querySelectorAll('video.performance-video').forEach(function (video) {
        video.addEventListener('error', swap);
        video.addEventListener('stalled', swap);

        if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
            swap.call(video);
        }

        function swap() {
            if (!video.parentNode) return;
            let img = document.createElement('img');
            img.className = 'performance-photo';
            img.src = fallbackSrc;
            img.alt = '';
            video.parentNode.replaceChild(img, video);
        }
    });

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
