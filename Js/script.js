$(function(){
    let nav = $('.nav-bar');
    let navTop = nav.offset().top;
    // alert (navTop);

    $(window).scroll(function(){
        let scrTop = $(window).scrollTop();
        // console.log(scrTop);
        if(navTop < scrTop){
            nav.addClass('fixed-menu');
        }else{
            nav.removeClass('fixed-menu');
        }
    });

    //Team

    // $('.team').hover(function(){
    //     $('.bio',this).slideToggle();
    // });

    // User Feadback Slick slider

    $('.user-cnt-data').slick({
        infinite: true,
        arrows: false,
        fade: false,
        asNavFor: '.user-cnt-img'
    });

    $('.user-cnt-img').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        asNavFor: '.user-cnt-data',
        dots: true
    });


    var mixer = mixitup('.mixitup',{
        load:{
            filter: '.phone'
        }
    });

    $('#cascade-slider').cascadeSlider({
        itemClass: 'cascade-slider_item',
      });
});