"use strict"
const screenWidth = document.documentElement.clientWidth;
let body = document.querySelector('body');
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
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
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

/* липкий header*/
let header = document.querySelector(".header__bottom");
if(header){
	(function(){
		window.onscroll = function() {stickyHeader()};
		let sticky = header.offsetHeight+100;
		function stickyHeader() {
			if (window.pageYOffset > sticky) {
				header.classList.add("sticky-header");
			} else {
				header.classList.remove("sticky-header");
			}
		}
	})();
}




// Меню бургер
const iconMenu = document.querySelector('.header__menu-open-btn');
const mobileNavBlock = document.querySelector('.header__nav-block');
const menuBody = document.querySelector('.nav');
const closeIcon = document.querySelector('.mobile-nav-close');
const navOverlay = document.querySelector('.mobile-nav-under');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.add('_lock');
	});
}
if (closeIcon) {
	closeIcon.addEventListener("click", function (e) {
		document.body.classList.remove('_lock');
	});
}
if(navOverlay){
	navOverlay.addEventListener("click", function (e) {
		document.body.classList.remove('_lock');
	});
}
//показываем и скрываем списки и подменю
let hiddenItemsControls = document.querySelectorAll('.hidden-items-control');
if(hiddenItemsControls){
	hiddenItemsControls.forEach(
		element => {
			element.addEventListener('click', function(e){
				e.preventDefault();
				e.target.classList.toggle('open-state');
				let sublist = e.target.closest('.sublist-title').nextSibling.nextElementSibling;
				sublist.classList.toggle('hidden-items');
			})
		}
	)
}
//меню категорий
/*---categories slideToggle---*/
$(".categories_title").on("click", function() {
	$(this).toggleClass('active');
	$('.categories_menu_toggle').slideToggle('medium');
}); 
/*---Category menu---*/
function categorySubMenuToggle(){
	$('.categories_menu_toggle li.menu_item_children > a').on('click', function(){
	if($(window).width() < 991){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
					element.removeClass('open');
					element.find('li').removeClass('open');
					element.find('ul').slideUp();
			}
			else {
					element.addClass('open');
					element.children('ul').slideDown();
					element.siblings('li').children('ul').slideUp();
					element.siblings('li').removeClass('open');
					element.siblings('li').find('li').removeClass('open');
					element.siblings('li').find('ul').slideUp();
			}
	}
	});
	$('.categories_menu_toggle li.menu_item_children > a').append('<span class="expand"></span>');
}
categorySubMenuToggle();


//меню футер
const footerMenu = document.querySelector('.footer__mobile-nav-wrap');
if(footerMenu&&(screenWidth<769)){
	let scrollPos = 0;
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if (st > scrollPos){
			//$('#result').html('Вниз');
			document.querySelector('footer').classList.add('show-footer-menu');
		} else {
			//$('#result').html('Вверх');
			document.querySelector('footer').classList.remove('show-footer-menu');
		}
		scrollPos = st;
 });
}

//появление корзины


const iconCart = document.querySelector('.mini-cart__header');
const closeCartBtn = document.querySelector('.mini-cart__icon-close');
const navCartOverlay = document.querySelector('.mobile-nav-under-cart');
if (iconCart) {
	iconCart.addEventListener("click", function (e) {
		document.body.classList.add('_lock-cart');
	});
}
if (closeCartBtn) {
	closeCartBtn.addEventListener("click", function (e) {
		document.body.classList.remove('_lock-cart');
	});
}
if(navCartOverlay){
	navCartOverlay.addEventListener("click", function (e) {
		document.body.classList.remove('_lock-cart');
	});
}