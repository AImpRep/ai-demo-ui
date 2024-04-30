
    function createModalGallery(mygallery) {

      /* basic script for CDN */
        if ($('#' + mygallery + " .item-gallery-pi[data-video-cdn]")){
          var baseScriptCdn=$("<script>if ($('html').hasClass('pi-mobile')) {      $('.azuremediaplayer').remove();      $('.video-wrap').addClass('hide');    } else {var myDesktopOptions = {'width':'100%','height':'100%'};}</script>");
          baseScriptCdn.appendTo('#' + mygallery + ' .carousel-inner');
        }

        /* copy loaded thumbnails into carousel */
        $('#' + mygallery + " .item-gallery-pi").each(function (i) {

        //  if (this.complete) {

                var item = $('<div class="item item-' + i + '"></div>');
                var itemImg = $(this);
                var title = $(this).attr('title');
                var itemVideo= $('<div><iframe class="embed-responsive-item" allowfullscreen="" frameborder="0"  src="" ></iframe></div>');

                item.attr("title", title);

                if ($(this).attr("data-img-big")){
                  $(itemImg.html()).appendTo(item);
                  item.find('img').attr('src', $(this).attr('data-img-big'));
              }
              else if($(this).attr("data-video")){
                  $(itemVideo.html()).appendTo(item);
                  item.find('iframe').attr('rel', $(this).attr('data-video'));
                  item.find('iframe').attr('src', $(this).attr('data-video'));
                  item.find('iframe').wrap( '<div class="embed-responsive embed-responsive-16by9"></div>' );
              }
                else if($(this).attr("data-video-cdn")){
                  var itemVideoCdn=$('<div><video id="pi_video-'+ i +'" class="azuremediaplayer amp-default-skin" controls  poster="/risorse_dt/editoriali/hero/mod-a1-poster-video.jpg" tabindex="0"> </video><div>');
                  var itemVideoCdnExec=$('<div><script>if (!$("html").hasClass("pi-mobile")) {var myPlayer = amp("#pi_video-'+ i +'", myDesktopOptions); myPlayer.src([{ src: "'+ $(this).attr("data-video-cdn") +'", type: "application/vnd.ms-sstr+xml" }, { src: "'+ $(this).attr("data-video-cdn-mp4") +'",type: "video/mp4" }]);}</script></div>');
                  $(itemVideoCdn.html()).appendTo(item);
                  $(itemVideoCdnExec.html()).appendTo(item);
                }

                item.appendTo('#' + mygallery + ' .carousel-inner');

                if (i == 0) { // set first item active
                    item.addClass('active');
                    $('#' + mygallery + ' .modal-title').html(item.attr("title"));
                }
          //  }
        });







        /* activate the carousel */
        $('#modalCarousel-' + mygallery).carousel({
            interval: false
        });

        /* change modal title when slide changes */
        $('#modalCarousel-' + mygallery).on('slid.bs.carousel', function () {
            $('.modal-title').html($(this).find('.active').attr("title"));
        });

        /* stop video - slide panel*/
        $('#modalCarousel-' + mygallery).on('slide.bs.carousel', function () {
          if(  $(this).find('.active').children('.embed-responsive').length>0   ){
           $(this).find('.active .embed-responsive iframe').removeAttr('src');
           $(this).find('.active .embed-responsive iframe').attr('src', $(this).find('.active .embed-responsive iframe').attr('rel'));
          }

          else if($(this).find('.active').children('.azuremediaplayer').length>0){
           var myCDNvideoTarget = $(this).find('.active .azuremediaplayer video').attr('id');
           amp(myCDNvideoTarget).pause();
         }
        });

        /* stop video - hide modal */
        $('div[id^="myModal"]').on('hide.bs.modal', function(e) {
          if($(this).find('#modalCarousel-' + mygallery + ' ' +'.active').children('.embed-responsive').length>0   ){
           $(this).find('#modalCarousel-' + mygallery + ' ' +'.active .embed-responsive iframe').removeAttr('src');
           $(this).find('#modalCarousel-' + mygallery + ' ' +'.active .embed-responsive iframe').attr('src', $(this).find('#modalCarousel-' + mygallery + ' ' +'.active .embed-responsive iframe').attr('rel'));
          }
          else if($(this).find('#modalCarousel-' + mygallery + ' ' +'.active').children('.azuremediaplayer').length>0){
           var myCDNvideoTarget = $(this).find('#modalCarousel-' + mygallery + ' ' +'.active .azuremediaplayer video').attr('id');
           amp(myCDNvideoTarget).pause();
         }
        });

        /* set item position when clicking a thumbnail */
        $('#' + mygallery + " .item-gallery-pi").click(function () {
            var idx = $(this).parents('div').index();
            var id = parseInt(idx);
            $('#modalCarousel-' + mygallery).carousel(id); // slide carousel to selected
        });
    }



    function createThumbSlider(myslidergallery) {
        if ($("#" + myslidergallery + " > .row").length > 0) {
            $("#" + myslidergallery + " > .row").slick({
                infinite: false,
                centerMode: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                touchThreshold: 30,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
				            },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
				            },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
				            }
				        ]
            });
        }
    }
