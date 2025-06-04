let allResults = [];
let currentPage = 1;
let entriesPerPage = 20;
let totalPages = 1;

function setInputEnable(is_enable) {
	$('#search_input').attr("disabled", !is_enable);
	$('#search_button').attr("disabled", !is_enable);
	$('#advanced_search_checkbox').attr("disabled", !is_enable);
}

function validateInput() {
	const search_input = $('#search_input').val();
    const search_button = $('#search_button');
	const valid = /^[A-Za-z'` ÁáÉéÍíÓóÚúÑñŅņ]+$/;
	
	if (search_input === "") return null;
	if (!valid.test(search_input)) return false;
	return true;
}

function translateApostropheToUnderScroll(input) {
	return input.replaceAll("`", "_").replaceAll("'", "_");
}

function setButtonAndHintDisplay() {
	const is_valid_input = validateInput();
	if (is_valid_input == null) {
		$('#result').html('<div class="status-message">Waiting for Input~</div>');
		$('#search_button').attr("disabled", true);
	} else if (is_valid_input == false) {
		$('#result').html('<div class="status-message">Invalid Input!</div>');
		$('#search_button').attr("disabled", true);
	} else {
		$('#result').html('<div class="status-message">Click the Button to Search.</div>');
		$('#search_button').removeAttr("disabled");
		return true;
	}
	return false;
}

$(document).ready(function() {
    const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbzPh0mrXhMSEBtTMEWyjOSVf94KofnbKS_F3D0_zjxUqqrYaBz0sTPfdAFQiCC2X1NP/exec';
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	$('#search_input').val(urlParams.get('search_input'));
	$('#advanced_search_checkbox').prop('checked', (urlParams.get('advanced_search') == "true") ? true : false);

    // Check if input is valid and add Enter key support for search
    $('#search_input').on('keyup', function(e) {
		setButtonAndHintDisplay();

		if (e.key === 'Enter' && !$('#search_button').attr("disabled")) {
			$('#search_button').click();
		}
    });

    $('#search_button').on('click', function() {
        $('#result').html('<div class="status-message">Loading...</div>');
        $('.pagination-controls').addClass('hidden');
        const search_input = translateApostropheToUnderScroll($('#search_input').val());
        const advanced_search = $('#advanced_search_checkbox').is(':checked');
		setInputEnable(false);
        
        // Validate input
        if (!search_input.trim()) {
            $('#result').html('<div class="status-message">Waiting for input...</div>');
			setInputEnable(true);
			return;
        }
        
        $.ajax({
            url: appsScriptUrl,
            method: 'GET',
            data: {
				search_type: "words",
                search_input: search_input,
                advanced_search: advanced_search
            },
            dataType: 'json',
            success: function(response) {
				setInputEnable(true);
				
                if (response.length === 0) {
                    $('#result').html('<div class="status-message">No word is found.</div>');
                    updatePaginationControls(false);
                    return;
                }
                
                // Store all results and reset to first page
                allResults = response;
                currentPage = 1;
                displayCurrentPage();
                updatePaginationControls(true);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error:', textStatus, errorThrown, jqXHR);
                $('#result').html('<div class="status-message">Error fetching data. Check console for details.</div>');
                
                if (jqXHR.status === 0) {
                    $('#result').append('<p class="text-danger">Possible CORS issue or network error. Check the Apps Script deployment permissions and CORS headers.</p>');
                }
            }
        });
    });
		
	if (setButtonAndHintDisplay()) {
		$('#search_button').click();
	}
});