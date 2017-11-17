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

	Vue.component('attach', {
		template: '<div class="attach">' +
			'<img src="images/icons/file.svg" width="17" height="16" class="attach__icon">' +
			'<div class="attach__name">{{ value }}</div>' +
			'<div class="attach__button" tabindex="0" @click.prevent="attachFile" @keyup.space.prevent="attachFile">Обзор</div>' +
			'<input hidden type="file" @change="changeFile">' +
			'</div>',
		data: function() {
			let noFile = "Файл не выбран"

			return {
				noFile: noFile,
				value: noFile
			};
		},
		methods: {
			changeFile: function(e) {
				this.value = (e.target.files.length) ? e.target.files[0].name : this.noFile;
			},
			attachFile: function(e) {
				e.target.nextSibling.click();
			}
		}
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