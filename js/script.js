$(function () {
	$('.slider__slider').slick({
		arrows: false,
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		dragable: false,
		waitForAnimate: false,
		arrows: false,
		dots: true,
		appendDots: ('.slider__dots'),
		waitForAnimate: false,
	})
	$('.burger, .overlay, .header a').on('click', function (e) {
		// e.preventDefault()
		$('.header').toggleClass('header--open')
		$('.overlay').toggleClass('overlay--show')
		$('.burger').toggleClass('burger--open')
	})
})

/*==================================== ANIMATION ====================================*/

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 10;
			let animItemPoint = window.innerHeight - (animItemHeight / animStart);

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
				animItem.classList.add('anim-item--active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anim-item--active');
				}
			}

			function offset(elem) {
				let rect = elem.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		}
	}
}

window.onload = function () {
	let loadings = document.querySelectorAll('.loading');

	for (let loading of loadings) {
		loading.classList.add('loaded');
	}
};