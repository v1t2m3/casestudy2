var owl = $('.authors_carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:20,
    autoWidth:true,
    smartSpeed: 2000,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        576:{
            items:2,
            nav:false,
            margin: 20,
        },
        780:{
            items:2,
            nav:false,
        },
        1400:{
            items:3,
            nav:true,
        },
        1900:{
            items:4,
            nav:true,
        }
    }
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
/////////////////////////////////////////////////////
var owl2 = $('.winers_carousel');
owl2.owlCarousel({
    items:1,
    loop:true,
    smartSpeed: 2000,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    autoWidth:true,
    nav: false,
    dots:false,
    
});
$('.play').on('click',function(){
    owl2.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl2.trigger('stop.owl.autoplay')
})