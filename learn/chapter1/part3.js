$(document).ready(function() {
	$('#noun_table_collapse').on('show.bs.collapse', function () {
        $('#noun_table_title').html('Click to collapse the table');
        $('#noun_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#noun_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#noun_table_collapse').on('hide.bs.collapse', function () {
        $('#noun_table_title').html('Click to show the table');
        $('#noun_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#noun_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
	$('#verb_table_collapse').on('show.bs.collapse', function () {
        $('#verb_table_title').html('Click to collapse the table');
        $('#verb_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#verb_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#verb_table_collapse').on('hide.bs.collapse', function () {
        $('#verb_table_title').html('Click to show the table');
        $('#verb_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#verb_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
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