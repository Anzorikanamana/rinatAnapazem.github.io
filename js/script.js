$('.menu_toggle').on('click',function() {
    $(this).toggleClass('active');
    $('.navigation').slideToggle(600, function(){
        if ($(this).css('display') === 'none'){
            $(this).removeClass('show');
            $(this).removeAttr('style');
        };
        if ($(this).css('display') === 'block'){
            $(this).removeAttr('style');
            $(this).addClass('show');
        };
    })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:10,
    nav:true,
    navText:["",""],
    dots: true,
    responsiveClass:true,
});
