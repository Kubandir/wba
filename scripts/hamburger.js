document.addEventListener('DOMContentLoaded', function () {
	let nav = document.querySelector('nav');
	if (!nav) {
		return;
	}

	let button = nav.querySelector('.nav-toggle');
	let links = nav.querySelector('.nav-links');

	if (!button || !links) {
		return;
	}

	button.addEventListener('click', function () {
		let isOpen = nav.classList.contains('menu-open');

		if (isOpen) {
			nav.classList.remove('menu-open');
			button.setAttribute('aria-expanded', 'false');
			button.setAttribute('aria-label', 'Otevrit menu');
		} else {
			nav.classList.add('menu-open');
			button.setAttribute('aria-expanded', 'true');
			button.setAttribute('aria-label', 'Zavrit menu');
		}
	});

	let allLinks = links.querySelectorAll('a');
	allLinks.forEach(function (link) {
		link.addEventListener('click', function () {
			nav.classList.remove('menu-open');
			button.setAttribute('aria-expanded', 'false');
			button.setAttribute('aria-label', 'Otevrit menu');
		});
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth > 700) {
			nav.classList.remove('menu-open');
			button.setAttribute('aria-expanded', 'false');
			button.setAttribute('aria-label', 'Otevrit menu');
		}
	});
});
