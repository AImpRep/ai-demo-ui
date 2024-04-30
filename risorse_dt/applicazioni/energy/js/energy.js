/*****************************************************
    energy.js - (c) Poste Italiane 2021 - GD//FS//DU
*****************************************************/


$(document).ready(function() {

    $('.radio input[type=radio]:checked').each(function() {
        $(this).parents('label').addClass('selected');
    });

    $('.radio input[type=radio]').on('change', function() {
        var radio_family = $(this).attr('name');
        $('input[name=' + radio_family + ']').each(function() {
            $(this).parents('label').removeClass('selected');
        });
        $(this).parents('label').addClass('selected');
    });

});

