class Cart {
	static productsDict = {
		'tomatoes': {
			src: 'img/tomatoes.jpg',
			price: 150,
			title: 'Помидоры'
		},
		'vitaminesalad': {
			src: 'img/salad-vitamine.jpg',
			price: 150,
			title: 'Витаминный салат'
		},
		'almond': {
			src: 'img/almond.jpg',
			price: 150,
			title: 'Миндаль'
		},
		'fishfat': {
			src: 'img/fish-fat.jpg',
			price: 150,
			title: 'Рыбий жир'
		},
		'vitamined': {
			src: 'img/vitamine-d.jpg',
			price: 150,
			title: 'Витамин D'
		},
	};
	constructor() {
		const storage = window.localStorage;
		Cart.addEventListenersToButtons(Cart.getDictOfButtons());
		Cart.render(storage);
		Cart.updateCartNumber();
	}

	static render(storage) {
		if (!document.getElementsByClassName('cart-products')[0]) {
			return;
		}
		if (storage.length != 0) {
			Cart.updateCartNumber();
			document.querySelectorAll('.cart-products__empty, .body-main__button>a').forEach((elem) => { elem.classList.add('hidden') });
			for (let i = 0; i < storage.length; i++) {
				Cart.appendElement(
					Cart.productsDict[storage.key(i)].src,
					Cart.productsDict[storage.key(i)].title,
					Cart.productsDict[storage.key(i)].price,
					storage.getItem(storage.key(i)),
					storage.key(i)
				)
			}
		} else {
			document.querySelectorAll('.cart-products, .body-main__button>span').forEach((elem) => { elem.classList.add('hidden') });
		}
	};

	static appendElement(imgSrc, title, price, amount, id) {
		const container = document.getElementsByClassName('cart-products')[0];
		const main = document.createElement('div');
		main.classList.add('cart-products__cart-product', 'cart-product');
		let current;
		current = document.createElement('div');
		current.classList.add('cart-product__product');
		main.append(current);
		current = document.createElement('img');
		current.setAttribute('src', imgSrc);
		current.setAttribute('alt', title);
		main.getElementsByClassName('cart-product__product')[0].append(current);
		current = document.createElement('div');
		current.classList.add('cart-product__title');
		current.innerHTML = title;
		main.getElementsByClassName('cart-product__product')[0].append(current);
		current = document.createElement('div');
		current.classList.add('cart-product__amount');
		main.append(current);
		current = document.createElement('span');
		current.classList.add('cart-product__amount-increase');
		current.addEventListener('click', () => {
			Cart.addProduct(id);
			main.querySelector('input').value++;
			Cart.updateFields(main, price, id);
		});
		main.getElementsByClassName('cart-product__amount')[0].append(current);
		current = document.createElement('input');
		current.setAttribute('type', 'number');
		current.value = amount;
		current.addEventListener('change', (e) => {
			if (e.target.value < 1) {
				this.removeProduct(main, id);
				return;
			}
			if (Number.isInteger(Number(e.target.value))) {
				this.setAmout(id, e.target.value);
				this.updateFields(main, price, id);
			}
		})
		main.getElementsByClassName('cart-product__amount')[0].append(current);
		current = document.createElement('span');
		current.classList.add('cart-product__amount-decrease');
		current.addEventListener('click', () => {
			Cart.decreaseProduct(id, main);
			main.querySelector('input').value--;
			Cart.updateFields(main, price, id);
		});
		main.getElementsByClassName('cart-product__amount')[0].append(current);
		current = document.createElement('div');
		current.classList.add('cart-product__total');
		main.append(current);
		current = document.createElement('span');
		current.innerHTML = `${amount} x ${price} р`;
		main.getElementsByClassName('cart-product__total')[0].append(current);
		current = document.createElement('span');
		current.innerHTML = `${amount * price} р`;
		main.getElementsByClassName('cart-product__total')[0].append(current);
		current = document.createElement('button');
		current.classList.add('cart-product__remove');
		current.addEventListener('click', () => { this.removeProduct(main, id) });
		main.append(current);
		current = document.createElement('img');
		current.setAttribute('src', 'img/svg/cross.svg');
		current.setAttribute('alt', 'Remove');
		main.getElementsByClassName('cart-product__remove')[0].append(current);
		container.append(main);
	}

	static addProduct(product) {
		let amount = window.localStorage.getItem(product);
		if (amount) {
			amount++;
			window.localStorage.setItem(product, amount);
		}
	}

	static decreaseProduct(product, main) {
		let amount = window.localStorage.getItem(product);
		if (amount) {
			if (amount < 2) {
				this.removeProduct(main, product);
				return;
			}
			amount--;
			window.localStorage.setItem(product, amount);
		}
	}

	static setAmout(id, amount) {
		window.localStorage.setItem(id, amount);
	}

	static updateSpanTotal(main, price, id) {
		main.querySelector('.cart-product__total>span:first-child').innerHTML = `${window.localStorage.getItem(id)} x ${price} р`;
		main.querySelector('.cart-product__total>span:last-child').innerHTML = `${window.localStorage.getItem(id) * price} р`;
	}

	static upadateInput(main, id) {
		main.querySelector('input').value = window.localStorage.getItem(id);
	}

	static updateFields(main, price, id) {
		this.updateSpanTotal(main, price, id);
		this.upadateInput(main, id);
		this.updateCartNumber();
	}

	static removeProduct(main, id) {
		window.localStorage.removeItem(id);
		main.remove();
		document.location.reload();
	}

	static updateCartNumber() {
		const number = document.querySelector('.cart-number');
		let count = 0;
		for (let i = 0; i < window.localStorage.length; i++) {
			count += Number(window.localStorage.getItem(window.localStorage.key(i)));
		}
		number.innerHTML = count;
	}

	static addToLocalStorage(id) {
		let amount = window.localStorage.getItem(id);
		if (amount) {
			amount = Number(amount) + 1;
			window.localStorage.setItem(id, amount);
		} else {
			window.localStorage.setItem(id, 1);
		}
		Cart.updateCartNumber();
	}

	static addEventListenersToButtons(dict) {
		if (!dict) {
			return;
		}
		for (const product in dict) {
			dict[product].forEach(button => button.addEventListener('click', () => {
				Cart.addToLocalStorage(product);
				Cart.updateCartNumber();
			}))
		}
	}

	static getDictOfButtons() {
		let dict = {
			'tomatoes': [],
			'vitaminesalad': [],
			'almond': [],
			'fishfat': [],
			'vitamined': []
		};
		const productCards = document.getElementsByClassName('product');
		if (productCards.length == 0) {
			return;
		}
		for (const card of productCards) {
			const product = card.getElementsByClassName('product__title')[0].innerHTML;
			switch (product) {
				case 'Помидоры':
					dict.tomatoes.push(card.getElementsByClassName('product__button')[0]);
					break;
				case 'Витаминный салат':
					dict.vitaminesalad.push(card.getElementsByClassName('product__button')[0]);
					break;
				case 'Миндаль':
					dict.almond.push(card.getElementsByClassName('product__button')[0]);
					break;
				case 'Рыбий жир':
					dict.fishfat.push(card.getElementsByClassName('product__button')[0]);
					break;
				case 'Витамин D':
					dict.vitamined.push(card.getElementsByClassName('product__button')[0]);
					break;

				default:
					break;
			}
		}
		return dict;
	}
}

new Cart;

// Cart.appendElement('img/tomatoes.jpg', 1, 1, 1);