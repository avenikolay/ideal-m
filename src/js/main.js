$(document).ready(function(){
	
function road() {
	var $car = $('.simple__car'); // машинка
	var $area = $('.simple__road'); // область
	var $line = $('.simple__roadline--active'); // линия

	var $roadpoints = $('.simple__roadpoint'); // массив точек
	var $roadblocks = $('.simple__roadblock'); // массив блоков с текстом
	console.log();
	var areaWidth = $area.width(); // ширина полотна
	var slice = areaWidth/$roadpoints.length; // ширина отрезка

	var cursorPos = false; //начальная позиция курсора 

	$roadpoints.each(function(index){
		$(this).css('left', ((slice * index) + (slice/2) - $(this).width()/2));
		$(this).attr('data-left', ((slice * index) + (slice/2) - $(this).width()/2));
	}); // расставляем дорожные точки
	$line.css("width", slice/2); // значение дорожки по умолчанию
	$car.css("left", slice/2 - $car.width()/2); // позиция машинки по умолчанию

	function getOffsetX($el, e) {
		var offset = $($el).offset();
  		var relativeX = (e.pageX - offset.left);
  		return relativeX;
	}

	function moveGeometry() {
		$('.simple__road').mousemove(function(e){
			currentCursorPos = getOffsetX(this, e); 

			if((cursorPos != false) && (currentCursorPos < cursorPos)) {
				$car.addClass('simple__car--rotated');
				cursorPos = currentCursorPos;
			} else if((cursorPos != false) && (currentCursorPos > cursorPos)) {
				$car.removeClass('simple__car--rotated');
				cursorPos = currentCursorPos;
			} else {
				cursorPos = currentCursorPos;
			}

			var offsetX = getOffsetX(this, e) - $car.width()/2;
			// Restraints
			if(getOffsetX(this, e) > $area.width() - slice/2) {
				return;
			} else if(getOffsetX(this, e) < slice/2) {
				return;
			}

			$roadpoints.each(function(index){
				if (cursorPos >= ($(this).attr('data-left'))) {
					$(this).addClass('simple__roadpoint--active');
					$($roadblocks[index]).addClass('simple__roadblock--active');
				}
				if (cursorPos < ($(this).attr('data-left'))) {
					$(this).removeClass('simple__roadpoint--active');
					$($roadblocks[index]).removeClass('simple__roadblock--active');
				}
				if ((index == 6) && (cursorPos > (areaWidth - (slice - slice/3)))) {
					$(this).addClass('simple__roadpoint--active');
					$($roadblocks[6]).addClass('simple__roadblock--active');
				}
			});

			if (cursorPos > (areaWidth - (slice - slice/3))) {
				$line.css("width", areaWidth + 'px');
			} else {
				$line.css("width", getOffsetX(this, e) + 'px');
			}
			
			$car.css("left", offsetX);
			
		});
	}

	$area.on('mouseenter', moveGeometry);
}
road();

$(window).resize(function(){
	road();
});

});



