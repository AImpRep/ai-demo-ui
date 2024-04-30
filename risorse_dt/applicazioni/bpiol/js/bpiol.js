/* -- Funzioni di presentazione Dashboard -- */

var FULL_HD = 1920;


$(document).ready(function() {

  /******************/
  /*  Left Sidebar  */
  /******************/

    
  last_sb_opn_itm = '';

  if ($('.left-sidebar-wrapper').hasClass('active')) {

    $('body').addClass('left-sidebar-on');

    if ((mq_Detect == 'md' || mq_Detect == 'sm' || mq_Detect == 'xs') || ($(window).outerWidth() < FULL_HD)) {
      $('.left-sidebar-wrapper').removeClass('active');
      $('.list-group-item').addClass('event-off');
    }

  }

  if ($('.content-footer').length > 0 && $('#left-sidebar').length > 0) {
    $('.content-footer').addClass('relative');
  }

  // controllo Toggle
  $('.left-sidebar-toggle-clk').click(function() {

    $('.list-group-item').toggleClass('event-off');
    $('.left-sidebar-wrapper').toggleClass('active');

    if ($('.left-sidebar-wrapper').hasClass('active')) {
      last_sb_opn_itm_array = $(last_sb_opn_itm).parents('.collapse').addBack().toArray().reverse();

      $.each($(last_sb_opn_itm_array), function(index, value) {
        setTimeout(function() {
          console.log(last_sb_opn_itm_array[index]);
          $(last_sb_opn_itm_array[index]).collapse("show");
        }, 375 * index);
      });


    } else {

      last_sb_opn_itm = $("#left-sidebar .collapse.in").last();
      $("#left-sidebar .collapse.in").collapse("hide");

    }

    if (mq_Detect == 'xs') {
      $('body').toggleClass('left-sidebar-on');
    }

  });



  $('.list-group-item').on('click', function(event) {

    if (!$(this).hasClass('event-off')) {

      $('#left-sidebar > .collapse.in').removeClass('in');
      $('.collapse').on('shown.bs.collapse', function() {
        $('.collapse.in').prev('[data-toggle="collapse"]').addClass('collapseOpen');
      });
      $('.collapse').on('hidden.bs.collapse', function() {
        $('.collapse:not(.in)').prev('[data-toggle="collapse"]').removeClass('collapseOpen');
      });

    } else {
      event.stopPropagation();
    }

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
    $('.list-group-item').addClass('event-off');
  } else if ($(window).outerWidth() > FULL_HD) {
    $('.left-sidebar-wrapper').addClass('active');
    $('.list-group-item').removeClass('event-off');
  }

  footer_larg = $('.content-footer-post').outerWidth();
  footer_container_larg = $('.content-footer-post .container').outerWidth();

});
