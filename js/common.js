$(document).ready(function() {

	// Помощь анимации
	new WOW().init();


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));



	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		padding: 0
	});


	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});


	//Плавный скролл до блока .div по клику на .scroll
	$(function(){

	$('a[data-target="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});


	});


	// Маска для формы телефона

    $(".mobile").mask("+7 (999) 999-99-99");


	//Карусель
	// class="owl-carousel owl-theme"
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel').owlCarousel({
		items: 1, //Количество слайдов
		dotsEach: false, //Точки под слайдером
		center: true,
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 50px
        nav: true, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                dotsEach: false
            },
            600:{
                dotsEach: false
            },
            1000:{
                dotsEach: false
            }
        }
    });

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/

    $("#form").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form").trigger("reset");
            $.fancybox.open($("#pop"));
            setTimeout(function () {
                $.fancybox.close();
            }, 1500);
        });
        return false;
    });

	// Скрыть - раскрыть блок

	$('.menuToggle').on('click', function() {

       $('.menu').slideToggle(300, function(){

            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }

       });

    });

	// Скрыть - раскрыть блок(множество)

	$(".closed-block").click(function () {
		if ($(this).hasClass("active")) {
		$(this).parents().children(".open-block").slideUp("slow");
		$(this).removeClass("active");
		}
		else {
		$(this).parents().children(".open-block").slideDown("slow");
		$(this).addClass("active");

		}
	});


// Меню для сайта

	  $('a').on('click', function(e){
	    e.preventDefault();
	  });

	  $('#ddmenu li').hover(function () {
	     clearTimeout($.data(this,'timer'));
	     $('.ul_none',this).stop(true,true).fadeIn(600);
	  }, function () {
	    $.data(this,'timer', setTimeout($.proxy(function() {
	      $('.ul_none',this).stop(true,true).fadeOut(600);
	    }, this), 100));
	  });

// переключение с красивым появлением

  	$('.num-link a').click(function(e) {
        e.preventDefault();
        $('.num-link .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.inf_lk').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });


});
