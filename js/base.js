jQuery(document).ready(function($) {

    /* Mask Money */
    $(".mask-money").maskMoney({
        prefix: "R$:",
        decimal: ",",
        thousands: "."
    });
    $(".mask-money-no-prefix").maskMoney({
        decimal: ",",
        thousands: "."
    });
    /* end Mask Money */

}); // end JQuery(document).ready