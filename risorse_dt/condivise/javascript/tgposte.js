 function streamingBoxScrollController() {
     var offset = 250;
     var duration = 0;

     // controllo scroll
     $(window).scroll(function() {
         if ($(this).scrollTop() > offset) {
             clearTimeout($.data(this, 'scrollTimer'));
             $.data(this, 'scrollTimer', setTimeout(function() {
                 $('.streaming-box').addClass('streaming-box-scrolled');
             }, duration + duration));
         } else {
             $('.streaming-box').removeClass('streaming-box-scrolled');
         }
     });
 }

 function streamingBoxController() {
     // chiusura streamingbox
     $('.streaming-box .close').click(function() {
         $('.streaming-box').remove();
     });
 }

 /*
  function streamingBoxSourceController() {
      var myDataTarget = $('.streaming-box iframe').data('target');
      if (mq_Detect !== "lg" && $('.streaming-box').length >= 0) {
          $('.streaming-box iframe').removeAttr('src');
      } else {
          if ($('.streaming-box iframe').attr('src') == null || $('.streaming-box iframe').attr('src') == undefined || $('.streaming-box iframe').attr('src') == '') {
              $('.streaming-box iframe').attr('src', myDataTarget);
          }

      }
  }

  function streamingBoxResizeController() {
      $(window).resize(function() {
          clearTimeout(timeoutObj);
          timeoutObj = setTimeout(function() {
              streamingBoxSourceController();
          }, 250);
          if (!timeoutFuncExe) {
              timeoutFuncExe = true;
          }
      });
  }
  */