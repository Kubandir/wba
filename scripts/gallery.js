document.addEventListener('DOMContentLoaded', function () {
    let grid = document.getElementById('photo-grid');
    if (!grid) return;

    let lightbox = document.getElementById('lightbox');
    let lightboxImg = lightbox && lightbox.querySelector('.lightbox-img');
    let closeBtn = lightbox && lightbox.querySelector('.lightbox-close');

    fetch('../img/galerie/manifest.json')
        .then(function (r) {
            if (!r.ok) throw new Error('manifest missing');
            return r.json();
        })
        .then(render)
        .catch(function () { render([]); });

    function render(files) {
        if (!files.length) {
            for (let i = 0; i < 9; i++) {
                grid.appendChild(makeCard('../img/performance.jpg'));
            }
            return;
        }
        files.forEach(function (file) {
            grid.appendChild(makeCard('../img/galerie/' + file));
        });
    }

    function makeCard(src) {
        let card = document.createElement('article');
        card.className = 'media-card';

        let img = document.createElement('img');
        img.className = 'media-photo';
        img.src = src;
        img.alt = '';

        card.appendChild(img);
        card.addEventListener('click', function () { openLightbox(src); });
        return card;
    }

    function openLightbox(src) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.hidden = true;
        document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (lightbox) lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
    });
});
