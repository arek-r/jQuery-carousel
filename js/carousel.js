$(function() {
	
	var carouselList = $("#images ul");
	var pointer = $('.controls i');
	var currentSlide = 0;

	//setInterval(slideNext, 3000);

	function getFirstItem() {
		return carouselList.find('li:first');
	}

	function getLastItem() {
		return carouselList.find('li:last');
	}

	function moveFirstSlide() {
		getLastItem().after(getFirstItem());
		carouselList.css({'marginLeft':0});
	};

	function moveLastSlide() {
		getFirstItem().before(getLastItem());
		carouselList.css({marginLeft:-800});
	};

	function slideNext(speed = 500) {
		currentSlide = currentSlide === 4 ? 0 : currentSlide + 1;
		carouselList.animate({'marginLeft':-800}, speed, moveFirstSlide);
		moveIndicator(true);
	};

	function slidePrev(speed = 500) {
		currentSlide = currentSlide === 0 ? 4 : currentSlide - 1;
		moveLastSlide();
		carouselList.animate({'marginLeft':0}, speed);
		moveIndicator(false);
	};

	function moveIndicator(direction) {
		var active = $('.controls .fa-circle');
		var way = direction ? active.next() : active.prev();
		var which = direction ? 'first' : 'last';
		if (way.length == 0) {
			way = $('.controls i')[which]();
		}
		way.addClass('fa-circle').removeClass('fa-circle-o');
		active.removeClass('fa-circle').addClass('fa-circle-o');
	};
	
	$(".next").on('click', function() { slideNext() });
	$(".prev").on('click', function() { slidePrev() });

	//Zmiana slajdu po kliknięciu na odpowiedni wskaźnik

	pointer.on('click', function() {
		var clicker = parseInt($(this).attr('data-slide-to'));
		var step = clicker - currentSlide;
		if (step === 0) {
			return;
		} else if (step > 0) {
			for (var i = 0; i < step; i++) {
				slideNext(0);
			}
		} else {
			for (var i = 0; i < Math.abs(step); i++) {
				slidePrev(0);
			}
		}
	});

});