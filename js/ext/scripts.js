
jQuery(function($) {

    $(document).ready(function() {
        
        "use strict";
        
        FirstLoad();	
        PageAnim();
        HeroHeight();		
        HeroParallax();
        OpenHeader();
        PostsImages();	
        AjaxExpander();
        PagePillingSlider();
        ClassicSlider();
        Carousel();
        CarouselTeamHeight();
        MagnificPopup();
          BackToTop();	
        MasonryPortfolio();
        InitContactMap();
        MagnificPopup();
        Shortcodes();
        
    });
    
    
    $(window).on( 'resize', function () {
        CarouselTeamHeight();
        HeroHeight();	
    });
    
    
    
    /*--------------------------------------------------
    Function Firs tLoad
    ---------------------------------------------------*/	
    
    
        function FirstLoad() {
            
            
            $('.open-fullscreen').on('click', function() {	
                screenfull.toggle($('html')[0]);
            });
            
                      
            setTimeout( function(){
                $("header, .hamburger, footer, #sidebar").removeClass("hidden");  
            } , 500 );		
            
            $('#hero').waitForImages({
                finished: function() {
                    setTimeout( function(){
                        $("#hero").removeClass("hidden");  
                    } , 1000 );
                },
            waitForAll: true
            });
            
            $('.pagepillingslider, .pagepillingsliderhero').waitForImages({
                finished: function() {
                    setTimeout( function(){
                        $("#pp-nav").removeClass("disabled");
                    } , 1200 );
                    setTimeout( function(){
                        $(".pagepillingslider, .pagepillingsliderhero").removeClass("hidden"); 
                          
                    } , 1500 );
                },
            waitForAll: true
            });
            
            $('.showcase-images li:first-child').waitForImages({
                finished: function() {
                    setTimeout( function(){
                        $("#showcase").removeClass("hidden");  
                    } , 1000 );
                }
            });
            
            $('#main').waitForImages({
                finished: function() {				
                    setTimeout( function(){
                        $("#main-content").removeClass("hidden");  
                    } , 1500 );
                },
            waitForAll: true
            });
            
            $('nav li.has-sub>a').on('click', function(){
                $(this).removeAttr('href');
                var element = $(this).parent('li');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp();
                }
                else {
                    element.addClass('open');
                    element.children('ul').slideDown();
                    element.siblings('li').children('ul').slideUp();
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp();
                }
            });		
            
        }// End First Load
    
    
    
    /*--------------------------------------------------
    Function Page Animation
    ---------------------------------------------------*/	
    
    
        function PageAnim() {
            
            var in_duration = 1;
            var loading_parent_element = 'body';
            if( typeof ClapatBarioThemeOptions != 'undefined' ){
                
                if( ClapatBarioThemeOptions.enable_preloader == true ){
                    
                    in_duration = 1500;
                    loading_parent_element = 'html';
                }
            }
            
            $(".animsition").animsition({
                inClass: 'fade-in',
                outClass: 'fade-out',
                inDuration: in_duration,
                outDuration: 400,
                linkElement: '.animation-link',
                // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
                loading: true,
                loadingParentElement: loading_parent_element, //animsition wrapper element
                loadingClass: 'animsition-loading',
                loadingInner: '', // e.g '<img src="loading.svg" />'
                timeout: true,
                timeoutCountdown: 5000,
                onLoadEvent: true,
                browser: [ 'animation-duration', '-webkit-animation-duration'],
                // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
                // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
                overlay : false,
                overlayClass : 'animsition-overlay-slide',
                overlayParentElement : 'body',
                transition: function(url){ window.location.href = url; }
              });
        
            
        }// End Page Animation
    
    
        
    /*--------------------------------------------------
    Function Hero Height
    ---------------------------------------------------*/	
        
        function HeroHeight() {
            
            var heights = window.innerHeight;
            
            if( $('#hero').length > 0 ){
            
                if ($('#hero').hasClass('hero-small')) {
                    var heights = window.innerHeight;
                    document.getElementById("hero").style.height = heights * 0.65 + "px";
                } else if ($('#hero').hasClass('hero-large')) {
                    var heights = window.innerHeight;
                    document.getElementById("hero").style.height = heights * 0.85 + "px";
                }  else  {			
                    var heights = window.innerHeight;
                    document.getElementById("hero").style.height = heights + "px";
                }
            
            }
            
            
            $('#showcase').css({'height': heights + 'px'});
            
        }//End Hero Height
        
            
        
        
        
    /*--------------------------------------------------
    Function HeroParallax
    ---------------------------------------------------*/	
        
        function HeroParallax() {
        
            var page_title = $('body');
                var block_intro = $('#hero-styles');
                if( block_intro.length > 0 ) var block_intro_top = block_intro.offset().top;	
            $( window ).scroll(function() {
                var current_top = $(document).scrollTop(); 
                var hero_height = $('#hero-styles').height();
                if( $('#hero-styles').hasClass('parallax-hero')){			  
                    block_intro.css('transform', 'translate3d(0, ' + current_top * 0.5 + 'px, 0)');		
                }
                if( $('#hero-styles').hasClass('static-hero')){			  
                    block_intro.css('transform', 'translate3d(0, ' + current_top * 1 + 'px, 0)');			
                }
                if( $('#hero-styles').hasClass('opacity-hero')){				 
                    block_intro.css('opacity', (1 - current_top / hero_height * 1.2));
                }
            });
        
        }//End HeroParallax
        
        
        
    /*--------------------------------------------------
    Function Open Header
    ---------------------------------------------------*/
        
        function OpenHeader() {
            
            
            
            $(".hamburger, #black-fade").on('click', function() {	
                $(".hamburger ").toggleClass("is-active");
                $("header").toggleClass("is-active");
                $("#menu-overlay").toggleClass("is-active");
                $("#black-fade").toggleClass("is-active");
                $("#header-title-div").toggleClass("is-active");
                $('#black-fade').removeClass("hover");
                $("#project_close").toggleClass("disabled");	
            });
            
            $( ".header_menu" ).mouseleave(function() {	
                $(".hamburger ").removeClass("is-active");
                $("header").removeClass("is-active");
                $("#menu-overlay").removeClass("is-active");
                $("#header-title-div").removeClass("is-active");
                $("#black-fade").removeClass("is-active");
                $("#project_close").removeClass("disabled");			
            })
            
            
            $(".hamburger").on({
                 mouseenter: function () {	 
                     $('#black-fade').addClass("hover");	
                 },
                 mouseleave: function () {
                     $('#black-fade').removeClass("hover");		
                 }
            });
            
            var filters_open_caption 	= "Filters";
            var filters_close_caption 	= "Close";
            var share_open_caption 		= "Share";
            var share_close_caption 	= "Close";
            var search_open_caption 	= "Search";
            var search_close_caption 	= "Close";
            if( typeof ClapatSecondaryMenuOptions != 'undefined' ){
            
                share_open_caption 	= ClapatSecondaryMenuOptions.share_open_caption;
                share_close_caption = ClapatSecondaryMenuOptions.share_close_caption;
            }
            $(".page-share, #close-share").on('click', function() {	
                $("#share-overlay").toggleClass("is-active");
                $("header").toggleClass("show-share");
                
                if($(".page-share").text()== share_open_caption)
                {
                    $(".page-share").text(share_close_caption);
                } else {
                    $(".page-share").text(share_open_caption);
                }
            });
            
            if( typeof ClapatSecondaryMenuOptions != 'undefined' ){
                
                search_open_caption  = ClapatSecondaryMenuOptions.search_open_caption;
                search_close_caption = ClapatSecondaryMenuOptions.search_close_caption;
            }
            $(".page-search, #close-search").on('click', function() {	
                $("#search-overlay").toggleClass("is-active");
                
                if($(".page-search").text() == search_open_caption)
                {
                    $(".page-search").text( search_close_caption );
                } else {
                    $(".page-search").text( search_open_caption );
                }
            });
            
            if( typeof ClapatSecondaryMenuOptions != 'undefined' ){
                
                filters_open_caption  = ClapatSecondaryMenuOptions.filters_open_caption;
                filters_close_caption = ClapatSecondaryMenuOptions.filters_close_caption;
            }
            $(".show-filters").on('click', function() {	
                if ($("#filters").hasClass('is-active')){
                    $("#filters").toggleClass("is-active");	
                } else {
                    $('html, body').animate({scrollTop : 0},500);
                    setTimeout(function(){
                        $("#filters").toggleClass("is-active");
                    },( 500 ));
                }	
                
                if($(".show-filters #header-title").text() == filters_open_caption)
                {
                    $(".show-filters #header-title").text( filters_close_caption );
                } else {
                    $(".show-filters #header-title").text( filters_open_caption );
                }
            });
                
                
        }//End Open Header	
        
            
        
    /*--------------------------------------------------
    Function Posts Images
    ---------------------------------------------------*/
        
        function PostsImages() {		
        
            $('article:nth-child(1)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(1)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(2)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(2)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(3)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(3)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(4)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(4)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(5)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(5)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(6)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(6)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(7)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(7)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(8)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(8)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(9)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(9)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(10)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(10)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(11)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(11)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(12)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(12)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(13)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(13)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(14)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(14)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(15)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(15)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(16)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(16)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(17)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(17)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(18)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(18)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(19)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(19)').addClass("show-show");
                $(this).addClass('active');
            })
            $('article:nth-child(20)').on('mouseenter', function() {
                $('article.active').removeClass('active');
                $('.post-gallery-images li.show-show').removeClass("show-show");
                $('.post-gallery-images li:nth-child(20)').addClass("show-show");
                $(this).addClass('active');
            })
        
            $('article:nth-child(1)').trigger('mouseenter')			
                
        }//End PostsImages
        
        
        
    /*--------------------------------------------------
    Function AjaxExpander
    ---------------------------------------------------*/
        
        function AjaxExpander() {
            
            if( $('.ajax-load').length > 0 ){ 	    
            
                $('.pagepillingslider .section-link').on('click', function() {	
                                        
                    $.fn.pagepiling.setAllowScrolling(false);
                    
                    $('.active .open-fullscreen').addClass('disabled');
                    
                    
                            
                    var myUrl = $(this).find('.open-project').attr("href") + " .item-data"; 			
                    
                    
                    
                    
                    
                        setTimeout(function(){	
                        $('#loader-line-box').addClass('is-open');
                        },( 200 ));				
                            setTimeout(function(){					
                                $("#project-page-data").load(myUrl,function(e){						
                                                        
                                $('#project-page-holder').waitForImages({
                                    finished: function() {								
                                            
                                        ///Init scripts here
                                        ClassicSlider();
                                        Carousel();
                                        Shortcodes();
                                        
                                        setTimeout(function(){  
                                            
                                            $('#project-page-data').addClass('is-open');
                                            setTimeout(function(){ 
                                                $('#project-page-holder, #project-page-data').height($('.project-page').height());
                                            },( 500 ));
                                            
                                            setTimeout(function(){
                                                $('#loader-line-box').removeClass('is-open');
                                                $('#pp-nav').addClass('disabled');
                                                $('.caption-content').addClass('disabled');
                                                $('.section .overlay').addClass('disabled');
                                                $('#header-title-div').addClass('is-active');
                                                setTimeout(function(){
                                                $("#project_close").removeClass("hide");
                                                },( 600 ));
                                                setTimeout(function(){
                                                    $('html, body').animate({scrollTop : 350},800);
                                                },( 400 ));	
                                            },( 300 ));
                                            
                                        },( 500 ));							
                                    },
                                        waitForAll: true
                                    });
                                    
                                                            
                                });
                                                    
                            },( 500 ));
                            
                            
                            
                                
                    
                    
                    
                    
                    
                    return false;
                              
                });
                    
                $(document).on('click', '#project_close', function(event) {
                    $('html, body').animate({scrollTop : 0},1000);
                    $.fn.pagepiling.setAllowScrolling(true);
                    $("#project_close").addClass("hide");
                    setTimeout(function(){$('#header-title-div').removeClass('is-active');},( 500 ));
                    setTimeout(function(){$('#pp-nav').removeClass('disabled');},( 800 ));
                    setTimeout(function(){$('.section .overlay').removeClass('disabled');},( 400 ));
                    setTimeout(function(){$('.caption-content').removeClass('disabled');},( 1100 ));
                    setTimeout(function(){$('.active .open-fullscreen').removeClass('disabled');},( 1100 ));				
                    setTimeout(function(){$('#project-page-data').removeClass('is-open');},( 1100 ));							
                    setTimeout(function(){$('#project-page-holder, #project-page-data').height('0');},( 1100 ));
                    setTimeout(function(){$(".project-page").remove();},( 1100 ));
                    return false;				
                  });	
                
                
                    var lastScroll = 0;
                    
                    $(window).scroll(function(){
                    var scroll = $(window).scrollTop();
                    if (scroll > lastScroll) {
                    $("#project_close").removeClass("show");
                    } else if (scroll < lastScroll) {
                    $("#project_close").addClass("show");
                    }
                    lastScroll = scroll;
                    });
    
            }
                
        }//End AjaxExpander
        
        
        
    /*--------------------------------------------------
    Function PagePillingSlider
    ---------------------------------------------------*/
        
        function PagePillingSlider() {
            
            if( $('.pagepillingslider').length > 0 ){		
        
                $('.pagepillingslider').pagepiling({
                    verticalCentered:true,
                    css3:true,
                    navigation: {
                        'textColor': '#000',
                        'position': 'right',
                    },
                    direction: 'vertical',
                    onLeave: function(index, nextIndex, direction){
                        
                        
                        if( $('#bgvid').length > 0 ){		
                            var video = document.getElementById("bgvid");
                            if ($(".active").hasClass("video")) {
                                video.play();
                            } else {
                                video.pause();
                            }
                        }
                        
                        
                        $(window).scroll(function() {    
                            var scroll = $(window).scrollTop();
                        
                            if (scroll >= $('#hero').height() - 100) {
                                video.pause();
                            } else {
                                video.play();
                            }
                        });
                        
                        
                        $(".pp-scrollable").scrollTop(0);
                        
                        
                        if(direction =='down'){					
                            setTimeout(function() {	
                                $('.section').eq(index -1).find('.section-white').removeClass('full-top');
                                $('.section').eq(index -1).find('.section-white').removeClass('first');
                                $('.section').eq(index -1).find('.section-white').removeClass('full-bottom');
                                $('.section').eq(nextIndex -1).find('.section-white').addClass('full-top');	
                            }, 500);
                            
                            if ($(".active").hasClass("light-content")) {
                                setTimeout(function() {	
                                    $('#pp-nav').addClass("light-content");
                                }, 280);
                            } else {
                                setTimeout(function() {	
                                    $('#pp-nav').removeClass("light-content");
                                }, 280);
                            }
                            
                            $('#pp-nav').addClass("disabled");
                            setTimeout(function() {	
                                $('#pp-nav').removeClass("disabled");
                            }, 680);
                            
                            $('.section').eq(index -1).find('.clapat-caption').removeClass('animated');
                            $('.section').eq(index -1).find('.clapat-caption').addClass('animated-top');
                            $('.section').eq(nextIndex -1).find('.clapat-caption').addClass('animated');
                            
                            
                        }
                        else if(direction == 'up'){
                            setTimeout(function() {	
                                $('.section').eq(index -1).find('.section-white').removeClass('full-bottom');
                                $('.section').eq(index -1).find('.section-white').removeClass('full-top');
                                $('.section').eq(nextIndex -1).find('.section-white').addClass('full-bottom');	
                            }, 500);
                            
                            if ($(".active").hasClass("light-content")) {
                                setTimeout(function() {	
                                    $('#pp-nav').addClass("light-content");
                                }, 280);
                            } else {
                                setTimeout(function() {	
                                    $('#pp-nav').removeClass("light-content");
                                }, 280);
                            }
                            
                            $('#pp-nav').addClass("disabled");
                            setTimeout(function() {	
                                $('#pp-nav').removeClass("disabled");
                            }, 680);
                            
                            $('.section').eq(index -1).find('.clapat-caption').removeClass('animated');
                            $('.section').eq(index -1).find('.clapat-caption').removeClass('animated-top');
                            $('.section').eq(nextIndex -1).find('.clapat-caption').addClass('animated');						
                        }
                            
                                
                        
                    }
                    
                });
        
                $('.icon-scroll').on('click', function() {	
                    $.fn.pagepiling.moveSectionDown();
                });	
                
                
                
                if ($(".active").hasClass("light-content")) {
                    $('header').addClass("negative");
                    $('#pp-nav').addClass("light-content");
                }
                
                if( $('#bgvid').length > 0 ){		
                    var video = document.getElementById("bgvid");
                    if ($(".active").hasClass("video")) {
                        video.play();
                    }
                }
                
                //$('#pp-nav li a').click(function(){
                    //return false
                //});
                
                
                
                
                var onMobile = false;
            
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }
        
                if( ( onMobile === false ) ) {
        
                    $(".responsive-section-image").remove();
            
                } else {
                
                    $(".section-image").remove();
                    document.getElementById("bgvid").remove();
                    $('body').addClass("top-header");
                    
                }
                
            
            }
            
            
            
            
            
                
                
        }//End PagePillingSlider			
        
    
    
    
        
        
    /*--------------------------------------------------
    Function Classic Slider
    ---------------------------------------------------*/	
            
        function ClassicSlider() {
            
            if( $('.classic-slider').length > 0 ){	
                $('.classic-slider').flexslider({
                    animation: "slide",
                    direction: "horizontal",
                    animationSpeed: 1000,
                    animationLoop: true,
                    smoothHeight: true,
                    controlNav: false,
                    slideshow: false,						
                });
            }
            
        }//End ClassicSlider
        
        
        
    /*--------------------------------------------------
    Function Carousel
    ---------------------------------------------------*/	
        
        function Carousel() {
            
            if( $('.clients-carousel').length > 0 ){
            
                $(".clients-carousel").owlCarousel({	
                    loop:false,
                    margin:120,
                    autoplay: true,
                    autoplayTimeout: 7000,
                    dots:false,
                    responsive:{
                        0:{
                            items:2
                        },
                        600:{
                            items:2
                        },            
                        960:{
                            items:4
                        },
                        1200:{
                            items:5
                        },
                        1500:{
                            items:6
                        }
                    }
                    
                });
              
            }
            
            
            if( $('.text-carousel').length > 0 ){
            
                $(".text-carousel").owlCarousel({	
                    loop:true,
                    dots:true,
                    dotsEach: 1,
                    items:1,
                });
              
            }
            
            
            if( $('.team-carousel').length > 0 ){
                
                $('.team-member-carousel:nth-child(1)').on('mouseenter', function() {
                    $('.team-member-carousel.active').removeClass('active');
                    $('.team-images li.show-show').removeClass("show-show");
                    $('.team-images li:nth-child(1)').addClass("show-show");
                    $(this).addClass('active');
                })
                $('.team-member-carousel:nth-child(2)').on('mouseenter', function() {
                    $('.team-member-carousel.active').removeClass('active');
                    $('.team-images li.show-show').removeClass("show-show");
                    $('.team-images li:nth-child(2)').addClass("show-show");
                    $(this).addClass('active');
                })
                $('.team-member-carousel:nth-child(3)').on('mouseenter', function() {
                    $('.team-member-carousel.active').removeClass('active');
                    $('.team-images li.show-show').removeClass("show-show");
                    $('.team-images li:nth-child(3)').addClass("show-show");
                    $(this).addClass('active');
                })
                $('.team-member-carousel:nth-child(4)').on('mouseenter', function() {
                    $('.team-member-carousel.active').removeClass('active');
                    $('.team-images li.show-show').removeClass("show-show");
                    $('.team-images li:nth-child(4)').addClass("show-show");
                    $(this).addClass('active');
                })
                $('.team-member-carousel:nth-child(5)').on('mouseenter', function() {
                    $('.team-member-carousel.active').removeClass('active');
                    $('.team-images li.show-show').removeClass("show-show");
                    $('.team-images li:nth-child(5)').addClass("show-show");
                    $(this).addClass('active');
                })
                $('.team-member-carousel:nth-child(6)').on('mouseenter', function() {
                    $('.team-member-carousel.active').removeClass('active');
                    $('.team-images li.show-show').removeClass("show-show");
                    $('.team-images li:nth-child(6)').addClass("show-show");
                    $(this).addClass('active');
                })
                $('.team-member-carousel:nth-child(7)').on('mouseenter', function() {
                    $('.team-member-carousel.active').removeClass('active');
                    $('.team-images li.show-show').removeClass("show-show");
                    $('.team-images li:nth-child(7)').addClass("show-show");
                    $(this).addClass('active');
                })
                $('.team-member-carousel:nth-child(8)').on('mouseenter', function() {
                    $('.team-member-carousel.active').removeClass('active');
                    $('.team-images li.show-show').removeClass("show-show");
                    $('.team-images li:nth-child(8)').addClass("show-show");
                    $(this).addClass('active');
                })
            
                $('.team-member-carousel:nth-child(1)').trigger('mouseenter')	
            
                $(".team-carousel").owlCarousel({	
                    loop:false,
                    dots:false,
                    autoplay: false,
                    autoplayTimeout: 6000,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },            
                        960:{
                            items:2
                        },
                        1200:{
                            items:3
                        }
                    }
                    
                });
              
            }
            
        }//End Carousel	
        
        
    /*--------------------------------------------------
    Function CarouselTeamHeight
    ---------------------------------------------------*/	
        
        function CarouselTeamHeight() {
            
            if( $('.team-carousel').length > 0 ){	
            
                var teamheight = window.innerHeight;
                $('.team-member-carousel').css({'height': teamheight - 40 + "px"});
                $('.team-shortcode').css({'height': teamheight - 40 + "px"});
        
            }
            
        }//End CarouselTeamHeight
        
        
    
            
        
        
    /*--------------------------------------------------
    Function Back To Top Button
    ---------------------------------------------------*/
        
        function BackToTop() {
            
            //Click event to scroll to top
            $('.scrolltotop').on('click', function() {	
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });
            
            $('#hero .icon-scroll').on('click', function() {	
                $('html, body').animate({ scrollTop: $('#main').offset().top +1 },800);
                return false;
            });
        
        }//End BackToTop
        
                
        
    /*--------------------------------------------------
    Function Masonry Portfolio
    ---------------------------------------------------*/	
            
        function MasonryPortfolio() {	
        
            if( $('#portfolio-wrap').length > 0 ){
                
            
                var $container = $('#portfolio');
            
                $container.isotope({
                    layoutMode: 'packery',
                  itemSelector: '.item',
                  gutter:0,
                  transitionDuration: "0.5s"
                });
                
                $('#filters a').on('click', function() {	
                    $('#filters a').removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    $container.isotope({ filter: selector });		
                    return false;
                });
                
                $(window).on( 'resize', function () {
                
                    var winWidth = window.innerWidth;
                    columnNumb = 1;			
                    var attr_col = $('#portfolio').attr('data-col');
                        
                     if (winWidth >= 1466) {
                        
                        
                        $('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() + 20 + 'px'});
                        $('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() + 'px'});			
                        var portfolioWidth = $('#portfolio-wrap').width();
                        
                        if (typeof attr_col !== typeof undefined && attr_col !== false) {
                            columnNumb = $('#portfolio').attr('data-col');
                        } else columnNumb = 3;
                        
                        postHeight = window.innerHeight
                        postWidth = Math.floor(portfolioWidth / columnNumb)			
                        $container.find('.item').each(function () { 
                            
                            if ( $('#portfolio').attr('data-col') == '2' ) {
                                $('.item').css( { 
                                    width : postWidth * 1 - 20 + 'px',
                                    height : postHeight * 0.5 - 10 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item').css( {
                                    width : postWidth + 'px',
                                    height : postHeight * 0.5  + 'px',
                                    margin : 0 + 'px' 
                                });
                            }
                            
                            if ( $('#portfolio').attr('data-col') == '3' ) {
                                $('.item').css( { 
                                    width : postWidth * 1 - 20 + 'px',
                                    height : postWidth * 0.65 - 20 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item').css( {
                                    width : postWidth + 'px',
                                    height : postWidth * 0.65 + 'px',
                                    margin : 0 + 'px' 
                                });
                            }
                            
                            if ( $('#portfolio').attr('data-col') == '2' ) {
                                $('.item.wide').css( { 
                                    width : postWidth * 2 - 20 + 'px',
                                    height : postHeight - 10 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item.wide').css( { 
                                    width : postWidth * 2  + 'px',
                                    height : postHeight  + 'px',
                                    margin : 0 + 'px'  
                                });	
                            }
                            
                            if ( $('#portfolio').attr('data-col') == '3' ) {						
                                $('.item.wide').css( { 
                                    width : postWidth * 2 - 20 + 'px',
                                    height : postWidth * 1.3 - 20 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item.wide').css( { 
                                    width : postWidth * 2  + 'px',
                                    height : postWidth * 1.3  + 'px',
                                    margin : 0 + 'px'  
                                });						
                            } 
                            
                            if ( $('#portfolio').attr('data-col') == '2' ) {
                                $('.item.tall').css( { 
                                    width : postWidth * 1 - 20 + 'px',
                                    height : postHeight * 1  + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item.tall').css( { 
                                    width : postWidth + 'px',
                                    height : postHeight * 1  + 'px',
                                    margin : 0 + 'px' 
                                });
                            }
                            
                            if ( $('#portfolio').attr('data-col') == '3' ) {
                                $('.item.tall').css( { 
                                    width : postWidth * 1 - 20 + 'px',
                                    height : postWidth * 1.3 - 20 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item.tall').css( { 
                                    width : postWidth + 'px',
                                    height : postWidth * 1.3  + 'px',
                                    margin : 0 + 'px' 
                                });
                            }
                            
                        });
                        
                        
                    } else if (winWidth > 1024) {
                        
                        $('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() + 20 + 'px'});
                        $('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() + 'px'});			
                        var portfolioWidth = $('#portfolio-wrap').width();
                                    
                        if (typeof attr_col !== typeof undefined && attr_col !== false) {
                            columnNumb = $('#portfolio').attr('data-col');
                        } else columnNumb = 3;
                        
                        postHeight = window.innerHeight
                        postWidth = Math.floor(portfolioWidth / columnNumb)			
                        $container.find('.item').each(function () { 
                            
                            if ( $('#portfolio').attr('data-col') == '2' ) {
                                $('.item').css( { 
                                    width : postWidth * 1 - 20 + 'px',
                                    height : postHeight * 0.5 - 10 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item').css( {
                                    width : postWidth + 'px',
                                    height : postHeight * 0.5  + 'px',
                                    margin : 0 + 'px' 
                                });
                            }
                            
                            if ( $('#portfolio').attr('data-col') == '3' ) {
                                $('.item').css( { 
                                    width : postWidth * 1 - 20 + 'px',
                                    height : postWidth * 0.65 - 20 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item').css( {
                                    width : postWidth + 'px',
                                    height : postWidth * 0.65 + 'px',
                                    margin : 0 + 'px' 
                                });
                            }
                            
                            if ( $('#portfolio').attr('data-col') == '2' ) {
                                $('.item.wide').css( { 
                                    width : postWidth * 2 - 20 + 'px',
                                    height : postHeight - 10 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item.wide').css( { 
                                    width : postWidth * 2  + 'px',
                                    height : postHeight  + 'px',
                                    margin : 0 + 'px'  
                                });	
                            }
                            
                            if ( $('#portfolio').attr('data-col') == '3' ) {						
                                $('.item.wide').css( { 
                                    width : postWidth * 2 - 20 + 'px',
                                    height : postWidth * 1.3 - 20 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item.wide').css( { 
                                    width : postWidth * 2  + 'px',
                                    height : postWidth * 1.3  + 'px',
                                    margin : 0 + 'px'  
                                });						
                            } 
                            
                            if ( $('#portfolio').attr('data-col') == '2' ) {
                                $('.item.tall').css( { 
                                    width : postWidth * 1 - 20 + 'px',
                                    height : postHeight * 1  + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item.tall').css( { 
                                    width : postWidth + 'px',
                                    height : postHeight * 1  + 'px',
                                    margin : 0 + 'px' 
                                });
                            }
                            
                            if ( $('#portfolio').attr('data-col') == '3' ) {
                                $('.item.tall').css( { 
                                    width : postWidth * 1 - 20 + 'px',
                                    height : postWidth * 1.3 - 20 + 'px',
                                    margin : 10 + 'px' 
                                });
                                $('.no-gutter .item.tall').css( { 
                                    width : postWidth + 'px',
                                    height : postWidth * 1.3  + 'px',
                                    margin : 0 + 'px' 
                                });
                            }
                            
                        });
                        
                        
                    } else if (winWidth > 767) {
                        
                        $('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() + 20 + 'px'});
                        $('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width()  + 'px'});			
                        var portfolioWidth = $('#portfolio-wrap').width();
                        
                        columnNumb = 2;
                        postWidth = Math.floor(portfolioWidth / columnNumb)			
                        $container.find('.item').each(function () { 
                            $('.item').css( { 
                                width : postWidth * 1 - 20 + 'px',
                                height : postWidth * 0.65 - 20 + 'px',
                                margin : 10 + 'px' 
                            });
                            $('.no-gutter .item').css( {
                                width : postWidth + 'px',
                                height : postWidth * 0.65 + 'px',
                                margin : 0 + 'px' 
                            });					
                            $('.item.wide').css( { 
                                width : postWidth * 2 - 20 + 'px',
                                height : postWidth * 1.3 - 20 + 'px',
                                margin : 10 + 'px' 
                            });
                            $('.no-gutter .item.wide').css( { 
                                width : postWidth * 2  + 'px',
                                height : postWidth * 1.3 + 'px',
                                margin : 0 + 'px'  
                            });								
                            $('.item.tall').css( { 
                                width : postWidth * 1 - 20 + 'px',
                                height : postWidth * 1.3 - 20 + 'px',
                                margin : 10 + 'px' 
                            });
                            $('.no-gutter .item.tall').css( { 
                                width : postWidth + 'px',
                                height : postWidth * 1.3  + 'px',
                                margin : 0 + 'px' 
                            });				
                        });
                        
                        
                    }	else if (winWidth > 479) {
                        
                        $('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() + 20 + 'px'});
                        $('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() + 'px'});			
                        var portfolioWidth = $('#portfolio-wrap').width();
                        
                        columnNumb = 1;
                        postWidth = Math.floor(portfolioWidth / columnNumb)			
                        $container.find('.item').each(function () { 
                            $('.item').css( { 
                                width : postWidth * 1 - 20 + 'px',
                                height : postWidth * 0.65 - 20 + 'px',
                                margin : 10 + 'px' 
                            });
                            $('.no-gutter .item').css( {
                                width : postWidth + 'px',
                                height : postWidth * 0.65 + 'px',
                                margin : 0 + 'px' 
                            });					
                            $('.item.wide').css( { 
                                width : postWidth * 1 - 20 + 'px',
                                height : postWidth * 0.65 - 20 + 'px',
                                margin : 10 + 'px' 
                            });
                            $('.no-gutter .item.wide').css( { 
                                width : postWidth * 1  + 'px',
                                height : postWidth * 0.65 + 'px',
                                margin : 0 + 'px'  
                            });								
                            $('.item.tall').css( { 
                                width : postWidth * 1 - 20 + 'px',
                                height : postWidth * 1.3 - 20 + 'px',
                                margin : 10 + 'px' 
                            });
                            $('.no-gutter .item.tall').css( { 
                                width : postWidth + 'px',
                                height : postWidth * 1.3  + 'px',
                                margin : 0 + 'px' 
                            });
                        });
                        
                        
                    }
                    
                    else if (winWidth <= 479) {
                        
                        $('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() + 10 + 'px'});
                        $('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() + 'px'});			
                        var portfolioWidth = $('#portfolio-wrap').width();
                        
                        columnNumb = 1;
                        postWidth = Math.floor(portfolioWidth / columnNumb)			
                        $container.find('.item').each(function () { 
                            $('.item').css( { 
                                width : postWidth * 1 - 10 + 'px',
                                height : postWidth * 0.65 - 10 + 'px',
                                margin : 5 + 'px' 
                            });
                            $('.no-gutter .item').css( {
                                width : postWidth + 'px',
                                height : postWidth * 0.65 + 'px',
                                margin : 0 + 'px' 
                            });					
                            $('.item.wide').css( { 
                                width : postWidth * 1 - 10 + 'px',
                                height : postWidth * 0.65 - 10 + 'px',
                                margin : 5 + 'px' 
                            });
                            $('.no-gutter .item.wide').css( { 
                                width : postWidth * 1  + 'px',
                                height : postWidth * 0.65 + 'px',
                                margin : 0 + 'px'  
                            });								
                            $('.item.tall').css( { 
                                width : postWidth * 1 - 10 + 'px',
                                height : postWidth * 1.3 - 10 + 'px',
                                margin : 5 + 'px' 
                            });
                            $('.no-gutter .item.tall').css( { 
                                width : postWidth + 'px',
                                height : postWidth * 1.3  + 'px',
                                margin : 0 + 'px' 
                            });
                        });
                        
                        
                    }		
                    return columnNumb;
                    
                
                }).resize();
            
                $("#all").trigger('click');
                
            }
        
        }//End MasonryPortfolio	
        
        
    /*--------------------------------------------------
    Function MagnificPopup
    ---------------------------------------------------*/	
        
        function MagnificPopup() {	
        
            var mfp = $('.mfp-gallery');
            if(mfp.length) {
                mfp.each(function(index, element) {
                    $(element).magnificPopup({
                          delegate: 'a.mf-zoom',
                          type: 'image',
                          image: {
                              markup: '<div class="mfp-figure">'+
                                        '<div class="mfp-close"></div>'+
                                        '<div class="mfp-img"></div>'+
                                      '</div>' +
                                      '<div class="mfp-bottom-bar">'+
                                        '<div class="mfp-title"></div>'+
                                        '<div class="mfp-counter"></div>'+
                                      '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
                            
                              cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor. 
                              
                              titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
                              // Or the function that should return the title. For example:
                              // titleSrc: function(item) {
                              //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                              // }
                            
                              verticalFit: true, // Fits image in area vertically
                            
                              tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
                            },
                            gallery: {
                              enabled:true,
                              tCounter: '<span class="mfp-counter">%curr% / %total%</span>' // markup of counter
                            },
                          mainClass: 'mfp-zoom-in',
                          tLoading: '',
                          removalDelay: 300, //delay removal by X to allow out-animation
                          callbacks: {
                            imageLoadComplete: function() {
                              var self = this;
                              setTimeout(function() {
                                self.wrap.addClass('mfp-image-loaded');
                              }, 16);
                            },
                            close: function() {
                              this.wrap.removeClass('mfp-image-loaded');
                            }
                          },
                          closeBtnInside: false,
                          closeOnContentClick: true,
                          midClick: true
                        });
                });	
            }
            
        }//End MagnificPopup	
        
        
        
        
        
    /*--------------------------------------------------
    Function Shortcodes
    ---------------------------------------------------*/	
            
        function Shortcodes() {
            
            //Intense Image
            
            if( $('.intense-zoom').length > 0 ){
                var elements = document.querySelectorAll( '.intense-zoom' );
                Intense( elements );
            }
            
        
            //Progress bar animations	
            $('.progress-bar li').each(function(i){		
                $(this).appear(function(){			
                    var percent = $(this).find('span').attr('data-width');
                    var $endNum = parseInt($(this).find('span strong i').text());
                    var $that = $(this);			
                    $(this).find('span').animate({
                        'width' : percent + '%'
                    },1600, function(){
                    });			
                    $(this).find('span strong').animate({
                        'opacity' : 1
                    },1400);			
                    $(this).find('span strong i').countTo({
                        from: 0,
                        to: $endNum,
                        speed: 1200,
                        refreshInterval: 30,
                        onComplete: function(){}
                    });	 
                    if(percent == '100'){
                        $that.find('span strong').addClass('full');
                    }	
                });
            });	
            
            
            // Accordion	  
            $('dl.accordion dt').filter(':first-child').addClass('accordion-active');
            $('dd.accordion-content').filter(':nth-child(n+3)').slideUp(1).addClass('hide');		
            $('dl.accordion').on('click', 'dt', function() {
                $(this).addClass('accordion-active').next().slideDown(200).siblings('dd.accordion-content').slideUp(200).prev().removeClass('accordion-active');						
            });	
            $('dl.accordion').on('click', 'dt.accordion-active', function() {
                $(this).removeClass('accordion-active').siblings('dd.accordion-content').slideUp(200);
            });
            
            
            // Toggle	
            $(".toggle_container").hide(); 
            $("span.toggle-title").on('click', function() {
                $(this).toggleClass("toggle-active").next().slideToggle("normal");
                return false; 
            });
            
            
            // Tabs	
            $(".tab_container").hide(); 
            $("ul.tabs li:first").addClass("tab-active").show(); 
            $(".tab_container:first").show(); 		
            $("ul.tabs li").on('click', function() {
                $("ul.tabs li").removeClass("tab-active"); 
                $(this).addClass("tab-active"); 
                $(".tab_container").hide(); 
                var activeTab = $(this).find("a").attr("href"); 
                $(activeTab).fadeIn(); 
                return false;
            });
            
            
            //Fading Out AlertBox
            $('.shortcode_alertbox').find('.box_close').on('click', function() {
                $(this).parents('.alertboxes').animate({opacity:0},300).animate({height:"0px"});
            });
            
            
            // Milestone counters
            if( jQuery('.clapat-counter').length > 0 ){		
            $('.clapat-counter').each(function() {
                $(this).appear(function() {
                    var $endNum = parseInt($(this).find('.number').text());
                    $(this).find('.number').countTo({
                        from: 0,
                        to: $endNum,
                        speed: 1500,
                        refreshInterval: 30
                    });
                },{accX: 0, accY: 0});
            });
            }
            
            // Radial Counters	
            if( jQuery('.radial-counter').length > 0 ){		
                $(".knob").knob({
                    width: 140,
                    height: 140,
                    fgColor: '#000',
                    bgColor: '#fff',
                    inputColor: '#fff',
                    dynamicDraw: true,
                    thickness: 0.05,
                    tickColorizeValues: true,
                    skin:'tron',
                    readOnly:true,
                });	
                $(".knob").appear(function(e){			
                    var $this = $(this);
                    var myVal = $this.attr("data-gal");	
                   $({value: 0}).animate({value: myVal}, {
                       duration: 2000,
                       easing: 'swing',
                       step: function () {
                           $this.val(Math.ceil(this.value)).trigger('change');
                       }
                   })			
                });	
            }
            
        
        }//End Shortcodes
        
    });
    
    /*--------------------------------------------------
        Function Contact Map & Init Contact Map
    ---------------------------------------------------*/	
    
        function ContactMap() {	
            
            if( jQuery('#map_canvas').length > 0 ){
                
                var map_marker_image 	= 'images/marker.html';
                var map_address 		= 'New York City'
                var map_zoom			= 16;
                var marker_title 		= 'Hello Friend!';
                var marker_text			= 'Here we are. Come to drink a coffee!';
                var map_type			= google.maps.MapTypeId.SATELLITE;
                
                if( typeof ClapatMapOptions != 'undefined' ){
                
                    map_marker_image 	= ClapatMapOptions.map_marker_image;
                    map_address 		= ClapatMapOptions.map_address;
                    map_zoom			= Number(ClapatMapOptions.map_zoom);
                    marker_title 		= ClapatMapOptions.marker_title;
                    marker_text			= ClapatMapOptions.marker_text;
                    if( ClapatMapOptions.map_type == 0 ){
                    
                        map_type = google.maps.MapTypeId.SATELLITE;
                    }
                    else{
                    
                        map_type = google.maps.MapTypeId.ROADMAP;
                    }
                    
                }
                        
                var settings = {
                    zoom: map_zoom,
                    center: new google.maps.LatLng(43.270441,6.640888),
                    mapTypeControl: false,
                    scrollwheel: false,
                    draggable: true,
                    panControl:false,
                    scaleControl: false,
                    zoomControl: false,
                    streetViewControl:false,
                    navigationControl: false,
                    mapTypeId: map_type};		
                var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
                google.maps.event.addDomListener(window, "resize", function() {
                    var center = map.getCenter();
                    google.maps.event.trigger(map, "resize");
                    map.setCenter(center);
                });	
                var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>' + marker_title + '</strong></h4>'+
                    '<div id="bodyContent">'+
                    '<p style="font-family:Verdana; color:#999; font-size:12px; margin-bottom:10px">' + marker_text + '</p>'+
                    '</div>'+
                    '</div>';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });	
                var companyImage = new google.maps.MarkerImage(map_marker_image,
                    new google.maps.Size(58,63),
                    // <!-- Width and height of the marker -->
                    new google.maps.Point(0,0),
                    new google.maps.Point(35,20)
                    // <!-- Position of the marker -->
                );
                
                var latitude = 43.270441;
                var longitude = 6.640888;
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({'address':map_address}, function(results, status) {
                    if(status == google.maps.GeocoderStatus.OK) {
                    
                        map.setCenter(results[0].geometry.location);
                        
                        latitude = results[0].geometry.location.lat();
                        longitude = results[0].geometry.location.lng();
                        
                        var companyPos = new google.maps.LatLng(latitude, longitude);	
                        var companyMarker = new google.maps.Marker({
                                            position: companyPos,
                                            map: map,
                                            icon: companyImage,               
                                            title:"Our Office",
                                            zIndex: 3});	
                                        google.maps.event.addListener(companyMarker, 'click', function() {
                                            infowindow.open(map,companyMarker);
                                        });	
                    }
                });
                
            }
            
            return false
            
        } // End ContactMap
    
        function InitContactMap() {
            
            if( jQuery('#map_canvas').length > 0 ){
                
                if (typeof google != 'undefined' && typeof google.maps != 'undefined'){
                    
                    // google maps already loaded, call the function which draws the map
                    ContactMap();
                    
                } else {
                
                    var map_api_key = '';
                    if( typeof ClapatMapOptions != 'undefined' ){
                        map_api_key = 'key=' + ClapatMapOptions.map_api_key;
                    }
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'https://maps.googleapis.com/maps/api/js?' + map_api_key +
                                '&callback=ContactMap';
                    document.body.appendChild(script);
                }
                
            }
        } // End InitContactMap