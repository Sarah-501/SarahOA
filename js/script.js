$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-button').addClass("show");
        }else{
            $('.scroll-up-button').removeClass("show");
        }
    });

    /*______ SLIDE UP SCRIPT ______*/
    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop:0});
    });

    /*______ MENU MOBILE ______*/
    $(".menu-button").click(function(){
         $('.menu').toggleClass("active");
         $('.menu-button i').toggleClass("active");
    })

    /*_____ Script animation ______*/
    
    var typed = new Typed(".script-annim",{
        strings: ["Web developer", "Designer" , "freelancer"],
        typeSpeed : 100,
        backSpeed : 60,
        loop: true
    });
    var typed = new Typed(".script-annim-2",{
        strings: ["Web developer", "Designer" , "freelancer"],
        typeSpeed : 100,
        backSpeed : 60,
        loop: true
    });

    /*______ Owl carousel ______*/
    $('.team-content').owlCarousel({
        margin:20,
        loop : true,
        autoplayTimeOut : 2000,
        autoolayOverPause : true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });

});