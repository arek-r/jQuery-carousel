$(function() {
	
	var carouselList = $("#images ul");

	setInterval(slideNext, 3000);

	function getFirstItem() {
		return carouselList.find('li:first');
	}

	function getLastItem() {
		return carouselList.find('li:last');
	}

	function moveFirstSlide () {
		getLastItem().after(getFirstItem());
		carouselList.css({marginLeft:0});
	};

	function moveLastSlide () {
		getFirstItem().before(getLastItem());
		carouselList.css({marginLeft:-800});
	};

	function slideNext() {
		carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);
		moveIndicator(true);
	};

	function slidePrev() {
		moveLastSlide();
		carouselList.animate({'marginLeft':0}, 500);
		moveIndicator(false);
	};

	function moveIndicator(direction) {

		deleteClass();

		var active = $('.controls .fa-circle');
		var way = direction ? active.next() : active.prev();
		var which = direction ? 'first' : 'last';

		if (way.length == 0) {
			way = $('.controls i')[which]();
		}

		way.addClass('fa-circle').removeClass('fa-circle-o');
		active.removeClass('fa-circle').addClass('fa-circle-o');
	};

	$(".next").on('click', slideNext);
	$(".prev").on('click', slidePrev);

});