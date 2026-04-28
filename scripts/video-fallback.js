document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('video.performance-video').forEach(function (video) {
        video.addEventListener('error', handleMissing);
        video.addEventListener('stalled', handleMissing);

        if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
            handleMissing.call(video);
        }

        function handleMissing() {
            let card = video.closest('.performance-card');
            if (card) {
                card.classList.add('no-media');
            }
            video.remove();
        }
    });
});
