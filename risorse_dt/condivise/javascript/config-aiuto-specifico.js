
var federation_bar = $('.content-federation-bar-minified').outerHeight();


    Array.prototype.contains = function (x) {
        for (i in this) {
            if (this[i] == x) return true;
        }
        return false;
    }

    function autoscroll() {
        $('.config-container-wrap').animate({
            scrollTop: $('.config-container-wrap').prop('scrollHeight')
        }, 1000);
    }

    function reset_select(x,y) {
        if (x == 'id') {
            $('#' + y).prop('selectedIndex', 0);
        } else if (x == 'class') {
            $('.' + y).prop('selectedIndex', 0);
        }
        customSelect();
    };

    function reset_configuratore() {
        $('.config-row').hide();
        $('select').prop('selectedIndex', 0);
        $('.numero').hide();
        $('.numero_sezione').hide();
        $('.config-row.bisogno').fadeIn();
    }

    function mostra_numeri(x) {
        $(x).change(function() {
            $('.numero').hide();
            valore_select = $(x).val();
            $('.' + valore_select).fadeIn();
        });
    }



var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {


            
  }, 300);
});
























        $('.config-row.bisogno').fadeIn();
        $('.numero').hide();

        /////////////////
        // SWITCH CASE //
        /////////////////

        reset_select('id', 'bisogno');



        // BISOGNO

        $('#bisogno').change(function () {
            id = $(this).attr('id');
            valore_select = $(this).val();
            switch (valore_select) {
            case "bancoposta":
                    $('.postevita, .servizipostali, .postemobile, .postesalute, .postepay, .mistralair').hide();
                    $('.numero').hide();
                    $('.bancoposta_tipo_assistenza').fadeIn();
                    reset_select('id', 'bancoposta_tipo_assistenza');
                break;
            case "postevita":
                    $('.bancoposta, .servizipostali, .postemobile, .postesalute, .postepay, .mistralair').hide();
                    $('.numero').hide();
                    $('.postevita_tipo_assistenza').fadeIn();
                    reset_select('id', 'postevita_tipo_assistenza');
                break;
            case "servizipostali":
                    $('.postevita, .bancoposta, .postemobile, .postesalute, .postepay, .mistralair').hide();
                    $('.numero').hide();
                    $('.n_servizipostali').fadeIn();
                break;
            case "postemobile":
                    $('.bancoposta, .postevita, .servizipostali, .postesalute, .postepay, .mistralair').hide();
                    $('.numero').hide();
                    $('.postemobile_tipo_assistenza').fadeIn();
                    reset_select('id', 'postemobile_tipo_assistenza');
                break;
            case "postesalute":
                    $('.bancoposta, .postevita, .servizipostali, .postemobile, .postepay, .mistralair').hide();
                    $('.numero').hide();
                    $('.n_postesalute').fadeIn();
                break;
            case "postepay":
                    $('.bancoposta, .postevita, .servizipostali, .postemobile, .postesalute, .mistralair').hide();
                    $('.numero').hide();
                    $('.postepay_tipo_assistenza').fadeIn();
                    reset_select('id', 'postepay_tipo_assistenza');
                break;
            case "mistralair":
                    $('.bancoposta, .postevita, .servizipostali, .postesalute, .postepay, .postepay').hide();
                    $('.numero').hide();
                    $('.mistralair_tipo_assistenza').fadeIn();
                    reset_select('id', 'mistralair_tipo_assistenza');
                break;
            }
        });




        // BANCOPOSTA

        $('#bancoposta_tipo_assistenza').change(function () {
            id = $(this).attr('id');
            valore_select = $(this).val();
            switch (valore_select) {
            case "bancoposta_assistenza_generica":
                    $('.bancoposta_contestazioni_addebito_carta, .bancoposta_smarrimento_furto_carta').hide();
                    reset_select('id', 'bancoposta_assistenza_generica_dove');
                    $('.numero').hide();
                    $('.bancoposta_assistenza_generica_dove').fadeIn();
                break;
            case "bancoposta_contestazioni_addebito":
                    $('.bancoposta_assistenza_generica_dove, .bancoposta_smarrimento_furto_carta').hide();
                    reset_select('id', 'bancoposta_contestazioni_addebito_carta');
                    $('.numero').hide();
                    $('.bancoposta_contestazioni_addebito_carta').fadeIn();
                break;
            case "bancoposta_smarrimento_furto_carta":
                    $('.bancoposta_assistenza_generica_dove, .bancoposta_contestazioni_addebito_carta').hide();
                    reset_select('id', 'bancoposta_smarrimento_furto_carta');
                    $('.numero').hide();
                    $('.bancoposta_smarrimento_furto_carta').fadeIn();
                break;
            }
        });


        mostra_numeri('#bancoposta_assistenza_generica_dove');

        mostra_numeri('#bancoposta_contestazioni_addebito_carta');

        mostra_numeri('#bancoposta_smarrimento_furto_carta');






        // POSTEVITA

        mostra_numeri('#postevita_tipo_assistenza');




        // POSTEMOBILE

        $('#postemobile_tipo_assistenza').change(function () {
            id = $(this).attr('id');
            valore_select = $(this).val();
            switch (valore_select) {
            case "servizio_clienti":
                    $('.postemobile_nonudenti_come, .postemobile_nonudenti_fax_dove').hide();
                    reset_select('id', 'postemobile_servizioclienti_dove');
                    $('.numero').hide();
                    $('.postemobile_servizioclienti_dove').fadeIn();
                break;
            case "non_udenti":
                    $('.postemobile_servizioclienti_dove').hide();
                    reset_select('id', 'postemobile_nonudenti_come');
                    $('.numero').hide();
                    $('.postemobile_nonudenti_come').fadeIn();
                break;
            case "servizio_faidate":
                    $('.postemobile_servizioclienti_dove, .postemobile_nonudenti_come, .postemobile_nonudenti_fax_dove').hide();
                    $('.numero').hide();
                    $('.servizio_faidate').fadeIn();
                break;
            }
        });

        mostra_numeri('#postemobile_servizioclienti_dove');

        $('#postemobile_nonudenti_come').change(function () {
            id = $(this).attr('id');
            valore_select = $(this).val();
            switch (valore_select) {
            case "nonudenti_email":
                    $('.postemobile_nonudenti_fax_dove').hide();
                    $('.numero').hide();
                    $('.nonudenti_email').fadeIn();
                break;
            case "nonudenti_fax":
                    $('.numero').hide();
                    reset_select('id', 'postemobile_nonudenti_fax_dove');
                    $('.postemobile_nonudenti_fax_dove').fadeIn();
                break;
            case "nonudenti_sms":
                    $('.postemobile_nonudenti_fax_dove').hide();
                    $('.numero').hide();
                    $('.nonudenti_sms').fadeIn();
                break;
            }
        });

        mostra_numeri('#postemobile_nonudenti_fax_dove');




        // POSTEPAY

        $('#postepay_tipo_assistenza').change(function () {
            id = $(this).attr('id');
            valore_select = $(this).val();
            switch (valore_select) {
            case "postepay_informazioni":
                    $('.postepay_blocco_dove').hide();
                    reset_select('id', 'postepay_informazioni_dove');
                    $('.numero').hide();
                    $('.postepay_informazioni_dove').fadeIn();
                break;
            case "postepay_blocco":
                    $('.postepay_informazioni_dove').hide();
                    reset_select('id', 'postepay_blocco_dove');
                    $('.numero').hide();
                    $('.postepay_blocco_dove').fadeIn();
                break;
            }
        });


        mostra_numeri('#postepay_informazioni_dove');

        mostra_numeri('#postepay_blocco_dove');





        // MISTRALAIR

        mostra_numeri('#mistralair_tipo_assistenza');

        







