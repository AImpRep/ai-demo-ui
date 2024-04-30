/* -- Funzioni di presentazione Dashboard -- */

var FULL_HD = 1920;


$(document).ready(function() {

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

  $('.left-sidebar-toggle-clk').click(function() {

    $('.left-sidebar-wrapper').toggleClass('active');

    if ($('.left-sidebar-wrapper').hasClass('active')) {
      last_sb_opn_itm_array = $(last_sb_opn_itm).parents('.collapse').andSelf().toArray().reverse();

      $.each($(last_sb_opn_itm_array), function(index, value) {
        setTimeout(function() {
          $(last_sb_opn_itm_array[index]).collapse("show");
        }, 375 * index);
      });

      last_sb_opn_itm = '';
    } else {
      last_sb_opn_itm = $("#left-sidebar .collapse.in").last();
      $("#left-sidebar .collapse.in").collapse("hide");
    }

    if (mq_Detect == 'xs') {
      $('body').toggleClass('left-sidebar-on');
    }

  });


  $('.list-group-item').on('click', function() {
    /* if (!$(this).parents('li').last().children('.icon-left-sidebar-bpiol').hasClass('icon-left-sidebar-bpiol-selected')) {
      $(this).parents('li').removeClass('.icon-left-sidebar-bpiol-selected');
      $(this).parents('li').last().children('.icon-left-sidebar-bpiol').addClass('icon-left-sidebar-bpiol-selected');
    } */

    $('#left-sidebar > .collapse.in').removeClass('in');



    $('.collapse').on('shown.bs.collapse', function(){
      $('.collapse.in').prev('[data-toggle="collapse"]').addClass('collapseOpen');
    });
    $('.collapse').on('hidden.bs.collapse', function(){
      $('.collapse:not(.in)').prev('[data-toggle="collapse"]').removeClass('collapseOpen');
    });

  });


});


$(window).scroll(function() {

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


$(window).resize(function() {

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
    $("#left-sidebar .collapse.in").collapse("hide");
  } else if ($(window).outerWidth() > FULL_HD) {
    $('.left-sidebar-wrapper').addClass('active');
  }

  footer_larg = $('.content-footer-post').outerWidth();
  footer_container_larg = $('.content-footer-post .container').outerWidth();

});
