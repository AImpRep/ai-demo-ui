function startGalleryPi(mygal){

/* Controllo quante immagini fanno parte della galleria */
  if ($(mygal+" .item-gallery-pi").length>1){
    mygal += " .gallery-pi";
    $(".gallery-pi-primary a").attr('href','#');

    $(".gallery-pi-primary a").on('click',function(e){
        e.preventDefault();
        $(mygal + ' .item-gallery-pi').first().trigger('click');
    });
    //nascondo vetrina su xs onload/resize
  }
  startpwsp(mygal);
  hidePrimaryWindow();

  var timeoutObj;
  $(window).resize(function() {
      clearTimeout(timeoutObj);
      timeoutObj = setTimeout(function() {
          hidePrimaryWindow();
      }, 300);
  });


}

/* Function che gestisce la visualizzazione della vetrina  quando ci sono più immagini in galleria */
function hidePrimaryWindow(){
  if (mq_Detect == "xs") {
    //nascondo vetrina
    $(".gallery-pi-primary").addClass('hide');
  }
  else if (mq_Detect != "xs") {
    //visualizzo vetrina
    $(".gallery-pi-primary").removeClass('hide');
  }
}



function startpwsp(mygal){

    //Trigger Gallery thumbnail click
    $(mygal+" .item-gallery-pi").on('click',function(e){

        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = galleryPi(mygal);
        var options = {
            index: $(mygal+" .item-gallery-pi").index(this), // start at clicked slide
            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].mythumbobj[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            shareEl: false,
            showAnimationDuration: 333,
            showHideOpacity: true,
            closeOnScroll: false,
            closeOnVerticalDrag: false,
            clickToCloseNonZoomable: false,
            closeElClasses:['']
        };
        writeLog('gallery-pi - items length : '+items.length);
        if (items.length >= 1){
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
            writeLog('gallery-pi - start');
            if (items.length == 1){
              $(mygal+" .pswp__button--arrow--left").addClass('hide');
              $(mygal+" .pswp__button--arrow--right").addClass('hide');
            }
            // call event listener
            galleryEventListener(gallery);
        }
    });

  }


function galleryEventListener(gallery){

    galleryVideoController(gallery);

    gallery.listen('close', function() {
        // call stop video
        galleryVideoStop(gallery);
        writeLog('gallery-pi - listener : close');
    });

    gallery.listen('afterChange', function() {
        // call stop video
        galleryVideoStop(gallery);
        galleryVideoController(gallery);
        writeLog('gallery-pi - listener : change panel');
    });

}

function galleryVideoController(gallery){

    if(gallery.currItem.type=='video-cdn'){

        /* Destroy player Amp */
        amp("#cdn-gallery-player_"+ gallery.getCurrentIndex()).dispose();

        /* recovery html */
        var target = document.querySelector('.cdn-hook' + gallery.getCurrentIndex()).parentNode;
        $(target).html(myitems[gallery.getCurrentIndex()].html);

        /* write script */
        var myexec = gallery.currItem.exec;
        var newScript = document.createElement("script");
        var inlineScript = document.createTextNode(myexec);
        $(newScript).html(inlineScript);
        $("#service-storage_"+ gallery.getCurrentIndex()).html(newScript);

        writeLog('gallery-pi - video Cdn : create player');

        /* disabilita prevent default su eventi click player*/
        gallery.listen('preventDragEvent', function(e, isDown, preventObj) {
            preventObj.prevent = false;
        });

    }
    else{
        /* abilita prevent default su eventi che non sono video cdn (permette drag img in fase di zoom)*/
        gallery.listen('preventDragEvent', function(e, isDown, preventObj) {
            preventObj.prevent = true;
        });
    }

}

function galleryVideoStop(gallery){

    if(gallery.currItem.type=='video-yt'){
        writeLog('gallery-pi - call stop video yt');
        $youtube_video_gallery_id = '#youtube-gallery-player_' + gallery.getCurrentIndex();
        $($youtube_video_gallery_id)[0].contentWindow.postMessage('{"event":"command","func":"' + 'mute' + '","args":""}', '*');
        $($youtube_video_gallery_id)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    }
    else if(gallery.currItem.type=='video-cdn'){
        writeLog('gallery-pi - call stop video cdn');
        /*not necessary*/
    }
    else if(gallery.currItem.type=='video-html5'){
        writeLog('gallery-pi - call stop video html5');
        document.getElementById("html5-gallery-player_"+ gallery.getCurrentIndex()).pause();
        document.getElementById("html5-gallery-player_"+ gallery.getCurrentIndex()).currentTime = 0;
    }
}


var myitems = new Array();

function galleryPi(mygallery) {

    $(mygallery + " .item-gallery-pi").each(function (i) {
        var mysrc = $(this).data('src');
        var mysrcfallback = $(this).data('src-fallback');
        var myposter = $(this).data('poster');
        var mywidth = $(this).data('width');
        var myheight = $(this).data('height');
        var mytype = $(this).data('type');
        var mythumbobj = $(this).find('img');
        var mythumbalt = $(this).find('img').attr('alt');
        var exec;

    if(mysrc!=null || mysrc!=undefined){
        switch (mytype) {
            case 'image':
                writeLog('gallery-pi - load type: image');
                myitems[i]={
                    'type': mytype,
                    'title':mythumbalt,
                    'src':mysrc,
                    'w':mywidth,
                    'h':myheight,
                    'mythumbobj':mythumbobj
                };
                break;
            case 'video-yt':
                writeLog('gallery-pi - load type: video yt');
                myitems[i]={
                    'type': mytype,
                    'title':mythumbalt,
                    'html':'<div class="pswp-mode-center"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" id="youtube-gallery-player_'+ i +'" width="560" height="315" src="'+ mysrc +'?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
                    'mythumbobj':mythumbobj
                };
                break;
            case 'video-cdn':
                writeLog('gallery-pi - load type: video cdn');
                myitems[i]={
                    'type': mytype,
                    'title':mythumbalt,
                    'html':'<div class="pswp-mode-center cdn-hook'+ i +'"><div class="embed-responsive embed-responsive-16by9"><video src="'+ mysrcfallback +'" id="cdn-gallery-player_'+ i +'" class="azuremediaplayer amp-default-skin embed-responsive-item" controls poster="'+myposter+'" tabindex="0"> </video></div><div id="service-storage_'+ i +'" class="service-storage-element"></div></div>',
                    'exec':'var myPlayer'+ i +' = amp("#cdn-gallery-player_'+ i +'", myDesktopOptions); myPlayer'+ i +'.src([{ src: "'+ mysrc +'", type: "application/vnd.ms-sstr+xml" }, { src: "'+ mysrcfallback +'",type: "video/mp4" }]);',
                    'mythumbobj':mythumbobj
                    }
                break;
            case 'video-html5':
                writeLog('gallery-pi - load type: video html5');
                myitems[i]={
                    'type': mytype,
                    'title':mythumbalt,
                    'html':'<div class="pswp-mode-center"><div class="embed-responsive embed-responsive-16by9"><video class="embed-responsive-item" src="'+ mysrc +'" id="html5-gallery-player_'+ i +'" controls poster="'+myposter+'" tabindex="0"> </video></div></div>',
                    'mythumbobj':mythumbobj
                    }
                break;
            default:
                myitems[i]={
                    'type': mytype,
                    'title':mythumbalt,
                    'src':mysrc,
                    'w':mywidth,
                    'h':myheight,
                    'mythumbobj':mythumbobj
                };
                writeLog('gallery-pi - load type: no type');
        }
    }

    });

    return myitems;
}
