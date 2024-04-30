/**************************************************************

    Corporate js - (c) Poste Italiane 2017 - GD//FS//DU

***************************************************************/

/* function underline link */

function underlineLink(myunderlineclass){
    $('.box-editable-area a').not('.btn').addClass(myunderlineclass);
    $('.panel-cards .panel-body a').not('.btn-card').not('.nav-element').addClass(myunderlineclass);
    $('.list-file li a').addClass(myunderlineclass)
}





/* function do_Lang (temporanea) chiamata su dom ready */

function do_Lang(){
  if ($('.content-header-federation-bar .federation-bar-wrap-right .pi-targetarea').length > 0){
      $('.content-header-federation-bar .federation-bar-wrap-right .pi-targetarea').each(function(){

          $('.navbar-default .submenu-mobile').css('margin-top','3px');

          if($(this).text().trim().toLowerCase()=='english'){

            var lang_flag = '<img width="18px" alt="English" src="data:image/png;base64,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" />';

            $('<li class="dropdown dropdown-windowbox lang_switch lang_en"><a title="English" class="pi-targetarea dropdwon-toggle" href="https://www.posteitaliane.it/en/index.html">'+lang_flag+'</a></li>').appendTo('.navbar-default .submenu-mobile');
          }
          if($(this).text().trim().toLowerCase()=='italiano'){

            var lang_flag = '<img width="18px" alt="Italiano"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAt+wAALfsB/IdK5wAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAASJSURBVFiFxZjbbxRVHMc/OzuXvXTb3e12e6NdKdCWGFsilxgFSgteI1AJGCOvRsEX9cEY/wJDNNEHE2J8U4jxgRBoSEwEISKBLoIVG5ci95Z23W532+6tOzM740NbgYbSXe12v8m8zDlzzud3zu/M73d+FgpXk8/n62xtbd0pSVK7pml+XdcVAFEUs5IkRVRVvTIwMHAsGo2eAm4VMrglz34SsBOPbf/qhpUrujZ12NeuXetqbGxUfD6f4HK5kGWZRCJBOBw2QqGQ2tfXl7zc25sY+fPq9WFdPQj0AHpBps+jLjy2S7T5x3i73Tx/u9/MV8O9F80DtcvNF8q90XpZuQBsXWgy8TFtDlzyp9SWdbMlUEezF0TTLCtzmoCQjyVut9vY5vJYnqvwVvamE5XfRkcO3clmeuI5/X0gXQiQnwrlKOtq29nc6MRjA9MEMwf5b/O/fR2ClU6Xh1abo+ab6Mje04l4S0RTdwOjcz94lKVVeGwn2NT4DK+snIZZJNVKCu/6Gxxvems2+iX5B8C/EJCDCuUIHYGn2dwgIOW1MwXJZbXyRmW1sLeyZo1fkr8H7PMDOaUDtFevY+MyAdvj3Ov/SbYI7PL4he1u34YKq/j5fEBbCFS8RlfAjmwtGsysnIKV173VjnpZ2Q08PxdIxGs7wLPL6vHaHz1CEVQlyrxVVV9ZLcmfMHPAZoG6aahoptm7ZDCz2uLy0GZ3NQHb7wO5bfvYUOcupt88Tq+6fZ5aSXlnFmgFTqmZ1sqSwAC0O8rwiGILsFzAKW2j3uUsxhHPV+VWkVab0+W2ilsFqhw7aCh3lIxmRqvtTucTin2HgCg8RV2ZUmqggGxTFEFoE8iZflxyIfGpKPJLskU3zWoBw1SQiv8jXEgOwYpmGjZhOoqbpebBMvMIQBbdKDEOJI0cApYpAdEaJaGWfIkimmpKFktEIGdc4V5CLTXQXXUqq5rm7wLR9DGGk6lSA4UyqdTtbOa4QEo7yeBkCjVXMpiJnE4ok0qO5/RTAnCDtHaVv2IlA/ojk2Q8p4eAW9MBLD51kOBwnKlFuTYVrOPx0fERLfs13M+HergzeY1rS7tKJnAuOc6VTPImcPxBIJ1Y5mPODo4QyywZUFjL8lXkXjSiqR8xc6t9MOc4zdDkUc7czSyFg6eMHIfHwplBdeoIcHL2/cNJUEr7kN/CQX4ZMorpT7ppcjQeMX6ciF2cyOkfPNg2NytLM5Hdw5k7ffw8aJBb/JCSyOX4LhY2Do2F+0Z1dQ/wkI88Kk0cZXzqZc7ePceJ6yniU4sG87em8mVkMH14LPxLRFNfAiJz+8yX1UeYyL5I7/Bn3JrYRUdjDasrp4sy04cj3/zJBCwZw6A3PcnhsZHwzWymJ67r7zFnZQpRFx7bZZ6sirFvjRkcCuVdjgkHL5lf1K8wt5Z7onWSEgQ6F5osX0tFoBuPbX9rfdPKzk0d9vXr15etWrVKCQQCgs/nQ9M0YrEYQ0NDRn9/vxoMBpO/nr+QHrt+Y6CQgtV/SV2bfD5fZ0tLS7csy20LlPR+Am4WMvg/QX0LZmMex9gAAAAASUVORK5CYII=" />';

            $('<li class="dropdown dropdown-windowbox lang_switch lang_it"><a title="Italiano" class="pi-targetarea dropdwon-toggle" href="https://www.posteitaliane.it/it/index.html">'+lang_flag+'</a></li>').appendTo('.navbar-default .submenu-mobile');
          }

      });
  }
}



/* controllo esecuzioni e variabili globali */
var execCircleProgress = false;


/* Contatore */
function progressCounter(myContainerCounter, duration) {
    $(myContainerCounter).each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: duration,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}


/* Circle ProgressBar */
function startCircleProgressBar() {


    var pT = $('.progress').offset().top,
        pH = $('.progress').outerHeight(),
        pwH = $(window).height(),
        pwS = $(this).scrollTop();


    if ((pwS > (pT + pH - pwH)) && (execCircleProgress == false)) {
        var circle1 = new ProgressBar.Circle('#progress1', {
            color: '#eedc00',
            duration: 3000,
            easing: 'easeInOut',
            strokeWidth: 3
        });
        circle1.animate(0.75);

        var circle2 = new ProgressBar.Circle('#progress2', {
            color: '#eedc00',
            duration: 3000,
            easing: 'easeInOut',
            strokeWidth: 3
        });
        circle2.animate(0.55);

        var circle3 = new ProgressBar.Circle('#progress3', {
            color: '#eedc00',
            duration: 3000,
            easing: 'easeInOut',
            strokeWidth: 3
        });
        circle3.animate(0.44);

        /* avvio contatore */
        progressCounter('.progress-count', 3000);
        /* aggiorgno controllo esecuzione */
        execCircleProgress = true;
    }
}


/* Carousel thumb */
function startCarouselThumb() {

    if ($('#carousel-home-fullpage').length > 0) {
        var img_thumb_car_1st = $('#carousel-home-fullpage .carousel-inner .item:first').style('background-image');
        $('#carousel-home-fullpage .carousel-inner').append('<span class="thumb_car_counter bold" style="color: #fff; position:absolute; bottom: 10px; left: 9%"><span class="thumb_car_pg">1</span>/' + $('#carousel-home-fullpage .carousel-inner .item').length + '</span>');

        $('#carousel-home-fullpage .carousel-inner .item').each(function (index) {

            var thumb_car_open = '<a class="carousel-fullpage-thumb-link" style="border: 1px solid #fff; width: 200px; height: 200px; position: absolute; right: 0; bottom: 0;" href="#carousel-home-fullpage" data-slide="next"><div class="img_thumb_car_next" style="background-image: ';
            var thumb_car_close = ' ; background-size: cover; width: 198px; height: 198px;"></div></a>';

            if (index < $('#carousel-home-fullpage .carousel-inner .item').length - 1) {
                var img_thumb_car_next = $(this).next().style('background-image');
            }

            $(this).find('.container').addClass('relative');

            if (index < $('#carousel-home-fullpage .carousel-inner .item').length - 1) {
                $(this).find('.container').append(thumb_car_open + encodeURI(img_thumb_car_next).replace(/%22/g, "") + thumb_car_close);
            } else {
                $(this).find('.container').append(thumb_car_open + encodeURI(img_thumb_car_1st).replace(/%22/g, "") + thumb_car_close);
            }
        });

        $('#carousel-home-fullpage').bind('slide.bs.carousel', function (e) {
            if ($('.carousel-indicators:first-child li.active')) {
                $('.thumb_car_pg').html(Number($('.carousel-indicators li.active').attr('data-slide-to')) + 2);
            } else {

                $('.thumb_car_pg').html(Number($('.carousel-indicators li.active').attr('data-slide-to')) + 1);
            }
        });
    }
}


/************ Carousel FullPage ************/

function startCarouselFullpage() {
    var myItemFullpage = $('.carousel-fullpage .item');
    var myItemFullpageText = $('.carousel-fullpage .item .carousel-text');
    var myHeightwindow = 0;
    if ($('#homepage-corporate').length > 0) {
        var myHeightwindow = $(window).height();
    } else {
        var myHeightwindow = $(window).height() - $('.content-header-federation-bar').outerHeight();
    }
    //myItemFullpage.eq(0).addClass('active');
    myItemFullpage.height(myHeightwindow);
    myItemFullpageText.height(myHeightwindow);
    //myItemFullpage.addClass('full-screen');

    $(window).on('resize', function () {
        //if ($('#homepage-corporate').length > 0) {
        //    myHeightwindow = $(window).height();
        //} else {
            myHeightwindow = $(window).height() - $('.content-header-federation-bar').outerHeight();
        //}
        myItemFullpage.height(myHeightwindow);
        myItemFullpageText.height(myHeightwindow);
    });
}




    




/************ On ready ************/

$(document).ready(function () {

    /* Start thumb carousel */
    /* startCarouselThumb(); */

    /* Start carousel fullpage */
    if ($('.carousel-fullpage').length > 0) {
        startCarouselFullpage();
    }

    do_Lang();

    underlineLink('underline-link');


});


/************ On Scroll ************/

$(window).scroll(function () {
    /* Start Circle ProgressBar */
    if ($('.progress-circle').length > 0) {
        startCircleProgressBar();
    }

});


/************ On Resize ************/

/* ricalcola menu_corp clonato al resize */
var resizeTimer_cp;

$(window).on('resize', function (e) {
    clearTimeout(resizeTimer_cp);
    resizeTimer_cp = setTimeout(function () {

      //...

    }, 10);
});





