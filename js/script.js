$(function () {
	$('.slider__slider').slick({
		arrows: false,
		slidesToShow: 1,
		infinite: true,
		dragable: false,
		waitForAnimate: false,
		// responsive:
		// 	[
		// 		{
		// 			breakpoint: 1100,
		// 			settings: {
		// 				slidesToShow: 3,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 750,
		// 			settings: {
		// 				slidesToShow: 2,
		// 			}
		// 		},
		// 		{
		// 			breakpoint: 550,
		// 			settings: {
		// 				slidesToShow: 1,
		// 				dragable: true,
		// 			}
		// 		},
		// 	],
		arrows: false,
		dots: true,
		appendDots: ('.slider__dots'),
		waitForAnimate: false,
	})
	$('.burger, .overlay, .menu ').on('click', function (e) {
		e.preventDefault()
		$('.menu').toggleClass('menu--open')
		$('.overlay').toggleClass('overlay--show')
		$('.burger').toggleClass('burger--open')
	})
})