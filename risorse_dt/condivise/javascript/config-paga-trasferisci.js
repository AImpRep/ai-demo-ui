
/////////////////
// SWITCH CASE //
/////////////////

reset_select('id','bisogno');

// BISOGNO
$('#bisogno').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "pagamento":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.metodo_pagamento').fadeIn();
                reset_select('id','metodo_pagamento');
                $('.trasferimento').hide();
                popola_array(id);
                // end
            });
            break;
        case "trasferimento":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.zona').fadeIn();
                reset_select('id','zona');
                $('.pagamento').hide();
                popola_array(id);
                // end
            });
            break;
    }
});


/// PAGAMENTO - metodo pagamento ///

$('#metodo_pagamento').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "conto":
            popola_array(id);
            break;
        case "carta":
            popola_array(id);
            break;    
    }
});

/// TRASFERIMENTO italia/estero ///

$('#zona').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "italia":
            $('.italia').fadeIn();
            reset_select('id','italia');
            $('.estero').hide();
            popola_array(id);
            break;
        case "estero":
            $('.estero').fadeIn();
            reset_select('id','estero');
            $('.italia').hide();
            popola_array(id);
            break;    
    }
});

// italia
$('#italia').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "italia_online":
            popola_array(id);
            break;
        case "italia_offline":
            popola_array(id);
            break;    
    }
});


// estero
$('#estero').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "estero_online":
            popola_array(id);
            break;
        case "estero_offline":
            popola_array(id);
            break;    
    }
});