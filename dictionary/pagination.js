function displayCurrentPage() {
    totalPages = Math.ceil(allResults.length / entriesPerPage);
    
    // Get current page items
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = Math.min(startIndex + entriesPerPage, allResults.length);
    const currentPageItems = allResults.slice(startIndex, endIndex);

    if (currentPageItems.length == 0) return;
    
    var word_list = '';
    currentPageItems.forEach((word, index) => {
        // Calculate global index in allResults
        const globalIndex = startIndex + index;
        // Get word class
        const wordClass = word[6];
        
        // Split multiple meanings if they exist (by semicolons)
        const meanings = word[4].split('\n').map(meaning => meaning.trim());
        const formattedMeanings = meanings.map(meaning => 
            `<div class="meaning-line">${meaning}</div>`
        ).join('');
        
        word_list += `
            <div class="word-entry" data-word-index="${globalIndex}">
                <div class="word-term">${word[1]}</div>
                <div class="word-class ${wordClass}">${wordClass}</div>
                <div class="word-pronunciations-preview">SP: ${word[2]}<br>SK: ${word[3]}</div>
                <div class="word-meaning">${formattedMeanings}</div>
            </div>
        `;
    });
    
    $('#result').html(word_list);
    
    // Update page info
    $('.page-info').text(currentPage + '/' + totalPages);
}

function updatePaginationControls(hasResults) {
    if (!hasResults) {
        $('.page-btn').prop('disabled', true);
        $('.page-info').text('0/0');
        return;
    }

    // Show the pagination control
    $('.pagination-controls').removeClass('hidden');

    // Show the page-navigation
    if (allResults.length != 0) $('.page-navigation').removeClass('hidden');
    
    // Update first/prev buttons
    $('.page-btn[data-action="first"], .page-btn[data-action="prev"]')
        .prop('disabled', currentPage === 1);
    
    // Update next/last buttons
    $('.page-btn[data-action="next"], .page-btn[data-action="last"]')
        .prop('disabled', currentPage === totalPages);
}

// Handle page navigation
$(document).on('click', '.page-btn:not(:disabled)', function() {
    const action = $(this).data('action');
    
    switch(action) {
        case 'first':
            currentPage = 1;
            break;
        case 'prev':
            currentPage--;
            break;
        case 'next':
            currentPage++;
            break;
        case 'last':
            currentPage = totalPages;
            break;
    }
    
    displayCurrentPage();
    updatePaginationControls(true);
    
    // Scroll to top of results
    $('html, body').animate({
        scrollTop: $('#result').offset().top - 20
    }, 200);
});

// Handle entries per page selection
$(document).on('click', '.entries-btn', function() {
    $('.entries-btn').removeClass('active');
    $(this).addClass('active');
    
    entriesPerPage = parseInt($(this).data('value'));
    currentPage = 1; // Reset to first page
    
    displayCurrentPage();
    updatePaginationControls(true);
});