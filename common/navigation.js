// Add this to your existing script or create a separate navigation.js file
$(document).ready(function() {
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