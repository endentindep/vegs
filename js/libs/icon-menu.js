(function () {
	const burgerSelector = '.icon-menu';
	const burgerMenuSelector = '.icon-menu__body'
	const burger = document.querySelector(`${burgerSelector}`);
	const burgerMenu = document.querySelector(`${burgerMenuSelector}`);
	const burgerParentSelector = '.' + burger.parentElement.getAttribute('class').split(' ').join('.');
	if (burger) {
		burger.addEventListener('click', () => {
			burger.classList.toggle(`${burgerSelector}_active`.slice(1));
			burgerMenu.classList.toggle(`${burgerMenuSelector}_active`.slice(1));
			document.querySelector('body').classList.toggle('disable-scroll');
		})
		document.addEventListener('click', (e) => {
			if (!(e.target.closest(burgerParentSelector))) {
				burger.classList.remove(`${burgerSelector}_active`.slice(1));
				burgerMenu.classList.remove(`${burgerMenuSelector}_active`.slice(1));
				document.querySelector('body').classList.remove('disable-scroll');
			}
		})
	}
})()
