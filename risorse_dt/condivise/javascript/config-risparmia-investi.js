/////////////////
// SWITCH CASE //
/////////////////

reset_select('id', 'bisogno');

// BISOGNO
$('#bisogno').change(function () {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
    case "capitale":
        $('html, body').animate({
            scrollTop: $('div.configuratore').offset().top - federation_bar
        }, function () {
            $('.capitale.risparmiato').fadeIn();
            $('.mercati_finanziari').hide();
            reset_select('id', 'capitale_risparmiato');
            popola_array(id);
        });
        break;
    case "mercati_finanziari":
        $('html, body').animate({
            scrollTop: $('div.configuratore').offset().top - federation_bar
        }, function () {
            $('.mercati_finanziari.protezione_assicurativa').fadeIn();
            $('.capitale').hide();
            reset_select('id', 'protezione_assicurativa');
            popola_array(id);
        });
        break;
    }
});




/// CAPITALE ///

// risparmiato si/no
$('#capitale_risparmiato').change(function () {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
    case "gia_risparmiato":
        $('.capitale.liquidazione_gia_risparmiato').fadeIn();
        $('.capitale.liquidazione_non_risparmiato').hide();
        reset_select('id', 'liquidazione_gia_risparmiato');
        popola_array(id);
        break;
    case "non_risparmiato":
        $('.capitale.liquidazione_non_risparmiato').fadeIn();
        $('.capitale.liquidazione_gia_risparmiato').hide();
        reset_select('id', 'liquidazione_non_risparmiato');
        popola_array(id);
        break;
    }
});


// liquidazione
$('#liquidazione_gia_risparmiato').change(function () {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
    case "periodica":
        popola_array(id);
        break;
    case "a_scadenza":
        popola_array(id);
        break;
    }
});

$('#liquidazione_non_risparmiato').change(function () {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
    case "periodica":
        popola_array(id);
        break;
    case "a_scadenza":
        popola_array(id);
        break;
    }
});







/// MERCATI FINANZIARI ///


// protezione assicurativa
$('#protezione_assicurativa').change(function () {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
    case "protezione_assicurativa":
        $('.mercati_finanziari').fadeIn();
        $('.mercati_finanziari.gestione_capitale_no_ass').hide();
        reset_select('id', 'gestione_capitale_ass');
        popola_array(id);
        break;
    case "no_protezione_assicurativa":
        $('.mercati_finanziari').fadeIn();
        $('.mercati_finanziari.gestione_capitale_ass').hide();
        reset_select('id', 'gestione_capitale_no_ass');
        popola_array(id);
        break;
    }
});

// gestione capitale
$('#gestione_capitale_ass').change(function () {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
    case "proteggere_capitale":
        popola_array(id);
        break;
    case "gestione_dinamica_capitale":
        popola_array(id);
        break;
    }
});

$('#gestione_capitale_no_ass').change(function () {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
    case "proteggere_capitale":
        popola_array(id);
        break;
    case "gestione_dinamica_capitale":
        popola_array(id);
        break;
    }
});