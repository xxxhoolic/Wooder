$(document).ready(function () {
    
// smooth scroll function
    var $root = $('html, body');
    $('a').click(function () {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 550, function () {
            window.location.hash = href;
        });
        return false;
    });
    
    
// side navigation    
	$(".menu").hover(function() {
		$("#menuIcon").toggleClass('hover');
	});
    
// menu click function     
	$('.menu').click(function () {
        if ($(this).hover) {
            $('#menuIcon').toggleClass('open');
            $('.sideNav').toggleClass('showNav1');
            $('.topFilter').toggleClass('showNav2');
        }
	});
    
//  botten1 hover function   
    $('.btn1').hover(function () {
        $('.btn1 rect').css({
            "stroke-width": '4',
            "stroke-dasharray": '70, 290',
            "stroke-dashoffset": '150%',
            "transition": 'all 1.35s cubic-bezier(0.19, 1, 0.22, 1)'
        });
    }, function () {
        $('.btn1 rect').css({
            "stroke-width": '2',
            "stroke-dasharray": '422, 0',
            "stroke-dashoffset": '0',
            "transition": 'all 1.35s cubic-bezier(0.19, 1, 0.22, 1)'
        });
    });
    
 //slide3 hover
    $('.slide2 svg, .slide3 svg, .slide4 svg').hover(function () {
        $('.slide2 path, .slide3 path, .slide4 path').css('stroke', '#a5a5a5');
    }, function () {
        $('.slide2 path, .slide3 path, .slide4 path').css('stroke', '#676767');
    });
    
//slide show  
    $('.slideContainer').cycle({
        fx:        'none',
        pager:     '#mainPager',
        timeout:    8000,
        speed:      1500,
        pause:      1,
    });

//share
    $('.share, .social').hover(function () {
        $('.social').css({
            'opacity': '.6'
        });
        $('#twitter').css({
            'transform': 'translate(-35px,-38px)'
        });
        $('#facebook').css({
            'transform': 'translate(-65px,0px)'
        });
        $('#google').css({
            'transform': 'translate(-35px,38px)'
        });
    }, function () {
        $('.social').css({
            'opacity': '0'
        });
        $('#twitter').css({
            'transform': 'translate(0px,0px)'
        });
        $('#facebook').css({
            'transform': 'translate(0px,0px)'
        });
        $('#google').css({
            'transform': 'translate(0px,0px)'
        });
    });

    $('#twitter, #facebook, #google').hover(function () {
        $('.social').css({
            'opacity': '1'
        });
    }, function () {
        $('.social').css({
            'opacity': '0'
        });
    });
    
//products hover
    $('#furniture').hover(function () {
        $('#furniture img').css({
            '-webkit-filter': 'grayscale(0%)',
            'filter': 'grayscale(0%)',
            'opacity': '1',
            '-webkit-transform': 'translateY(10px)',
            'transform': 'translateY(10px)',
            'transition-duration': '2s',
            'transition-timing-function': 'ease'
        });
        
        $('#furniture .column1, #furniture .column2').css({
            '-webkit-transform': 'translateY(-10px)',
            'transform': 'translateY(-10px)',
            'transition-duration': '2s',
            'transition-timing-function': 'ease'
        });
    }, function () {
        $('#furniture img').css({
            '-webkit-filter': 'grayscale(100%)',
            'filter': 'grayscale(100%)',
            'opacity': '.9',
            '-webkit-transform': 'translateY(0px)',
            'transform': 'translateY(0px)',
            'transition-duration': '2s',
            'transition-timing-function': 'ease'
        });
        
        $('#furniture .column1, #furniture .column2').css({
            '-webkit-transform': 'translateY(0px)',
            'transform': 'translateY(0px)',
            'transition-duration': '2s',
            'transition-timing-function': 'ease'
        });
    });

    $('#decor').hover(function () {
        $('#decor img').css({
            '-webkit-filter': 'grayscale(0%)',
            'filter': 'grayscale(0%)',
            'opacity': '1',
            '-webkit-transform': 'translateY(10px)',
            'transform': 'translateY(10px)',
            'transition-duration': '2s',
            'transition-timing-function': 'ease'
        });
        
        $('#decor .column1, #decor .column2').css({
            '-webkit-transform': 'translateY(-10px)',
            'transform': 'translateY(-10px)',
            'transition-duration': '2s',
            'transition-timing-function': 'ease'
        });
    }, function () {
        $('#decor img').css({
            '-webkit-filter': 'grayscale(100%)',
            'filter': 'grayscale(100%)',
            'opacity': '.9',
            '-webkit-transform': 'translateY(0px)',
            'transform': 'translateY(0px)',
            'transition-duration': '2s',
            'transition-timing-function': 'ease'
        });
        
        $('#decor .column1, #decor .column2').css({
            '-webkit-transform': 'translateY(0px)',
            'transform': 'translateY(0px)',
            'transition-duration': '2s',
            'transition-timing-function': 'ease'
        });
    });
  
//slide show
    
    $('#play1').click(function () {
        $('#slider1').cycle('resume');
        return false;
    });
    
    $('#pause1').click(function () {
        $('#slider1').cycle('pause');
        return false;
    });
    
    $('#slider1').cycle({
        
        fx:        'none',
        next:      '#next1',
        prev:      '#prev1',
        pager:     '#pager1',
        timeout:    3000,
        speed:      900,
        pause:      1,
        
    });
    
    $('#play2').click(function () {
        $('#slider2').cycle('resume');
        return false;
    });
    
    $('#pause2').click(function () {
        $('#slider2').cycle('pause');
        return false;
    });
    
    $('#slider2').cycle({
        
        fx:        'none',
        next:      '#next2',
        prev:      '#prev2',
        pager:     '#pager2',
        timeout:    3000,
        speed:      900,
        pause:      1,
        
    });
    
    $('#furniture img').click(function () {
        $('.content').addClass('blurFilter');
        $('.furnitureModal').css('display', 'block');
    });

        $('#decor img').click(function () {
        $('.content').addClass('blurFilter');
        $('.decorModal').css('display', 'block');
    });
    
    $(".modal .closebtn").click(function () {
        $(".content").removeClass("blurFilter");
        $(".modal").css("display", "none");
    });

//video modals
    $(".video1 .playButton").click(function (){
        $('.content').addClass('blurFilter');
        $(".videoModal").css("display","block");  
        $(".videoModal source").attr("src","videos/design.mp4"); 
        $(".videoPlayer")[0].load();
        $(".videoPlayer")[0].play();
    });
    
    $(".video2 .playButton").click(function (){
        $(".content").addClass("blurFilter");
        $(".videoModal").css("display","block");  
        $(".videoModal source").attr("src","videos/skills.mp4");  
        $(".videoPlayer")[0].load();
        $(".videoPlayer")[0].play();
    });
    
    $(".video3 .playButton, #design .btn1").click(function (){
        $(".content").addClass("blurFilter");
        $(".videoModal").css("display","block");  
        $(".videoModal source").attr("src","videos/products.mp4");
        $(".videoPlayer")[0].load();
        $(".videoPlayer")[0].play();
    });
    
    $(".modal .closebtn").click(function (){
        $(".container").removeClass("blurFilter");
        $(".modal").css("display","none");
        $(".videoPlayer")[0].pause();
    });
    
});