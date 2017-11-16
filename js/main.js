document.addEventListener('DOMContentLoaded', function() {
	Vue.component('swiper-wrapper', {
	  template: '<div><div class="swiper-container">' +
	  	'<div class="swiper-wrapper"><slot></slot></div>'+
	  	'</div>' +	  	
	  	'<div class="swiper-pagination"></div>' +
	  	'<button class="swiper-prev"><img src="images/icons/slider-arrow-prev.svg" width="10" heihgt="8"></button>' +
	  	'<button class="swiper-next"><img src="images/icons/slider-arrow-next.svg" width="10" heihgt="8"></button></div>' ,
	  mounted: function () {
			var swiper = new Swiper('.swiper-container', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					prevEl: '.swiper-prev',
					nextEl: '.swiper-next'
				}
			});
	  }
	});

	Vue.component('hidden', {
		template: '<div><slot></slot></div>'
	})
	
	let vm = new Vue({
		el: '.app',
		components: {
			'vueSlider': window[ 'vue-slider-component' ],
		},
		data: {
			menu: {
				open: false
			},
			value: 5
		}
	});

	AOS.init({
		offset: 200,
		once: true
	});

	var scroll = new SmoothScroll('a[data-scroll]')
});