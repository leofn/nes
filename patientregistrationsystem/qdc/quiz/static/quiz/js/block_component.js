/**
 * Created by diogopedrosa on 4/24/15.
 */

$(document).ready(function () {
    var id_number_of_mandatory_components = $("#id_number_of_mandatory_components");
    var all_mandatory_components = $("#id_all_mandatory");
    var not_all_mandatory_components = $("#id_not_all_mandatory");

    if (id_number_of_mandatory_components.val() == "") {
        id_number_of_mandatory_components.prop('disabled', true);
        all_mandatory_components.prop('checked', true);
    } else {
        not_all_mandatory_components.prop('checked', true);
    }

    all_mandatory_components.click(function () {
        id_number_of_mandatory_components.prop('value', "");
        id_number_of_mandatory_components.prop('disabled', true);
        fix_bootstrap_error_message();
    });

    not_all_mandatory_components.click(function () {
        id_number_of_mandatory_components.prop('disabled', false);
        id_number_of_mandatory_components.focus();
    });

    function fix_bootstrap_error_message() {
        setTimeout(function () {
            $("#div_form_number_of_mandatory_components").removeClass("has-error")
            $("#div_for_errors_in_number_of_mandatory_components").children("ul").remove();
            $("#submit_button").removeClass("disabled");
        }, 500);
    }

    $(function(){
        $("[data-toggle=tooltip]").tooltip();
    });


    // Change icon while collapsing or expanding an accordion
    $(".collapsed").click(expand)

    function expand() {
        // Replace right arrow by the down arrow
        $(this).find(".glyphicon-chevron-right").switchClass('glyphicon-chevron-right', 'glyphicon-chevron-down');

        // Change the listener of the click event
        $(this).unbind("click");
        $(this).click(collapse)

        // Replace the title of the tootip
        $(this).children(".panel-heading").attr("data-original-title", "Colapsar");
    }

    $(".expanded").click(collapse)

    function collapse() {
        // Replace down arrow by the right arrow
        $(this).find(".glyphicon-chevron-down").switchClass('glyphicon-chevron-down', 'glyphicon-chevron-right');

        // Change the listener of the click event
        $(this).unbind("click");
        $(this).click(expand)

        // Replace the title of the tootip
        $(this).children(".panel-heading").attr("data-original-title", "Expandir");
    }
});

function show_modal_remove(list_name, accordion_position, conf_position) {
    var  modal_remove = document.getElementById('removeComponentConfiguration');
    modal_remove.setAttribute( "value", 'remove-' + list_name + '-' + accordion_position + '-' + conf_position);

    $("#modalRemoveMessage").html("Tem certeza que deseja excluir este uso de passo da lista?");

    $('#modalComponentConfigurationRemove').modal('show');
}

function show_modal_remove_many(list_name, accordion_position, length) {
    var  modal_remove = document.getElementById('removeComponentConfiguration');
    modal_remove.setAttribute( "value", 'remove-' + list_name + '-' + accordion_position);

    $("#modalRemoveMessage").html("Tem certeza que deseja excluir estes " + length + " usos de passo da lista?");

    $('#modalComponentConfigurationRemove').modal('show');
}
