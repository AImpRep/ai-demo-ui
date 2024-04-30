
  /**********  Crea carosello scheda  ***********/
    function createThumbSlider (myslidergallery) {
        if ($("#" + myslidergallery + " > .row").length > 0) {
            $("#" + myslidergallery + " > .row").slick({
                //touchThreshold: 30,
                //arrows: true,
                //dots: false,
                //centerMode: true,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
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
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
				            }
				        ]
            });
        }
    }