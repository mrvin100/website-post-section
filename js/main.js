//custom js file build by JeanDoe

/*-----------------post swiper--------------*/

let swiper = new Swiper('.post_container', {
	
	//Optional parameters
	cssMode: true,
	loop: true,
	
	//Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	//If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});


