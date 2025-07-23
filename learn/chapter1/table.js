$(document).ready(function() {
    $('#alphabet_table_collapse').on('show.bs.collapse', function () {
        $('#alphabet_table_title').html('Click to collapse the table');
        $('#alphabet_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#alphabet_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#alphabet_table_collapse').on('hide.bs.collapse', function () {
        $('#alphabet_table_title').html('Click to show the table');
        $('#alphabet_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#alphabet_table_toggle_btn').attr('aria-expanded', 'false');
    });
});