const navbar = document.querySelector('.menu__navbar');
const buttons = document.querySelectorAll('.menu__btn');
const openBtn = document.querySelector('.menu__btn--open');
const closeBtn = document.querySelector('.menu__btn--close');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		console.log('click');
		openBtn.classList.toggle('menu__btn--hide');
		closeBtn.classList.toggle('menu__btn--hide');
		navbar.classList.toggle('menu__navbar--hide');
	});
});
