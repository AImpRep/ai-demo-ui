/* -- Funzioni di presentazione Dashboard -- */

var FULL_HD = 1920;


$(document).ready(function () {

    /******************/
    /*  Left Sidebar  */
    /******************/
    if ($('.left-sidebar-wrapper').hasClass('active')) {
        $('body').addClass('left-sidebar-on');
        if ((mq_Detect == 'md' || mq_Detect == 'sm' || mq_Detect == 'xs') || ($(window).outerWidth() < FULL_HD)) {
            $('.left-sidebar-wrapper').removeClass('active');
        }
    }

    if ($('.content-footer').length > 0 && $('#left-sidebar').length > 0) {
        $('.content-footer').addClass('relative');
    }

    $('.left-sidebar-toggle-clk').click(function () {
        $('.left-sidebar-wrapper').toggleClass('active');
        $('.left-sidebar-toggled-item ul li').hide();
        $('.left-sidebar-toggled-item ul li').show(
            function () {
                $(this).css('display', 'block');
            });

        if (mq_Detect == 'xs') {
            $('body').toggleClass('left-sidebar-on');
        }

    });

    /*****************************/
    /*  Progress Bar multicolor  */
    /*****************************/
    if ($('.content-graphic-stages')) {
        $('.content-graphic-stages .progress-bar').hover(function () {
            $(this).siblings('.progress-bar').css('opacity', '0.5');
            $(this).parents('.content-graphic-stages').find('.graphic-stages .content-result').css('opacity', '0.5');
            $(this).css('opacity', '1');
            $(this).parents('.content-graphic-stages').find('.graphic-stages .content-result[data="' + $(this).attr('data') + '"]').css('opacity', '1');
        }, function () {
            $(this).siblings('.progress-bar').css('opacity', '1');
            $('.content-result').css('opacity', '1');
        });
    }

    /*********************/
    /*  Dropdown toggle  */
    /*********************/
    $('li.dropdown.dropdown-windowbox span.dropdown-toggle').on('click', function (event) {

        if ($(this).parent().hasClass("open")) {
            $('.dropdown.dropdown-windowbox').removeClass('open');
        } else {
            $('.dropdown.dropdown-windowbox').removeClass('open');
            $(this).parent().addClass("open");
        }

        //event.preventDefault();
    });

    $('body').on('click', function (e) {
        if (!$('.dropdown.dropdown-windowbox').is(e.target) && $('.dropdown.dropdown-windowbox').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
            $('.dropdown.dropdown-windowbox').removeClass('open');
        }
    });


    // Switch on/off checkbox

    $('.onoffswitch').on('click', function () {
        if ($(this).children('input').is(':checked')) {
            $(this).closest('.panel-tools').children('.panel-body').addClass('in');
        } else {
            $(this).closest('.panel-tools').children('.panel-body').removeClass('in');
        };
    });


    //verifica se vi siano check della tabella in input con valore true
    countTblChecked('.tbl-with-sel');
    $('table.tbl-with-sel .custom-checkbox input[type=checkbox]').on("click", function () {
        $(this).parents('tr').toggleClass('info');
        countTblChecked('.tbl-with-sel');
    });

});


$(window).scroll(function () {

    /* chiude tutte le tendine aperte nell'header */

    $('.dropdown.dropdown-windowbox:not(.dropdown-windowbox-persistant)').removeClass('open');


    /*****************/
    /* Left Sidebar   */
    /****************/
    if ($(this).scrollTop() >= $('.header-dashboard-postlogin').outerHeight()) {

        if ($(window).height() < $('.left-sidebar-wrapper').height()) {

            $('body').addClass('headbar-fixed');
        }
    } else {
        $('body').removeClass('headbar-fixed');
    }

});


$(window).resize(function () {

    /*****************/
    /* Left Sidebar   */
    /****************/
    if (mq_Detect == 'xs') {
        $('body').removeClass('left-sidebar-on');
    } else {
        if (!$('body').hasClass('left-sidebar-on')) {
            $('body').addClass('left-sidebar-on');
        }
    }

    if (mq_Detect == 'md' || mq_Detect == 'sm' || mq_Detect == 'xs') {
        $('.left-sidebar-wrapper').removeClass('active');
    } else if ($(window).outerWidth() > FULL_HD) {
        $('.left-sidebar-wrapper').addClass('active');
    }

    footer_larg = $('.content-footer-post').outerWidth();
    footer_container_larg = $('.content-footer-post .container').outerWidth();

});


/******************/
/* Barra N. check */
/******************/

// conta le check della tabella selezionata
var countTblChecked = function (check_sel_tbl) {
    if ($(check_sel_tbl).length > 0) {
        var n = $(check_sel_tbl + ' tr td:first-child input:checked').length;
        if (n > 1) {
            if ($('.content_checked_table_input_note').length > 0) {
                $('.checked_table_input').html(n);
            } else {
                var check_sel_notify = 'ELEMENTI SELEZIONATI <span class="checked_table_input counter counter-blue">' + n + '</span>';
                var h_sel_notify = $('.content-footer-post').outerHeight();
                $('body').append('<div class="content content_checked_table_input_note" style="height:' + h_sel_notify + '"><div class="container"><div class="row"><div class="col-md-12">' + check_sel_notify + '</div></div></div></div>');

                $('.content_checked_table_input_note').animate({
                    opacity: 1,
                    bottom: 0,
                }, 500);
            }
        } else {
            $('.content_checked_table_input_note').animate({
                opacity: 0,
                bottom: -200,
            }, 500, function () {
                $('.content_checked_table_input_note').remove();
            });
        }
        $(check_sel_tbl + ' tr').filter(':has(:checkbox:checked)').addClass('info');
    } else {
        return null;
    }
};
