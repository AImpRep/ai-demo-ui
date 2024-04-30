/********/
   /* Carousel bisogni homepage  */
   /********/

   $(".webview-scroller-slick").slick({
      dots: false,
      infinite: true,
      centerMode: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      touchThreshold: 30,
      variableWidth: true,
      arrows: false,
      dots: true,
      responsive: [
         {
            breakpoint: 376,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });

   slick_arrows();