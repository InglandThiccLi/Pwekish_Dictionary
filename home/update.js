$(document).ready(function() {
    // Update button click
    $('#update-button').on('click', function() {
        $('#overlay').addClass('active');
    });
	
	$('#close-button').on('click', function() {
        $('#overlay').removeClass('active');
    });
});