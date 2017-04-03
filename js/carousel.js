$(function() {
	var carouselList = $('#images ul');

	setInterval(changeSlide, 3000);

	function changeSlide() {
		carouselList.animate({'marginLeft': -800} , 500, moveFirstSlide);	
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({'marginLeft': 0});
	}
});