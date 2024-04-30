/////////////////

// SWITCH CASE //

/////////////////



reset_select('id', 'bisogno');



// BISOGNO

$('#bisogno').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "spedire":

            $('html, body').animate({

                scrollTop: $('div.configuratore').offset().top - federation_bar

            }, function() {

                // do actions

                $('.spedire.territorio').fadeIn();

                $('.ricevere, .spedire_cosa').hide();

                reset_select('id', 'spedire_territorio');

                popola_array(id);

                // end

            });

            break;

        case "ricevere":

            $('html, body').animate({

                scrollTop: $('div.configuratore').offset().top - federation_bar

            }, function() {

                // do actions

                $('.ricevere.territorio').fadeIn();

                $('.spedire, .ricevere.luogo_consegna, .ricevere.casella_postale').hide();

                reset_select('id', 'ricevere_territorio');

                popola_array(id);

                // end

            });

            break;

    }

});









/// RICEVERE ///



// TERRITORIO

$('#ricevere_territorio').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "italia":

            $('.ricevere.luogo_consegna').fadeIn();

            $('.ricevere.casella_postale').hide();

            reset_select('id', 'luogo_consegna');

            popola_array(id);

            break;

        case "estero":

            $('.ricevere.luogo_consegna, .ricevere.casella_postale').hide();

            reset_select('id', 'luogo_consegna');

            popola_array(id);

            break;

    }

});



// LUOGO CONSEGNA

$('#ricevere_luogo_consegna').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "mio_indirizzo":

            $('.ricevere.casella_postale').hide();

            popola_array(id);

            break;

        case "ufficio_postale":

            $('.ricevere.casella_postale').fadeIn();

            reset_select('id', 'ricevere_casella_postale');

            popola_array(id);

            break;

    }

});



// CASELLA POSTALE

$('#ricevere_casella_postale').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "con_casella_postale":

            popola_array(id);

            break;

        case "senza_casella_postale":

            popola_array(id);

            break;

    }

});





















/// SPEDIRE ///





// TERRITORIO

$('#spedire_territorio').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "italia":

            $('.spedire.cosa').fadeIn();

            $('.spedire.estero, .spedire.online').hide();

            reset_select('id', 'spedire_cosa');

            popola_array(id);

            break;

        case "estero":

            $('.tipo_spedizione_estero').fadeIn();

            $('.spedire.italia, .spedire.online').hide();

            reset_select('id', 'tipo_spedizione_estero');

            popola_array(id);

            break;

        case "online":

            $('.spedire.cosa_online').fadeIn();

            $('.spedire.italia, .spedire.estero').hide();

            reset_select('id', 'spedire_cosa_online');

            popola_array(id);

    }

});



// LETTERA O PACCO

$('#spedire_cosa').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "pacco":

            $('.spedire.pacco.tipo_spedizione').fadeIn();

            $('.spedire.lettera').hide();

            reset_select('id', 'spedire_pacco_tipo_spedizione');

            popola_array(id);

            break;

        case "lettera":

            $('.spedire.lettera.valore_legale').fadeIn();

            $('.spedire.pacco').hide();

            reset_select('id', 'lettera_valore_legale');

            popola_array(id);

            break;

    }

});



// LETTERA O PACCO (ONLINE)

$('#spedire_cosa_online').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "pacco":

            popola_array(id);

            break;

        case "lettera":

            popola_array(id);

            break;

    }

});



//  TIPO DI SPEDIZIONE PACCO

$('#spedire_pacco_tipo_spedizione').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "veloce":

            $('.spedire.pacco.veloce_preaffrancato').fadeIn();

            $('.spedire.pacco.standard_preaffrancato').hide();

            reset_select('id', 'spedire_pacco_veloce_preaffrancato');

            popola_array(id);

            break;

        case "standard":

            $('.spedire.pacco.standard_preaffrancato').fadeIn();

            $('.spedire.pacco.veloce_preaffrancato').hide();

            reset_select('id', 'spedire_pacco_standard_preaffrancato');

            popola_array(id);

            break;

    }

});



// PACCO VELOCE PREAFFRANCATO si/no

$('#spedire_pacco_veloce_preaffrancato').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "preaffrancato":

            popola_array(id);

            break;

        case "no_preaffrancato":

            popola_array(id);

            break;

    }

});



// PACCO STANDARD PREAFFRANCATO si/no

$('#spedire_pacco_standard_preaffrancato').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "preaffrancato":

            popola_array(id);

            break;

        case "no_preaffrancato":

            popola_array(id);

            break;

    }

});



// VALORE LEGALE LETTERA si/no

$('#lettera_valore_legale').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "valore_legale":

            $('.spedire.lettera.tipo_spedizione_valore_legale').fadeIn();

            $('.spedire.da_dove, .spedire.tipo_spedizione_no_valore_legale').hide();

            reset_select('id', 'lettera_tipo_spedizione_valore_legale');

            popola_array(id);

            break;

        case "no_valore_legale":

            $('.spedire.lettera.tipo_spedizione_no_valore_legale').fadeIn();

            $('.spedire.da_dove, .spedire.tipo_spedizione_valore_legale').hide();

            reset_select('id', 'lettera_tipo_spedizione_no_valore_legale');

            popola_array(id);

            break;

    }

});



// TIPO SPEDIZIONE DELLA LETTERA CON VALORE LEGALE

$('#lettera_tipo_spedizione_valore_legale').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "veloce":

            popola_array(id);

            $('.spedire.da_dove').hide();

            reset_select('id', 'lettera_da_dove');

            break;

        case "standard":

            $('.spedire.da_dove').fadeIn();

            reset_select('id', 'lettera_da_dove');

            popola_array(id);

            break;

    }

});





// DA DOVE SPEDIRE LETTERA CON VALORE LEGALE

$('#lettera_da_dove').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "da_casa":

            popola_array(id);

            break;

        case "da_up":

            popola_array(id);

            break;

    }

});





// TIPO SPEDIZIONE DELLA LETTERA SENZA VALORE LEGALE

$('#lettera_tipo_spedizione_no_valore_legale').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "veloce":

            popola_array(id);

            break;

        case "standard":

            popola_array(id);

            break;

    }

});







// TIPO DI SPEDIZIONE ALL'ESTERO

$('#tipo_spedizione_estero').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "veloce":

            $('.preaffrancata').fadeIn();

            $('.spedire.estero.standard, .spedire.estero.economico').hide();

            reset_select('id', 'estero_preaffrancata');

            popola_array(id);

            break;

        case "standard":

            $('.standard_peso').fadeIn();

            $('.estero.veloce, .estero.economico').hide();

            reset_select('id', 'standard_peso');

            popola_array(id);

            break;

        case "economico":

            $('.economico_peso').fadeIn();

            $('.estero.veloce, .estero.standard').hide();

            reset_select('id', 'economico_peso');

            popola_array(id);

            break;

    }

});





// SPEDIZIONE ESTERA PREAFFRANCATA si/no

$('#estero_preaffrancata').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "preaffrancata":

            popola_array(id);

            break;

        case "no_preaffrancata":

            popola_array(id);

            break;

    }

});



// PESO SP. ESTERA STANDARD

$('#standard_peso').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "minore_2kg":

            $('.standard_tracking').fadeIn();

            reset_select('id', 'standard_tracking');

            popola_array(id);

            break;

        case "maggiore_2kg":

            $('.standard_tracking').hide();

            popola_array(id);

            break;

    }

});



// TRACKING ESTERA STANDARD

$('#standard_tracking').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "tracciata":

            popola_array(id);

            break;

        case "non_tracciata":

            popola_array(id);

            break;

    }

});



// PESO SP. ESTERA ECONOMICA

$('#economico_peso').change(function() {

    id = $(this).attr('id');

    valore_select = $(this).val();

    switch (valore_select) {

        case "minore_2kg":

            popola_array(id);

            break;

        case "maggiore_2kg":

            popola_array(id);

            break;

    }

});