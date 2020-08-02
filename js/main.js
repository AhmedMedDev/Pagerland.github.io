/*global alert, console, $*/
$(window).ready(function () {
    'use strict';
    /*Globale*/
    $('a:not(head a)').on('click', function (e) {
        e.preventDefault();
    });
    
    
    // ***Header***
    
    // **NavBar**
    $('header .navbar li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    //*NavBar Links*
    
    //home link
    $('nav .nav-item:first-of-type').on('click', function () {
        $("body, html").animate({
            scrollTop : '0'
        }, 800);
    });
    
    //Services link
    $('nav .nav-item:nth-of-type(2)').on('click', function () {
        $("body, html").animate({
            scrollTop : $('.services').offset().top - 130
        }, 800);
    });
    
    //about us link
    $('nav .nav-item:nth-of-type(3)').on('click', function () {
        $("body, html").animate({
            scrollTop : $('.about').offset().top - 130
        }, 800);
    });
   
     //team  link
    $('nav .nav-item:nth-of-type(4)').on('click', function () {
        $("body, html").animate({
            scrollTop : $('.team').offset().top - 130
        }, 800);
    });
    
    //pricing  link
    $('nav .nav-item:nth-of-type(5)').on('click', function () {
        $("body, html").animate({
            scrollTop : $('.pricing').offset().top - 130
        }, 800);
    });
    
    //news  link
    $('nav .nav-item:nth-of-type(6)').on('click', function () {
        $("body, html").animate({
            scrollTop : $('.news').offset().top - 130
        }, 800);
    });
    
    //contact  link
    $('nav .nav-item:nth-of-type(7)').on('click', function () {
        $("body, html").animate({
            scrollTop : $('.contact').offset().top - 130
        }, 800);
    });
    
    // **Text content
    $('header .content .text').addClass('slide-up');
    if ($(window).width() >= 992) {
        $('header .content .welcome').addClass('slide-up');
        $('header .content .avatars-top').addClass('slide-down');
        if ($(window).scrollTop() >= $('header .content .avatars-bottom').offset().top -    ($(window).height() - 200)) {
            $('header .content .avatars-bottom').addClass('slide-up');
        }
    }
    if ($(window).width() <= 922) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('header .content .welcome').offset().top - ($(window).height() - 200)) {
                $('header .content .welcome').addClass('slide-up');
            }
            
            if ($(window).scrollTop() >= $('header .content .avatars-top').offset().top - ($(window).height() - 200)) {
                $('header .content .avatars-top').addClass('slide-down');
            }
            
            if ($(window).scrollTop() >= $('header .content .avatars-bottom').offset().top - ($(window).height() - 200)) {
                $('header .content .avatars-bottom').addClass('slide-up');
            }
        });
    }
    
    //Our Service
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.services h3').offset().top - ($(window).height() - 200)) {
            $('.services h3').addClass('bounce-in');
        }
    });
    if ($(window).width() >= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.services .service').offset().top - ($(window).height() - 200)) {
                $('.services .service').addClass('zoomInDown');
            }
            if ($(window).scrollTop() >= $('.services .demo-link').offset().top - ($(window).height() - 100)) {
                $('.services .demo-link').addClass('fade-in-left');
            }
        });
    }
    
    if ($(window).width() <= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.services .one').offset().top - ($(window).height() - 200)) {
                $('.services .one').addClass('slide-up');
            }
            if ($(window).scrollTop() >= $('.services .two').offset().top - ($(window).height() - 200)) {
                $('.services .two').addClass('slide-up');
            }
            if ($(window).scrollTop() >= $('.services .three').offset().top - ($(window).height() - 200)) {
                $('.services .three').addClass('slide-up');
            }
            
            if ($(window).scrollTop() >= $('.services .demo-link').offset().top - ($(window).height() - 100)) {
                $('.services .demo-link').addClass('fade-in-left');
            }
        });
    }
    
    //about us section
    if ($(window).width() >= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.about .image').offset().top - ($(window).height() - 200)) {
                $('.about .image').addClass('fadeIn');
            }
        });
    }
    if ($(window).width() <= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.about .image').offset().top - ($(window).height() - 200)) {
                $('.about .image').addClass('slide-up');
            }
        });
    }
    
    //About text
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.about .text h3').offset().top - ($(window).height() - 200)) {
            $('.about .text h3').addClass('bounce-in');
        }
        
        if ($(window).scrollTop() >= $('.about .text .lead').offset().top - ($(window).height() - 200)) {
            $('.about .text .lead').addClass('flip-x');
        }
        
        if ($(window).scrollTop() >= $('.about .text .link').offset().top - ($(window).height() - 200)) {
            $('.about .text .link').addClass('fade-in-right');
        }
    });
    
    //team Section
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.team h3').offset().top - ($(window).height() - 200)) {
            $('.team h3').addClass('bounce-in');
        }
        
        if ($(window).scrollTop() >= $('.team .lead').offset().top - ($(window).height() - 200)) {
            $('.team .lead').addClass('flip-x');
        }
        
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.team .one').offset().top - ($(window).height() - 200)) {
            $('.team .one').addClass("fadeIn");
        }
        if ($(window).scrollTop() >= $('.team .two').offset().top - ($(window).height() - 200)) {
            $('.team .two').addClass("fadeIn");
        }
        if ($(window).scrollTop() >= $('.team .three').offset().top - ($(window).height() - 200)) {
            $('.team .three').addClass("fadeIn");
        }
        if ($(window).scrollTop() >= $('.team .four').offset().top - ($(window).height() - 200)) {
            $('.team .four').addClass("fadeIn");
        }
        if ($(window).scrollTop() >= $('.team .five').offset().top - ($(window).height() - 200)) {
            $('.team .five').addClass("fadeIn");
        }
        if ($(window).scrollTop() >= $('.team .six').offset().top - ($(window).height() - 200)) {
            $('.team .six').addClass("fadeIn");
        }
        if ($(window).scrollTop() >= $('.team .seven').offset().top - ($(window).height() - 200)) {
            $('.team .seven').addClass("fadeIn");
        }
        if ($(window).scrollTop() >= $('.team .eight').offset().top - ($(window).height() - 200)) {
            $('.team .eight').addClass("fadeIn");
        }
        
        if ($(window).scrollTop() >= $('.team .link').offset().top - ($(window).height() - 200)) {
            $('.team .link').addClass("fade-in-left");
        }
    });
    
    //pricing
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.pricing h3').offset().top - ($(window).height() - 200)) {
            $('.pricing h3').addClass("bounce-in");
        }
    });
    
    if ($(window).width() >= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.pricing .plan').offset().top - ($(window).height() - 200)) {
                $('.pricing .plan').addClass('zoomInDown');
            }
        });
    }
    
    if ($(window).width() <= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.pricing .one').offset().top - ($(window).height() - 200)) {
                $('.pricing .one').addClass('slide-up');
            }
            if ($(window).scrollTop() >= $('.pricing .two').offset().top - ($(window).height() - 200)) {
                $('.pricing .two').addClass('slide-up');
            }
            if ($(window).scrollTop() >= $('.pricing .three').offset().top - ($(window).height() - 200)) {
                $('.pricing .three').addClass('slide-up');
            }
            
        });
    }
    
    //News Section
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.news h3').offset().top - ($(window).height() - 200)) {
            $('.news h3').addClass('bounce-in');
        }
        //big New
        if ($(window).scrollTop() >= $('.news .big .image').offset().top - ($(window).height() - 200)) {
            $('.news .big .image').addClass('fadeIn');
        }
        if ($(window).scrollTop() >= $('.news .big h6').offset().top - ($(window).height() - 200)) {
            $('.news .big h6').addClass('bounce-in');
        }
        if ($(window).scrollTop() >= $('.news .big .lead').offset().top - ($(window).height() - 200)) {
            $('.news .big .lead').addClass('flip-x');
        }
        if ($(window).scrollTop() >= $('.news .big h4').offset().top - ($(window).height() - 200)) {
            $('.news .big h4').addClass('bounce-in');
        }
        //End Big New
        
        //Small News
        
        //one
        if ($(window).scrollTop() >= $('.news .one .image').offset().top - ($(window).height() - 200)) {
            $('.news .one .image').addClass('fadeIn');
        }
        
        if ($(window).scrollTop() >= $('.news .one h6').offset().top - ($(window).height() - 200)) {
            $('.news .one h6').addClass('bounce-in');
        }
        
        //two
        if ($(window).scrollTop() >= $('.news .two .image').offset().top - ($(window).height() - 200)) {
            $('.news .two .image').addClass('fadeIn');
        }
        
        if ($(window).scrollTop() >= $('.news .two h6').offset().top - ($(window).height() - 200)) {
            $('.news .two h6').addClass('bounce-in');
        }

        //three
        if ($(window).scrollTop() >= $('.news .three .image').offset().top - ($(window).height() - 200)) {
            $('.news .three .image').addClass('fadeIn');
        }
        
        if ($(window).scrollTop() >= $('.news .three h6').offset().top - ($(window).height() - 200)) {
            $('.news .three h6').addClass('bounce-in');
        }

        
        //four
        if ($(window).scrollTop() >= $('.news .four .image').offset().top - ($(window).height() - 200)) {
            $('.news .four .image').addClass('fadeIn');
        }
        
        if ($(window).scrollTop() >= $('.news .four h6').offset().top - ($(window).height() - 200)) {
            $('.news .four h6').addClass('bounce-in');
        }
        
        //link
        if ($(window).scrollTop() >= $('.news .link').offset().top - ($(window).height() - 200)) {
            $('.news .link').addClass('fade-in-left');
        }
    });
    
    //Contact Section
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.contact .text h3').offset().top - ($(window).height() - 200)) {
            $('.contact .text h3').addClass('bounce-in');
        }
        if ($(window).scrollTop() >= $('.contact .text .details').offset().top - ($(window).height() - 200)) {
            $('.contact .text .details').addClass('flip-x');
        }
        
        if ($(window).scrollTop() >= $('.contact .text .socials').offset().top - ($(window).height() - 200)) {
            $('.contact .text .socials').addClass('fade-in-left');
        }
        
        //form
        if ($(window).scrollTop() >= $('.contact form').offset().top - ($(window).height() - 200)) {
            $('.contact form').addClass('fade-in-right');
        }
    });
    
});