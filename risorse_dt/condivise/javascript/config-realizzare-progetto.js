
/////////////////
// SWITCH CASE //
/////////////////

reset_select('bisogno');

// BISOGNO
$('#bisogno').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "acquistare_casa":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.importo').hide();
                $('.acquistare_casa.importo').fadeIn();
                reset_select('class','select_importo');
                popola_array(id);   
                // end
            });
            break;
        case "ristrutturare_casa":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.importo').hide();
                $('.ristrutturare_casa.importo').fadeIn();
                reset_select('class','select_importo');
                popola_array(id);
                // end
            });
            break;
        case "arredare_casa":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.importo').hide();
                $('.arredare_casa.importo').fadeIn();
                reset_select('class','select_importo');
                popola_array(id);
                // end
            });
            break;
        case "acquistare_veicolo":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.importo').hide();
                $('.acquistare_veicolo.importo').fadeIn();
                reset_select('class','select_importo');
                popola_array(id);
                // end
            });
            break;
        case "semplificare_impegni":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.importo').hide();
                $('.semplificare_impegni.importo').fadeIn();
                reset_select('class','select_importo');
                popola_array(id);
                // end
            });
            break;
        case "cambiare_mutuo":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.importo').hide();
                $('.cambiare_mutuo.importo').fadeIn();
                reset_select('class','select_importo');
                popola_array(id);
                // end
            });
            break;
        case "tempo_libero":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.importo').hide();
                $('.tempo_libero.importo').fadeIn();
                reset_select('class','select_importo');
                popola_array(id);
                // end
            });
            break;
        case "liquidita":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.importo').hide();
                $('.liquidita.importo').fadeIn();
                reset_select('class','select_importo');
                popola_array(id);
                // end
            });
            break;
        case "motivi_personali":
            $('html, body').animate({
                scrollTop: $('div.configuratore').offset().top - federation_bar
            }, function() {
                // do actions
                $('.importo').hide();
                $('.motivi_personali.importo').fadeIn();
                reset_select('class','select_importo');
                popola_array(id);
                // end
            });
            break;    
    }
});




///  ///

$('#acquistare_casa_importo').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "ac_x_min_10":
            popola_array(id);
            break;
        case "ac_10_min_x_min_50":
            popola_array(id);
            break;
        case "ac_50_min_x_min_60":
            popola_array(id);
            break;      
        case "ac_x_mag_60":
            popola_array(id);
            break;
    }
});

$('#ristrutturare_casa_importo').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "ri_x_min_10":
            popola_array(id);
            break;
        case "ri_10_min_x_min_15":
            popola_array(id);
            break;
        case "ri_15_min_x_min_50":
            popola_array(id);
            break;
        case "ri_50_min_x_min_60":
            popola_array(id);
            break;      
        case "ri_x_mag_60":
            popola_array(id);
            break;
    }
});

$('#arredare_casa_importo').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "ar_x_min_3":
            popola_array(id);
            break;
        case "ar_3_min_x_min_10":
            popola_array(id);
            break;
        case "ar_10_min_x_min_30":
            popola_array(id);
            break;      
        case "ar_x_mag_30":
            popola_array(id);
            break;
    }
});

$('#acquistare_veicolo_importo').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "av_x_min_3":
            popola_array(id);
            break;
        case "av_3_min_x_min_30":
            popola_array(id);
            break;
        case "av_x_mag_30":
            popola_array(id);
            break;      
    }
});

$('#semplificare_impegni_importo').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "se_3_min_x_min_15":
            popola_array(id);
            break;
        case "se_15_min_x_min_30":
            popola_array(id);
            break;
        case "se_30_min_x_min_50":
            popola_array(id);
            break;      
    }
});

$('#cambiare_mutuo_importo').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "mu_15_min_x_min_50":
            popola_array(id);
            break;
        case "mu_x_mag_ugu_50":
            popola_array(id);
            break;    
    }
});

$('#tempo_libero_importo').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "te_x_min_3":
            popola_array(id);
            break;
        case "te_3_min_x_min_30":
            popola_array(id);
            break;    
        case "te_x_mag_30":
            popola_array(id);
            break;   
    }
});

$('#liquidita_importo').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "li_x_min_3":
            popola_array(id);
            break;
        case "li_3_min_x_min_5":
            popola_array(id);
            break;      
    }
});

$('#motivi_personali_importo').change(function() {
    id = $(this).attr('id');
    valore_select = $(this).val();
    switch (valore_select) {
        case "mo_x_min_3":
            popola_array(id);
            break;
        case "mo_3_min_x_min_30":
            popola_array(id);
            break;
        case "mo_x_mag_30":
            popola_array(id);
            break;      
    }
});

