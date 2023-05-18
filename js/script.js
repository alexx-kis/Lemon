$(function () {
	$('.slider__slider').slick({
		arrows: false,
		slidesToShow: 1,
		infinite: true,
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