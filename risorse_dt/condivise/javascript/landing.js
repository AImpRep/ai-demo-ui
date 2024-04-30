var menu;
var menu_mobile;
var menu_color;

function deactivate_menu() {
    $('.content-menu-landing').removeClass('fixed').addClass('absolute');
    $('.content-menu-landing .landing-anchors').hide();
    $('button.navbar-toggle').hide();
}

function activate_menu() {
    $('.content-menu-landing').removeClass('absolute').addClass('fixed');
    $('.content-menu-landing .landing-anchors').show();
}

function myanimationScroll_landing(mytarget) {
    if (!mytarget.match(/^[a-zA-Z]/) && $(mytarget).length > 0) {
        $('html, body').stop().animate({
            'scrollTop': $(mytarget).offset().top - ($('.content-menu-landing').outerHeight())
        }, 800, 'swing', function() {
            // window.location.hash = mytarget;
        });
        doClosing();
    }
}

function vai_ancora_landing(page_anchor_container) {

    if ($(page_anchor_container).length > 0) {

        $(page_anchor_container).removeClass('clicked_nav');
        $(page_anchor_container + ' ul.anchor-submenu li a[href^="#"]').on('click', function(e) {

            $(page_anchor_container + ' ul.anchor-submenu li a').removeClass('clicked_nav');
            //if ($(this).parents(page_anchor_container).length > 0) {
            e.preventDefault();
            var target = this.hash;
            myanimationScroll_landing(target);
            $(this).addClass('clicked_nav');
        });
    }
}

function activeOnScroll(page_anchor_container) {

    if ($(page_anchor_container).length > 0) {
        var scrollPos = $(document).scrollTop();

        $(page_anchor_container + ' ul#anchor-submenu li a').each(function() {
            var refElement = $($(this).attr('href'));

            if (refElement.length > 0) {

                if ((refElement.offset().top - ($('.content-menu-landing').outerHeight() + 1) < scrollPos) && (refElement.offset().top - ($('.content-menu-landing').outerHeight() + 1) + refElement.outerHeight() > scrollPos)) {
                    $(page_anchor_container + ' ul#anchor-submenu li a').removeClass('active');
                    $(this).parent().addClass('active');
                } else {
                    $(this).parent().removeClass('active');
                }

            }

        });
    }
}

function doYellow() {
    if (menu == 'on') {
        if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches || window.matchMedia("(max-width: 767px)").matches) {
            $('.content-menu-landing').css('background-color', '#eedc00');
        } else {
            $('.content-menu-landing').css('background-color', 'rgba(0, 0, 0, 0.4');
        }
        activate_menu();
        vai_ancora_landing('.landing-anchors');
    } else if (menu == 'off') {
        if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches || window.matchMedia("(max-width: 767px)").matches) {
            $('.content-menu-landing').css('background-color', '#eedc00');
        } else {
            $('.content-menu-landing').css('background-color', 'transparent');
        }
        deactivate_menu();
    }
}

function doTransparent() {
    if (menu == 'on') {
        if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches || window.matchMedia("(max-width: 767px)").matches) {
            $('.navbar-default .navbar-toggle .icon-bar').css('background-color', 'white');
            $('.content-menu-landing').css('background-color', 'rgba(0, 0, 0, 0.4');
        } else {
            $('.content-menu-landing .navbar-logo').css('background-color', 'transparent');
            $('.content-menu-landing').css('background-color', 'rgba(0, 0, 0, 0.4');
        }
        activate_menu();
        vai_ancora_landing('.landing-anchors');
    } else if (menu == 'off') {
        if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches || window.matchMedia("(max-width: 767px)").matches) {
            $('.content-menu-landing').css('background-color', 'rgba(0, 0, 0, 0.4');
        } else {
            $('.content-menu-landing .navbar-logo').css('background-color', 'transparent');
            $('.content-menu-landing').css('background-color', 'transparent');
        }
        deactivate_menu();
    }
}

function checkMobileMenu() {
    if ($('.navbar-toggle').length == 0) {
        if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches || window.matchMedia("(max-width: 767px)").matches) {
            $('.content-menu-landing').removeClass('fixed').addClass('absolute');
        }
    }
}

function startCarouselFullpage() {
    var myItemFullpage = $('.carousel-fullpage .item');
    var myItemFullpageText = $('.carousel-fullpage .item .carousel-text');
    var myHeightwindow = 0;
    var myHeightwindow = $(window).height();
    myItemFullpage.height(myHeightwindow);
    myItemFullpageText.height(myHeightwindow);

    $(window).on('resize', function () {
        myHeightwindow = $(window).height();
        myItemFullpage.height(myHeightwindow);
        myItemFullpageText.height(myHeightwindow);
    });
}


 $(document).ready(function() {
    // #1
            if ($('#content-parallax').length > 0) {
                $('html, body').css('height','100%');
            }
    // #2
            startCarouselFullpage();
        });






$(document).ready(function() {

    menu = $('.content-menu-landing').data('menu');
    menu_color = $('.content-menu-landing').data('menu-color');

    if (menu_color == "yellow") {
        doYellow();
    } else if (menu_color == 'transparent') {
        doTransparent();
    }

    checkMobileMenu();

});


$(window).resize(function() {
    if (menu_color == "yellow") {
        doYellow();
    } else if (menu_color == 'transparent') {
        doTransparent();
    }

    checkMobileMenu();

});

$(window).scroll(function() {
    if (menu == 'on') {
        activeOnScroll('.landing-anchors');
    }
});
