let original_scroll = 0;

function showWordDetail(word) {
    // Hide pagination controls
    $('.pagination-controls').addClass('hidden');

    // Make the results-container taller
    $('.results-container').addClass('higher');
	
    // Store the original scroll position of results-container
    original_scroll = $('.results-container').scrollTop();
    
    // Generate detailed view HTML
    const detailHtml = generateWordDetailHtml(word);
	
    // Go to top for results-container
    $('.results-container').scrollTop(0);
    
    // Show detailed view
    $('#result').html(detailHtml);
}

function generateWordDetailHtml(word) {
    const term = word[1];
    const spPronunciation = word[2] || '';
    const skPronunciation = word[3] || '';
    const wordClass = word[6] || word[0];
    const languageOrigin = word[7] || '';
    const etymology = word[5] || '';
    
    // Parse meanings and parts of speech
    const meanings = parseWordMeanings(word[0], word[4]);
    
    // Generate BentolPwék table
    const bentolPwekTable = generateBentolTable(word[8], 'BentolPwék', 'Corresponding BentolRomak');
    
    // Generate Middle Pwekish table
    var middlePwekishTableDiv = '';
    if (word[9] != "\\")  {
        const middlePwekishTable = generateBentolTable(word[9], 'Middle Pwekish', 'Corresponding BentolRomak');
        middlePwekishTableDiv += `
            <hr class="word-divider">
            
            <div class="word-section-title">Middle Pwekish</div>
            ${middlePwekishTable}
        `
    }
    
    return `
        <div class="word-detail-view">
            <div class="word-detail-title">${term}</div>
            
            <div class="word-pronunciations">
                Standard: ${spPronunciation} &nbsp;&nbsp;&nbsp; Sekritnkaynresian: ${skPronunciation}
            </div>
            
            <hr class="word-divider">
            
            <div class="word-section-title">Etymology</div>
            <div class="etymology-row">
                <div class="word-class ${wordClass}">${wordClass}</div>
                <span class="language-origin">[${languageOrigin}]</span>
                <span>${etymology}</span>
            </div>
            
            <hr class="word-divider">
            
            <div class="word-section-title">Meanings</div>
            ${meanings}
            
            <hr class="word-divider">
            
            <div class="word-section-title">BentolPwék</div>
            ${bentolPwekTable}

            ${middlePwekishTableDiv}

            <div class="return-btn-container">
                <button class="return-btn" onclick="returnToSearchResults()">Return to Search Results</button>
            </div>
        </div>
    `;
}

function parseWordMeanings(posString, meaningString) {
    const part_of_speech = posString.split('\n').filter(pos => pos.trim());
    const meanings = meaningString.split('\n').filter(meaning => meaning.trim());

    
    let result = '';
    
    if (part_of_speech.length === meanings.length) {
        // 8a: Same number of pos and meanings
        for (let i = 0; i < meanings.length; i++) {
            const meaning = meanings[i].slice(3);
            result += `<div class="meaning-item">${i + 1}. [${part_of_speech[i]}] ${meaning}</div>`;
        }
    } else if (part_of_speech.length === 1) {
        // 8b: One part of speech for all meanings
        for (let i = 0; i < meanings.length; i++) {
            const meaning = meanings[i].slice(3);
            result += `<div class="meaning-item">${i + 1}. [${part_of_speech[0]}] ${meaning}</div>`;
        }
    } else if (part_of_speech.length < meanings.length) {
        // 8c: Fewer pos than meanings
        for (let i = 0; i < meanings.length; i++) {
            const posIndex = Math.min(i, part_of_speech.length - 1);
            const meaning = meanings[i].slice(3);
            result += `<div class="meaning-item">${i + 1}. [${part_of_speech[posIndex]}] ${meaning}</div>`;
        }
    } else if (part_of_speech.length > meanings.length && meanings.length === 1) {
        // 8d: More pos than meanings, and only 1 meaning
        const meaning = meanings[0].slice(3);
        const allPos = part_of_speech.join(', ');
        result += `<div class="meaning-item">1. [${allPos}] ${meaning}</div>`;
    } else {
        // Fallback: use first meaning with first pos
        const meaning = meanings[0].slice(3);
        result += `<div class="meaning-item">1. [${part_of_speech[0] || ''}] ${meaning || ''}</div>`;
    }
    
    return result;
}

function generateBentolTable(data, col1Header, col2Header) {
    if (!data || !data.trim()) {
        return `<p><em>No data available</em></p>`;
    }
    
    const rows = data.split('\n').filter(row => row.trim());
    
    let tableHtml = `
        <table class="word-table">
            <thead>
                <tr>
                    <th>${col1Header}</th>
                    <th>${col2Header}</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    rows.forEach(row => {
        const parts = row.trim().split(' ');
        const bentolPwek = parts[0] || '';
        const bentolRomak = parts[1] || '';
        
        tableHtml += `
            <tr>
                <td>${bentolPwek}</td>
                <td>${bentolRomak}</td>
            </tr>
        `;
    });
    
    tableHtml += `
            </tbody>
        </table>
    `;
    
    return tableHtml;
}

function returnToSearchResults() {
    // Show pagination controls
    $('.pagination-controls').removeClass('hidden');

    // Set back the height of results-container
    $('.results-container').removeClass('higher');
    
    // Return to current page view
    displayCurrentPage();
	
    // Set back the scroll position for results-container
    $('.results-container').scrollTop(original_scroll);
}

// Handle word entry clicks
$(document).on('click', '.word-entry', function() {
    const wordIndex = $(this).data('word-index');
    const word = allResults[wordIndex];
    showWordDetail(word);
});
