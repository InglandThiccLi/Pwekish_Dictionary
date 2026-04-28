$(document).ready(function() {
	$('#adjective_root_table_collapse').on('show.bs.collapse', function () {
        $('#adjective_root_table_title').html('Click to collapse the adjective root table');
        $('#adjective_root_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#adjective_root_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#adjective_root_table_collapse').on('hide.bs.collapse', function () {
        $('#adjective_root_table_title').html('Click to show the adjective root table');
        $('#adjective_root_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#adjective_root_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
	$('#adjectivized_word_table_collapse').on('show.bs.collapse', function () {
        $('#adjectivized_word_table_title').html('Click to collapse the adjectivized word table');
        $('#adjectivized_word_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#adjectivized_word_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#adjectivized_word_table_collapse').on('hide.bs.collapse', function () {
        $('#adjectivized_word_table_title').html('Click to show the adjectivized word table');
        $('#adjectivized_word_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#adjectivized_word_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
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
	
	$('#adverb_table_collapse').on('show.bs.collapse', function () {
        $('#adverb_table_title').html('Click to collapse the adverb table');
        $('#adverb_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#adverb_table_toggle_btn').attr('aria-expanded', 'true');
    });

    $('#adverb_table_collapse').on('hide.bs.collapse', function () {
        $('#adverb_table_title').html('Click to show the adverb table');
        $('#adverb_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#adverb_table_toggle_btn').attr('aria-expanded', 'false');
    });
});