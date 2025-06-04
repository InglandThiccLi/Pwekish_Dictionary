$(document).ready(function() {
	// Function to perform search
	function performSearch() {
		const searchInput = $('#main_search_input').val().trim();
		const isAdvancedSearch = $('#advanced_search_checkbox').is(':checked');
		
		if (searchInput) {
			// Create URL parameters
			const params = new URLSearchParams();
			params.append('search_input', searchInput);
			params.append('advanced_search', isAdvancedSearch);
			
			// Navigate to search.html with parameters
			window.location.href = `dictionary/search.html?${params.toString()}`;
		}
	}
	
	// Search button click event
	$('#main_search_button').click(function() {
		performSearch();
	});
	
	// Enter key press on search input
	$('#main_search_input').keypress(function(e) {
		if (e.which === 13) { // Enter key
			performSearch();
		}
	});
	
	// Focus on search input when page loads
	$('#main_search_input').focus();
});