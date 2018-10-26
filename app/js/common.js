$(function() {

	$('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2
            },
            400:{
                items:2
            },
            1200: {
                items: 3
            }
        }
    });

    var configFontAwesome = {
 custom: {
     families: ['fontawesome'],
     urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css']
     },
     fontactive: function () {
         $('.rateit-fa').rateit();
     }
 };
WebFont.load(configFontAwesome);

});
