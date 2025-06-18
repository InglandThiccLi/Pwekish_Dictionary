// Add this to your existing script or create a separate navigation.js file
$(document).ready(function() {
	var go_back = "../"
	if ($('#sideNav').hasClass("deep")) {
		go_back = "../../"
	}
	$('#sideNav').html(`
		<div class="side-nav-header">
            <h2 class="side-nav-title">Navigation</h2>
            <button id="closeBtn" class="close-btn">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <div class="side-nav-content">
            <a href="${go_back}index.html" class="nav-item">
                <i class="bi bi-house"></i>
                <span>Home</span>
            </a>
            <a href="${go_back}dictionary/search.html" class="nav-item">
                <i class="bi bi-search"></i>
                <span>Search</span>
            </a>
			<a href="${go_back}articles/about.html" class="nav-item">
                <i class="bi bi-question-circle"></i>
                <span>About</span>
            </a>
			<div class="nav-accordion">
				<div class="nav-item accordion-toggle" id="learnAccordion">
					<i class="bi bi-book"></i>
					<span>Learn</span>
					<i class="bi bi-chevron-down chevron-icon"></i>
				</div>
				<div class="accordion-content" id="learnAccordionContent">
					<a href="${go_back}learn/portal.html" class="accordion-item">
						<i class="bi bi-geo"></i>
						<span>Portal</span>
					</a>
					<a href="${go_back}learn/chapter1/index.html" class="accordion-item">
						<i class="bi bi-bookmark"></i>
						<span>Chapter 1</span>
					</a>
				</div>
			</div>
			<a href="${go_back}books/home.html" class="nav-item hidden">
                <i class="bi bi-journals"></i>
                <span>Books</span>
            </a>
			<div class="nav-accordion">
				<div class="nav-item accordion-toggle" id="moreInfoAccordion">
					<i class="bi bi-plus-circle accordion-icon"></i>
					<span>More Info</span>
					<i class="bi bi-chevron-down chevron-icon"></i>
				</div>
				<div class="accordion-content" id="moreInfoAccordionContent">
					<a href="${go_back}dictionary/alphabet.html" class="accordion-item">
						<i class="bi bi-alphabet"></i>
						<span>Alphabet</span>
					</a>
					<a href="${go_back}dictionary/affixes.html" class="accordion-item">
						<i class="bi bi-text-left"></i>
						<span>Affixes</span>
					</a>
					<a href="${go_back}dictionary/idioms.html" class="accordion-item">
						<i class="bi bi-chat-quote"></i>
						<span>Idioms</span>
					</a>
					<a href="${go_back}dictionary/handzis.html" class="accordion-item hidden">
						<i class="bi bi-translate"></i>
						<span>Handzis</span>
					</a>
					<a href="${go_back}dictionary/periodic_table.html" class="accordion-item">
						<i class="bi bi-flask"></i>
						<span>Periodic Table</span>
					</a>
				</div>
			</div>
        </div>
	`);
	
    // Menu button click
    $('#menuBtn').on('click', function() {
        openSideNav();
    });
    
    // Close button click
    $('#closeBtn').on('click', function() {
        closeSideNav();
    });
    
    // Overlay click
    $('#overlay').on('click', function() {
        closeSideNav();
    });
    
    // Escape key to close
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('#sideNav').hasClass('active')) {
            closeSideNav();
        }
    });
	
	// Accordion
	$('#moreInfoAccordion').on('click', function() {
        toggleAccordion('moreInfo');
    });
	$('#learnAccordion').on('click', function() {
        toggleAccordion('learn');
    });
});

function openSideNav() {
    $('#menuBtn').addClass('hidden');
    $('#sideNav').addClass('active');
    $('#overlay').addClass('active');
    $('body').css('overflow', 'hidden'); // Prevent scrolling when menu is open
}

function closeSideNav() {
    $('#menuBtn').removeClass('hidden');
    $('#sideNav').removeClass('active');
    $('#overlay').removeClass('active');
    $('body').css('overflow', ''); // Restore scrolling
}

function toggleAccordion(name) {
	const accordionToggle = $('#'+name+'Accordion');
	const accordionContent = $('#'+name+'AccordionContent');
	const isActive = accordionToggle.hasClass('active');
	 if (isActive) {
		// Close accordion
		accordionToggle.removeClass('active');
		accordionContent.removeClass('show');
	} else {
		// Open accordion
		accordionToggle.addClass('active');
		accordionContent.addClass('show');
	}
}