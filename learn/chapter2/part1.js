$(document).ready(function() {
	$('#sentence_table_collapse').on('show.bs.collapse', function () {
        $('#sentence_table_title').html('Click to collapse the table');
        $('#sentence_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#sentence_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#sentence_table_collapse').on('hide.bs.collapse', function () {
        $('#sentence_table_title').html('Click to show the table');
        $('#sentence_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#sentence_table_toggle_btn').attr('aria-expanded', 'false');
    });
});