$(document).ready(function(){	
	function hoverBorder() {
		$('.allbrands__item').each(function(){
			var w = $(this).width() + 16;
			$(this).find('.allbrands__border').removeAttr('style').css({'transform': 'scale(' + w + ')'});
		});
	}

	$('.allbrands__item').on('mouseover', function(){
		$(this).find('.allbrands__border').css({'opacity': '1', 'transition': 'opacity .6s'}); 
	})
	$('.allbrands__item').on('mouseout', function(){
		$(this).find('.allbrands__border').css({'opacity': '0',  'transition': 'opacity 1s'});
	});

	hoverBorder();

	$(window).resize(function() {
		hoverBorder();
	});


});

$(document).ready(function(){
	var maxHeight = 1;
	var list = $('.products__item');
	/* Товары одинаковой высоты */
	function equalHeight() {
		list.each(function(){
			if($(this).height() > maxHeight) {
				maxHeight = $(this).height();
			}
			$(this).height(maxHeight);
		});
	}
	function hoverBorder() {
		$('.products__item').each(function(){
			var w = $(this).width() + 16;
			var h = $(this).height() + 16;
			$(this).find('.products__border').removeAttr('style').css({'transform': 'scale(' + w +','+ h + ')', 'display': 'block'});
		});
	}
	function removeItemStyle () {
		$('.products__item').each(function(){
			$(this).removeAttr('style');
		});
	}
	$(window).resize(function() {
		removeItemStyle();
		equalHeight();
		hoverBorder();
	});

	$('.products__item').mouseover(function(e){
		$(this).find('.products__border').css({'opacity': '1', 'transition': 'opacity .6s'});
	}).mouseout(function() {
		$(this).find('.products__border').css({'opacity': '0',  'transition': 'opacity 1s'});
	});


  /* Табы и прочее... */



	$('.products__catitem').on('click', function(e){
		e.preventDefault();
		if ($(window).width() > 767) {
			var contentItems = $('.products__groupitem'),
				itemPosition = $(this).index();

			$(this).addClass('products__catitem--active').siblings().removeClass('products__catitem--active');
			$('.products__groupitem').eq(itemPosition).addClass('products__groupitem--active').siblings().removeClass('products__groupitem--active');
		}
		
		removeItemStyle();
		equalHeight();
		hoverBorder();
	});

	if ($(window).width() < 768) {
		$('.products__groupitem--active').find('.products__groupcontent').slideDown(0);
	}

	$('.products__grouptitle').on('click', function(e){
		e.preventDefault();
		if ($(window).width() < 768) {
			var groupItem = $(this).closest('.products__groupitem'),
				groupList = $(this).closest('.products__grouplist'),
				groupItems = groupList.find('.products__groupitem'),
				groupContent = groupItem.find('.products__groupcontent'),
				otherContent = groupList.find('.products__groupcontent'),
				duration = 300,

				catItems = $('.products__catItem'),
				itemPosition = $(this).index();


			if (!groupItem.hasClass('products__groupitem--active')) {
				groupItems.removeClass('products__groupitem--active');
				groupItem.addClass('products__groupitem--active');
				otherContent.stop(true, true).slideUp(duration);
				groupContent.stop(true, true).slideDown(duration);

				/*changeCatItemByGroupItem();*/
			} else {
				groupContent.stop(true, true).slideUp(duration);
				groupItem.stop(true, true).removeClass('products__groupitem--active');
			}
			
		}

	});

	$(window).resize(function() {
		$('.products__groupcontent').each(function(){
			$(this).removeAttr('style');
		});
		$('.products__catitem').eq(0).addClass('products__catitem--active').siblings().removeClass('products__catitem--active');
		$('.products__groupitem').eq(0).addClass('products__groupitem--active').siblings().removeClass('products__groupitem--active');

		if ($(window).width() > 767) {
			$('.products__groupcontent').removeAttr('style');
		}
		if ($(window).width() < 768) {
			$('.products__groupitem--active').find('.products__groupcontent').slideDown(0);
		}
	});

	// приводим все товары к одинаковой высоте
	removeItemStyle();
	equalHeight();
	hoverBorder();

});



$(document).ready(function(){
	if ($('#back-to-top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#back-to-top').addClass('show');
	            } else {
	                $('#back-to-top').removeClass('show');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}
});


$(document).ready(function(){

	var overlayOn = function()
	{
	$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
	},
	overlayOff = function()
	{
	$( '#imagelightbox-overlay' ).remove();
	};
	$('.partners__gallery-link').imageLightbox({
			onStart: 	 function() { overlayOn(); },
			onEnd:	 	 function() { overlayOff();}
		});
	$('.c-gallery__link').imageLightbox({
			onStart: 	 function() { overlayOn(); },
			onEnd:	 	 function() { overlayOff();}
		});
});

$(document).ready(function(){
	$('.simple__road-mob').slick({
  		autoplay: true,
  		autoplaySpeed: 1000,
  		arrows: false
  	});
});

/*$(document).ready(function(){
	function coverSlider() {
		var canvasHeight = $(window).height(),
			headerHeight = $('.header').outerHeight();
			//contactsHeight = $('.contacts').outerHeight();

		$('.slider').css({'height': canvasHeight - headerHeight});
	  
	  if($('.slider__img').length > 0) {
	  	$('.slider__item').css({'height': canvasHeight - headerHeight});
	  	$('.slider__item').each(function(){
		  	$(this).css({"background": "url(" + $(this).find('.slider__img').attr('src') + ")", "background-size": "cover", "background-position": "center"});
		  	$(this).find('.slider__img').remove();
		  	$(this).find('.slider__person').remove();
	  	});
	  }
	  
	}
	coverSlider();
	$(window).resize(function(){
		coverSlider();
	});
});*/




$(document).ready(function(){
  

  function advantagesToMobile() {
  	$('.advantages__item').removeClass('advantages__item--col').unwrap();
  	$('.advantages__container').addClass('advantages__container--mobile');

  	$('.advantages__list').slick({
  		autoplay: true,
  		autoplaySpeed: 1000,
  		arrows: false
  	});
  }

  function advantagesToDesktop(){
  		$('.advantages__list').slick('unslick');
  		$(".advantages__container").removeClass("advantages__container--mobile");

  		$(".advantages__container").append("<ul class='advantages__list'><div class='row'></div><div class='row'></div></ul>");
		obj = $(".advantages__item").clone().addClass("advantages__item--col");
		$(obj).each(function(k){
			if (k <= 3) {
				$(".advantages__container > .advantages__list > .row").eq(0).append(this);
			} else {
				$(".advantages__container > .advantages__list > .row").eq(1).append(this);
			}
		});
		$(".advantages__container > .advantages__list").eq(0).remove();
  }

  if($(window).width() < 768) {
  	advantagesToMobile();
  } 

	$(window).resize(function(){
		windWidth = $(this).width();
		if ($(window).width() > 767) {

			if($(".advantages__container--mobile").length > 0) {
				advantagesToDesktop();
			}
		} else if (windWidth < 768) {
			if (!$(".advantages__container--mobile").length) {
				advantagesToMobile();
			}
		}
  });

  
});
// приклеенное меню
$(document).ready(function(){
	function stickyMenu () {
		/*if($(window).width() > 991) {*/
			if($('.headhesive').length > 0) {
				$('.headhesive').remove();
			}

			var offset = $('.header').not('.headhesive').outerHeight(),
				header = new Headhesive('.header', {
					offset: offset
				});	
		/*}*/
	}
	stickyMenu ();
});


var slider = (function(){
	var flag = true,
		timerDuration = 3000,
		timer = 0;

	return {
		init: function () {
			var _this = this,
				timer = 0;

			//_this.createDots();
			_this.autoSwitch();

			$('.slider__button').on('click', function(e){
				e.preventDefault();
				var $this = $(this),
					slides = $this.closest('.slider').find('.slider__item'),
					activeSlide = slides.filter('.slider__item--active'),
					nextSlide = activeSlide.next(),
					prevSlide = activeSlide.prev(),
					firstSlide = slides.first(),
					lastSLide = slides.last();

				_this.clearTimer();

					if($this.hasClass('slider__button--next')) {
						if(nextSlide.length) {
							_this.moveSlide(nextSlide, 'forward');
						} else {
							_this.moveSlide(firstSlide, 'forward');
						}
						
					} else {
						if(prevSlide.length) {
							_this.moveSlide(prevSlide, 'backward');
						} else {
							_this.moveSlide(lastSLide, 'backward');
						}
					}
			});

			$('.slider__dot-item').on('click', function(e){
				e.preventDefault();

				var $this = $(this),
					dots = $this.closest('.slider__dots').find('.slider__dots-item'),
					activeDot = dots.filter('.slider__dots-item--active'),
					dot = $this,
					curDotNum = $this.index(),
					direction = (activeDot.index < curDotNum) ? 'forward' : 'backward',
					reqSlide = $this.closest('.slider').find('.slider__item').eq(curDotNum);

				if (!dot.hasClass('slider__dots-item--active')) {
					_this.clearTimer();
					_this.moveSlide(reqSlide, direction);
				}
				
			});


		},

		moveSlide: function(slide, direction) {
			var _this = this,
				container = slide.closest('.slider'),
				slides = container.find('.slider__item'),
				activeSlide = slides.filter('.slider__item--active'),
				slideWidth = slides.width(),
				duration = 500,
				reqCssPosition = 0,
				reqSlideStrafe = 0;

			if (flag) {
				flag = false;

				if(direction  === 'forward') {
					reqCssPosition = slideWidth;
					reqSlideStrafe = -slideWidth;
				} else if (direction  === 'backward') {
					reqCssPosition = -slideWidth;
					reqSlideStrafe = slideWidth;
				}

				slide.css('left', reqCssPosition).addClass('slider__item--inslide');
				var movableSlide = slides.filter('.slider__item--inslide');
				activeSlide.animate({left: reqSlideStrafe}, duration);
				movableSlide.animate ({left: 0}, duration, function(){
					var $this = $(this);
					slides.css('left', '0').removeClass('slider__item--active');
					$this.toggleClass('slider__item--inslide slider__item--active');

					_this.setActiveDot(container.find('.slider__dots'));

					flag = true;

				});
			}

		},

		createDots: function (){
			var _this = this,
				container = $('.slider');
				dotMarkup = "<li class='slider__dots-item'></li>";

			container.each(function(){
				var $this = $(this),
					slides = $this.find('.slider__item'),
					dotContainer = $this.find('.slider__dots');
				for (var i = 0; i < slides.length; i++) {
					dotContainer.append(dotMarkup);
				}

				_this.setActiveDot(dotContainer);
			})
		},

		setActiveDot: function(container) {
			var slides = container.closest('.slider').find('.slider__item');
				container
					.find('.slider__dots-item').eq(slides.filter('.slider__item').index())
					.addClass('slider__dots-item--active')
					.siblings()
					.removeClass('slider__dots-item--active');
 			
		},

		autoSwitch: function(){
			var _this = this;
			timer = setInterval(function(){ 
				var slides = $('.slider__list .slider__item'),
					activeSlide = slides.filter('.slider__item--active'),
					nextSlide = activeSlide.next(),
					firstSlide = slides.first();

				if(nextSlide.length) {
					_this.moveSlide(nextSlide, 'forward');
				} else {
					_this.moveSlide(firstSlide, 'forward');
				}

			}, timerDuration);
		},

		clearTimer: function(){
			if(timer) {
				clearInterval(timer);
				this.autoSwitch();
			}
		}
	}
}());

$(document).ready(function(){
	if($('.slider').length) {
		slider.init();
	}
});




$(document).ready(function(){		
	$('.about__tablink').on('click', function(e){
		e.preventDefault();
		if ($(window).width() > 767) {
			var item = $(this).closest('.about__tabitem'),
				contentItems = $('.about__item'),
				itemPosition = item.index();

			item.addClass('about__tabitem--active').siblings().removeClass('about__tabitem--active');
			
			contentItems.eq(itemPosition).addClass('about__item--active').siblings().removeClass('about__item--active');
		}
	});

	if ($(window).width() < 768) {
		$('.about__item--active').find('.about__tabcontent').slideDown(0);
	}

	$('.about__subtitle').on('click', function(e){
		e.preventDefault();
		if ($(window).width() < 768) {
			var item = $(this).closest('.about__item'),
				list = $(this).closest('.about__list'),
				items = list.find('.about__item'),
				content = item.find('.about__tabcontent'),
				otherContent = list.find('.about__tabcontent'),
				duration = 300;

			//items.removeClass('about__item--active');

			if (!item.hasClass('about__item--active')) {
				items.removeClass('about__item--active');
				item.addClass('about__item--active');
				otherContent.stop(true, true).slideUp(duration);
				content.stop(true, true).slideDown(duration);
			} else {
				content.stop(true, true).slideUp(duration);
				item.stop(true, true).removeClass('about__item--active');
			}
			
		}

	});

	$(window).resize(function() {
		if ($(window).width() > 767) {
			$('.about__tabcontent').removeAttr('style');
		}
	});
});
// мобильное меню
$(document).ready(function(){

	$('.nav__navicon').click(function(e){
		e.preventDefault();
		$(this).siblings('.nav__list').slideToggle();
	});

	$(window).resize(function() {
		if($(window).width() > 991) {
			$('.nav__list').each(function(){
				$(this).removeAttr('style');
			});
		}
	});
})


$(document).ready(function(){
	$(".brands__list").simplyScroll();
});

$(document).ready(function(){
	function gifAnim(){
		var container = $('.header').not('.headhesive'),
			//$firstItem = $('.nav__link').first(),
			firstItem = container.find('.nav__link').first(),
			firstItemPos = $(firstItem).offset(),
			firstbtncnvs = $('.firstbtncnvs'),

			// центр по оси Y первого элемента
			firstItemY = firstItemPos.top + firstItem.height()/2,
			// центр по оси X первого элемента
			firstItemX = firstItemPos.left + firstItem.width()/2;


		$(firstbtncnvs).css({'top': firstItemY - $(firstbtncnvs).height()/2, 'left': firstItemX - $(firstbtncnvs).width()/2});



		$(firstItem).mouseover(function(e){
			$(firstbtncnvs).removeClass('firstbtncnvs--none');
		}).mouseout(function() {
			$(firstbtncnvs).addClass('firstbtncnvs--none');
		});
	}

	gifAnim();
	$(window).resize(function() {
		gifAnim();
	});
});


$(document).ready(function(){
	
	function road() {
		var $car = $('.simple__car'); // машинка
		var $area = $('.simple__road'); // область
		var $line = $('.simple__roadline--active'); // линия

		var $roadpoints = $('.simple__roadpoint'); // массив точек
		var $roadblocks = $('.simple__roadblock'); // массив блоков с текстом
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

				var offsetX = getOffsetX(this, e) - ($car.width()+45)/2;
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






