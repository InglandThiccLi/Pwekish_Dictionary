$(document).ready(function() {
	$('#sentence1_table_collapse').on('show.bs.collapse', function () {
        $('#sentence1_table_title').html('Click to collapse the sentence table');
        $('#sentence1_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#sentence1_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#sentence1_table_collapse').on('hide.bs.collapse', function () {
        $('#sentence1_table_title').html('Click to show the sentence table');
        $('#sentence1_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#sentence1_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
	$('#sentence2_table_collapse').on('show.bs.collapse', function () {
        $('#sentence2_table_title').html('Click to collapse the sentence table');
        $('#sentence2_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#sentence2_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#sentence2_table_collapse').on('hide.bs.collapse', function () {
        $('#sentence2_table_title').html('Click to show the sentence table');
        $('#sentence2_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#sentence2_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
	$('#sentence3_table_collapse').on('show.bs.collapse', function () {
        $('#sentence3_table_title').html('Click to collapse the sentence table');
        $('#sentence3_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#sentence3_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#sentence3_table_collapse').on('hide.bs.collapse', function () {
        $('#sentence3_table_title').html('Click to show the sentence table');
        $('#sentence3_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#sentence3_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
	$('#sentence4_table_collapse').on('show.bs.collapse', function () {
        $('#sentence4_table_title').html('Click to collapse the sentence table');
        $('#sentence4_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#sentence4_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#sentence4_table_collapse').on('hide.bs.collapse', function () {
        $('#sentence4_table_title').html('Click to show the sentence table');
        $('#sentence4_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#sentence4_table_toggle_btn').attr('aria-expanded', 'false');
    });
});