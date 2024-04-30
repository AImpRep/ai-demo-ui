
/////////////////
// SWITCH CASE //
/////////////////

reset_select('id','bisogno');

// BISOGNO
$('#bisogno').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "carta":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.tipo_pagamento').fadeIn();
                reset_select('id','tipo_pagamento');
                popola_array(id);
                // end
            });
            break;
        case "conto":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions 
                $('.tipo_pagamento').hide();
                popola_array(id);
                // end
            });
            break;
        case "altro":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions 
                $('.tipo_pagamento').hide();
                popola_array(id);
                // end
            });
            break;
    }
});


/// CARTA - tipo pagamento ///

$('#tipo_pagamento').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "pagamenti_quotidiani":
            popola_array(id);
            break;
        case "pagamenti_straordinari":
            popola_array(id);
            break;
        case "online":
            popola_array(id);
            break;      
    }
});
