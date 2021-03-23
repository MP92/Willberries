const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');

buttonCart.addEventListener('click', () => {
	modalCart.classList.add('show');
});

modalClose.addEventListener('click', () => {
	modalCart.classList.remove('show');
});

modalCart.addEventListener('click', (evt) => {
	if (!evt.target.closest('.modal')) {
		modalCart.classList.remove('show');
	}
});

(function() {
	const scrollLinks = document.querySelectorAll('.scroll-link');

	scrollLinks.forEach(scrollLink => {
		scrollLink.addEventListener('click', evt => {
			evt.preventDefault();

			const id = scrollLink.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	});
})();


