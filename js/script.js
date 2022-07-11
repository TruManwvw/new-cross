"use strict"


// // Определяет устройство ПК/мобаил
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iphone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
// Меню бургер
const iconMenu = document.querySelector('.menu_burger')
if (iconMenu) {
	const menuBody = document.querySelector('.header_body');
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}


// Добавляет класс к body
if (isMobile.any()) {
	document.body.classList.add('_touch');

	//навешивает класс(_active) для родителя .arrow
	let menuArrows = document.querySelectorAll('.arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
	let menuErrows = document.querySelectorAll('.ac');
	if (menuErrows.length > 0) {
		for (let index = 0; index < menuErrows.length; index++) {
			const menuErrow = menuErrows[index];
			menuErrow.addEventListener("click", function (e) {
				menuErrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}
