$(document).ready(function() {
    // Update button click
    $('#tutorial-button').on('click', function() {
        $('#tutorial-overlay').addClass('active');
		$('#menuBtn').addClass('hidden');
    });
	
	$('#close-button').on('click', function() {
        $('#tutorial-overlay').removeClass('active');
		$('#menuBtn').removeClass('hidden');
    });
});