function buildTable(data) {
	console.log(data);
	var tableContent = '';
	
	data.forEach(row => {
		const idiom = row[0];
		const meaning = row[1];
		const explanation = row[2];
		const bentolPwek = row[3].split("\n");
		const middlePwekish = row[4].split("\n");
		
		var bentolPwekFinal = '';
		var middlePwekishFinal = '';
		
		bentolPwek.forEach(part => {bentolPwekFinal += `${part}<br>`});
		bentolPwekFinal = bentolPwekFinal.slice(0, bentolPwekFinal.length-4);
		
		middlePwekish.forEach(part => {middlePwekishFinal += `${part}<br>`});
		middlePwekishFinal = middlePwekishFinal.slice(0, middlePwekishFinal.length-4);
		
		tableContent += `
			<tr>
				<td><strong>${idiom}</strong></td>
				<td>${meaning}</td>
				<td>${explanation}</td>
				<td><span class="special-chars">${bentolPwekFinal}</span></td>
				<td><span class="special-chars">${middlePwekishFinal}</span></td>
			</tr>
		`
	});

	$("#idioms_table_content").html(tableContent);
}

$(document).ready(function() {
	$('#idioms_table_collapse').on('show.bs.collapse', function () {
        $('#idioms_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#idioms_table_toggle_btn').attr('aria-expanded', 'true');
    });
    
    $('#idioms_table_collapse').on('hide.bs.collapse', function () {
        $('#idioms_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#idioms_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
    const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbzPh0mrXhMSEBtTMEWyjOSVf94KofnbKS_F3D0_zjxUqqrYaBz0sTPfdAFQiCC2X1NP/exec';
	const idiomsTableToggleButton = $('#idioms_table_toggle_btn');
	const idiomsTableToggleTitle = $('#idioms_table_toggle_title');
	var isLoaded = false;
	
	idiomsTableToggleButton.on('click', function() {
		if (isLoaded) return;

		idiomsTableToggleButton.addClass("disabled");
		idiomsTableToggleTitle.html("Fetching data...");
		
		$.ajax({
            url: appsScriptUrl,
            method: 'GET',
            data: {
				search_type: "idioms",
            },
            dataType: 'json',
            success: function(response) {
				isLoaded = true;
				idiomsTableToggleButton.removeClass("disabled");
                if (response.length === 0) {
                    idiomsTableToggleTitle.html('<div class="status-message">Nothing is found.</div>');
                    return;
                }
				idiomsTableToggleButton.attr("data-bs-target", "#idioms_table_collapse");
				idiomsTableToggleTitle.html('<div class="status-message">Idioms</div>');
				$("#idioms_table_collapse").addClass("show");
				$('#idioms_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');

				buildTable(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error:', textStatus, errorThrown, jqXHR);
                idiomsTableToggleTitle.html('<div class="status-message">Error fetching data. Check console for details.</div>');
                
                if (jqXHR.status === 0) {
                    idiomsTableToggleTitle.append('<p class="text-danger">Possible CORS issue or network error. Check the Apps Script deployment permissions and CORS headers.</p>');
                }
            }
        });
	});
});