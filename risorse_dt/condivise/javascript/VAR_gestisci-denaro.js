var strVar="";

strVar += "                <!-- BISOGNO -->";
strVar += "                <div class=\"form-group form-group-lg config-row bisogno\">";
strVar += "                    <span class=\"testo-domanda\">Vorrei gestire il mio denaro con<\/span>";
strVar += "                    <select class=\"form-control\" id=\"bisogno\" data-array=\"0\">";
strVar += "                        <option disabled selected value><\/option>";
strVar += "                        <option value=\"carta\">una carta<\/option>";
strVar += "                        <option value=\"conto\">un conto<\/option>";
strVar += "                    <\/select>";
strVar += "                <\/div>";
strVar += "";
strVar += "                    <!-- -------------";
strVar += "                    ------ CARTA ------";
strVar += "                    -------------- -->";
strVar += "";
strVar += "                    <!-- tipo pagamento -->";
strVar += "                    <div class=\"form-group form-group-lg config-row tipo_pagamento\">";
strVar += "                        <span class=\"testo-domanda\">e<\/span>";
strVar += "                        <select class=\"form-control\" id=\"tipo_pagamento\" data-array=\"1\">";
strVar += "                            <option disabled selected value><\/option>";
strVar += "                            <option value=\"pagamenti_quotidiani\">gestire i pagamenti quotidiani<\/option>";
strVar += "                            <option value=\"pagamenti_straordinari\">gestire i pagamenti straordinari<\/option>";
strVar += "                            <option value=\"online\">comprare online<\/option>";
strVar += "                        <\/select>";
strVar += "                    <\/div>";
strVar += "";




$('.configuratore-risultato-prodotti').html(strVar);
