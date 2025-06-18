$(document).ready(function() {
    $(document).on('click', '.audio-play-btn', function() {
        const btn = $(this);
        const audioSrc = btn.data('src');
        
        if (!audioSrc) return;
        
        const audio = new Audio(audioSrc);
        
        // Change button appearance while playing
        btn.addClass('playing');
        btn.html('<i class="bi bi-pause-fill"></i>');
        
        // Play audio
        audio.play();
        
        // Reset button when audio ends
        audio.addEventListener('ended', function() {
            btn.removeClass('playing');
            btn.html('<i class="bi bi-play-fill"></i>');
        });
        
        // Reset button on error
        audio.addEventListener('error', function() {
            btn.removeClass('playing');
            btn.html('<i class="bi bi-play-fill"></i>');
        });
    });
});