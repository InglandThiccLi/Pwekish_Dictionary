$(document).ready(function() {
    // Handle collapse events for icon animation
    $('#bentolromak_table_collapse').on('show.bs.collapse', function () {
        $('#bentolromak_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#bentolromak_table_toggle_btn').attr('aria-expanded', 'true');
    });
    
    $('#bentolromak_table_collapse').on('hide.bs.collapse', function () {
        $('#bentolromak_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#bentolromak_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
	$('#bentolpwek_table_collapse').on('show.bs.collapse', function () {
        $('#bentolpwek_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#bentolpwek_table_toggle_btn').attr('aria-expanded', 'true');
    });
    
    $('#bentolpwek_table_collapse').on('hide.bs.collapse', function () {
        $('#bentolpwek_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#bentolpwek_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
	$('#mutation_table_collapse').on('show.bs.collapse', function () {
        $('#mutation_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#mutation_table_toggle_btn').attr('aria-expanded', 'true');
    });
    
    $('#mutation_table_collapse').on('hide.bs.collapse', function () {
        $('#mutation_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#mutation_table_toggle_btn').attr('aria-expanded', 'false');
    });
});