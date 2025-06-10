function buildTable(data) {
	console.log(data);
	var tableContent = '';
	
	data.forEach(row => {
		const affix = row[0].split("\n");
		const pronunciationSP = row[1];
		const pronunciationSK = row[2];
		const meaning = row[3].split("\n");
		const type = row[4];
		const example = row[5].split("\n");
		const bentolPwek = row[6].split("\n");
		const middlePwekish = row[7].split("\n");
		
		var affixFinal = '';
		var meaningFinal = '';
		var exampleFinal = '';
		var bentolPwekFinal = '';
		var middlePwekishFinal = '';
		
		affix.forEach(part => {affixFinal += `${part}<br>`});
		affixFinal = affixFinal.slice(0, affixFinal.length-4);
		
		meaning.forEach(part => {meaningFinal += `${part}<br>`});
		meaningFinal = meaningFinal.slice(0, meaningFinal.length-4);
		
		example.forEach(part => {exampleFinal += `${part}<br>`});
		exampleFinal = exampleFinal.slice(0, exampleFinal.length-4);
		
		bentolPwek.forEach(part => {bentolPwekFinal += `${part}<br>`});
		bentolPwekFinal = bentolPwekFinal.slice(0, bentolPwekFinal.length-4);
		
		middlePwekish.forEach(part => {middlePwekishFinal += `${part}<br>`});
		middlePwekishFinal = middlePwekishFinal.slice(0, middlePwekishFinal.length-4);
		
		tableContent += `
			<tr>
				<td><strong>${affixFinal}</strong></td>
				<td><span class="pronunciation">${pronunciationSP}</span></td>
				<td><span class="pronunciation">${pronunciationSK}</td>
				<td>${meaningFinal}</td>
				<td><b>${type}</b></td>
				<td><i>${exampleFinal}</i></td>
				<td><span class="special-chars">${bentolPwekFinal}</span></td>
				<td><span class="special-chars">${middlePwekishFinal}</span></td>
			</tr>
		`
	});

	$("#affixes_table_content").html(tableContent);
}

$(document).ready(function() {
	$('#affixes_table_collapse').on('show.bs.collapse', function () {
        $('#affixes_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
        $('#affixes_table_toggle_btn').attr('aria-expanded', 'true');
    });
    
    $('#affixes_table_collapse').on('hide.bs.collapse', function () {
        $('#affixes_table_toggle_icon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
        $('#affixes_table_toggle_btn').attr('aria-expanded', 'false');
    });
	
    const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbzPh0mrXhMSEBtTMEWyjOSVf94KofnbKS_F3D0_zjxUqqrYaBz0sTPfdAFQiCC2X1NP/exec';
	const affixesTableToggleButton = $('#affixes_table_toggle_btn');
	const affixesTableToggleTitle = $('#affixes_table_toggle_title');
	var isLoaded = false;
	
	affixesTableToggleButton.on('click', function() {
		if (isLoaded) return;

		affixesTableToggleButton.addClass("disabled");
		affixesTableToggleTitle.html("Fetching data...");
		
		$.ajax({
            url: appsScriptUrl,
            method: 'GET',
            data: {
				search_type: "affixes",
            },
            dataType: 'json',
            success: function(response) {
				isLoaded = true;
				affixesTableToggleButton.removeClass("disabled");
                if (response.length === 0) {
                    affixesTableToggleTitle.html('<div class="status-message">Nothing is found.</div>');
                    return;
                }
				affixesTableToggleButton.attr("data-bs-target", "#affixes_table_collapse");
				affixesTableToggleTitle.html('<div class="status-message">Affixes</div>');
				$("#affixes_table_collapse").addClass("show");
				$('#affixes_table_toggle_icon').removeClass('bi-chevron-down').addClass('bi-chevron-up');

				buildTable(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error:', textStatus, errorThrown, jqXHR);
                affixesTableToggleTitle.html('<div class="status-message">Error fetching data. Check console for details.</div>');
                
                if (jqXHR.status === 0) {
                    affixesTableToggleTitle.append('<p class="text-danger">Possible CORS issue or network error. Check the Apps Script deployment permissions and CORS headers.</p>');
                }
            }
        });
	});
});