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

    $( '#my-slider' ).sliderPro({
        width: 844,
        height: 630,
        arrows: true,
        buttons: false,
        waitForLayers: true,
        fade: false,
        autoplay: true,
        orientation: 'vertical',
        thumbnailsPosition: 'right',
        thumbnailWidth: 200,
        thumbnailHeight: 210,
        thumbnailPointer: true,
        autoScaleLayers: false,
        breakpoints: {
        1200: {
            thumbnailsPosition: 'bottom',
            orientation: 'horizontal',
            thumbnailWidth: 270,
            thumbnailHeight: 140
        },
        992: {
            thumbnailsPosition: 'bottom',
            orientation: 'horizontal',
            thumbnailWidth: 270,
            thumbnailHeight: 140
        },
        768: {
            thumbnailsPosition: 'bottom',
            orientation: 'horizontal',
            thumbnailWidth: 200,
            thumbnailHeight: 120
        },
        576: {
            thumbnailsPosition: 'bottom',
            orientation: 'horizontal',
            thumbnailWidth: 180,
            thumbnailHeight: 110
        }
    }
    });

    $(".bun").click(function() {
        $('html, body').animate({
            scrollTop: $(".bun").offset().top
        }, 1000);
    });

    $(".nav-welcome").click(function() {
        $('html, body').animate({
            scrollTop: $("#cakes").offset().top
        }, 1000);
    });

    $(".nav-menu").click(function() {
        $('html, body').animate({
            scrollTop: $("#pancakes").offset().top
        }, 1000);
    });

    $(".nav-rezerv").click(function() {
        $('html, body').animate({
            scrollTop: $("#breakfast").offset().top
        }, 1000);
    });

    $(".nav-news").click(function() {
        $('html, body').animate({
            scrollTop: $("#sandwich").offset().top
        }, 1000);
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
