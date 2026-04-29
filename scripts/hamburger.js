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
		nav.classList.toggle('menu-open');
	});

	let allLinks = links.querySelectorAll('a');
	allLinks.forEach(function (link) {
		link.addEventListener('click', function () {
			nav.classList.remove('menu-open');
		});
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth > 700) {
			nav.classList.remove('menu-open');
		}
	});
});
