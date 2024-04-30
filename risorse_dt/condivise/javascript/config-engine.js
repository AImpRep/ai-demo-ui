var federation_bar = $('.content-federation-bar-minified').outerHeight();

function autoscroll() {
    $('.config-container-wrap').animate({
        scrollTop: $('.config-container-wrap').prop('scrollHeight')
    }, 1000);
}

var somma_filtri = [];

function popola_array(x) {

    // scrivo il valore selezionato dalla select nell'array; la posizione è quella dichiarata in data-array.
    somma_filtri[$('#' + x).attr("data-array")] = valore_select;

    var taglia_da = parseInt($('#' + x).attr("data-array")) + 1;

    somma_filtri.splice(taglia_da);

    var lista_classi = (function() {
        var str = '';
        somma_filtri.forEach(function(i, index) {
            str += i;
            if (index != (somma_filtri.length - 1)) {
                str += '.';
            };
        });
        lista_classi = "." + str;
        return lista_classi;
    })();

    var selezione = ($('.prodotti .configtag').filter("" + lista_classi + ""));
    var selezione_finale = $('.prodotti .configtag').not(selezione);

    $('.prodotti .over').show();
    $('#myModalLoading').modal('show');

    $('.prodotti .configtag').show();
    $(selezione_finale).hide();

    setTimeout(function() {
        $('.prodotti .over').fadeOut('fast');
        equalizeCycle('.equalize-group', '.panel-cards', true);
        $('#myModalLoading').modal('hide');
        autoscroll();
    }, 1500);

    $(".content-main").css('display', 'block');

};

function reset_select(x, y) {
    if (x == 'id') {
        $('#' + y).prop('selectedIndex', 0);
    } else if (x == 'class') {
        $('.' + y).prop('selectedIndex', 0);
    }
    customSelect();
};

function showCard() {
    //verifica classi card
    $('.prodotti .configtag').each(function() {
        var mycardclass = $(this).attr('data-product');
        $(this).children().find('h4').html(mycardclass);
    });
    //mostra filtro applicato
    //$('.risultato').css('display', 'block');
};


$(document).ready(function() {
    showCard();
    $(".configlist").css('display', 'none');
    $('.config-row.bisogno').fadeIn();
});
