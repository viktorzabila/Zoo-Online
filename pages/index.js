// adaptive menu

const isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackB	erry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/Iphone|iPad|iPod/i);
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

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function(e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

//menu burger
const iconMenu = document.querySelector('.header__icon');
// const menuBody = document.querySelector('.menu__body');
if (iconMenu){
	const menuBody = document.querySelector('.header__body');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}


// Prokrytka pri cklike
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock');
			iconMenu.classList.toggle('._active');
			menuBody.classList.toggle('._active');
		}

		window.scrollTo({
			top: gotoBlockValue,
			behavior: "smooth"
			});
		e.preventDefault();
		}
	}
}

// toggle

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
	if(this.checked) {
		trans()
		document.documentElement.setAttribute('data-theme', 'dark')
	} else {
		trans()
		document.documentElement.setAttribute('data-theme', 'light')
	}
})

let trans = () => {
	document.documentElement.classList.add('transition');
	window.setTimeout(() => {
		document.documentElement.classList.remove('transition')
	}, 1000)
}

// swiper

new Swiper('.image-slider__info', {

	pagination: {
	el: '.swiper-pagination',	
	type: 'fraction',
	},
});

new Swiper('.image-slider__animals', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
	el: '.swiper-pagination',	
	type: 'fraction',
	},

	autoHeight: true,
	slidesPerView: 4,
	spaceBetween: 20,

	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		640: {
			slidesPerVies: 2.5,
			spaceBetween: 20,
		},
		320: {
			slidesPerView: 1.25,
			spaceBetween: 16
		}
	},
});

new Swiper('.image-slider__avatar', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
	el: '.swiper-pagination',	
	type: 'fraction',
	},

	slidesPerView: 2,
	spaceBetween: 20,
});

new Swiper ('.image-slider-0', {
	pagination: {
		el: '.swiper-pagination',	
		type: 'fraction',
		},
})

/* map */

function initMap() {
	// Map options
	let options = {
		zoom: 2,
		center:{lat:-4.322447, lng:15.307045}
	}

	// New  map
	let map = new 
	google.maps.Map(document.getElementById('map'), options);

	// Add marker
	let marker = new google.maps.Marker({	
		position: {lat:-4.322447, lng:15.307045},
		map: map,
		// icon: '../assets/icons/map-gorila.svg'
	});

	let marker1 = new google.maps.Marker({	
		position: {lat:27.994402, lng:-81.760254},
		map: map,
		// icon: '../assets/icons/map-crocodile.svg'
	});

	let marker2 = new google.maps.Marker({	
		position: {lat:31.000000, lng:-100.000000},
		map: map,
		icon: '../assets/icons/map-eagle.svg'
	});

	let infoWindow = new google.maps.InfoWindow({
		content: 'Region: on an island near Los Angeles; Population:  more than 270 pairs in 2013'
	});

	marker2.addListener('click', function(){
		infoWindow.open(map, marker2);
	})

	let marker3 = new google.maps.Marker({	
		position: {lat: 39.916668, lng:116.383331},
		map: map,
		// icon: '../assets/icons/map-panda.svg'
	});
}