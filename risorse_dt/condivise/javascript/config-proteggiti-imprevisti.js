
/////////////////
// SWITCH CASE //
/////////////////

reset_select('id','bisogno');

// BISOGNO
$('#bisogno').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "cari":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.in_caso_di').fadeIn();
                $('.beni').hide();
                reset_select('id','in_caso_di');
                popola_array(id);
                // end
            });
            break;
        case "beni":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() { 
                // do actions 
                $('.casa_vettura').fadeIn();
                $('.cari').hide();
                reset_select('id','casa_vettura');
                popola_array(id);
                // end
            });
            break;
    }
});




/// CARI ///

$('#in_caso_di').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "malattia":
            $('.malattia').fadeIn();
            $('.decesso, .danni').hide();
            reset_select('id','malattia');
            popola_array(id);
            break;
        case "decesso":
            $('.decesso').fadeIn();
            $('.malattia, .danni').hide();
            reset_select('id','decesso');
            popola_array(id);
            break;
        case "danni":
            $('.malattia, .decesso').hide();
            popola_array(id);
            break;      
    }
});


$('#malattia').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "rimborso":
            popola_array(id);
            break;
        case "capitale":
            popola_array(id);
            break;
    }
});

$('#decesso').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "capitale":
            popola_array(id);
            break;
        case "rendita":
            popola_array(id);
            break;
    }
});




/// BENI ///

$('#casa_vettura').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "casa":
            popola_array(id);
            break;
        case "vettura":
            popola_array(id);
            break;
    }
});



