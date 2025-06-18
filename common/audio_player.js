class CustomAudioPlayer {
    constructor(playerElement) {
        this.player = playerElement;
        this.audio = new Audio(playerElement.dataset.src);
        this.isPlaying = false;
        this.isMuted = false;
        
        this.playBtn = playerElement.querySelector('.play-pause-btn');
        this.volumeBtn = playerElement.querySelector('.volume-btn');
        this.progressBar = playerElement.querySelector('.progress-bar');
        this.progressFill = playerElement.querySelector('.progress-fill');
        this.currentTimeEl = playerElement.querySelector('.current-time');
        this.durationEl = playerElement.querySelector('.duration');
        
        this.initializeEvents();
        this.updateDuration();
    }
    
    initializeEvents() {
        // Play/Pause button
        this.playBtn.addEventListener('click', () => this.togglePlay());
        
        // Volume button
        this.volumeBtn.addEventListener('click', () => this.toggleMute());
        
        // Progress bar click
        this.progressBar.addEventListener('click', (e) => this.seek(e));
        
        // Audio events
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.onEnded());
    }
    
    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
            this.playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
            this.isPlaying = false;
        } else {
            this.audio.play();
            this.playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
            this.isPlaying = true;
        }
    }
    
    toggleMute() {
        if (this.isMuted) {
            this.audio.muted = false;
            this.volumeBtn.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
            this.isMuted = false;
        } else {
            this.audio.muted = true;
            this.volumeBtn.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
            this.isMuted = true;
        }
    }
    
    seek(e) {
        const rect = this.progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        const newTime = percentage * this.audio.duration;
        this.audio.currentTime = newTime;
    }
    
    updateProgress() {
        const percentage = (this.audio.currentTime / this.audio.duration) * 100;
        this.progressFill.style.width = percentage + '%';
        this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
    }
    
    updateDuration() {
        if (this.audio.duration) {
            this.durationEl.textContent = this.formatTime(this.audio.duration);
        }
    }
    
    onEnded() {
        this.playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        this.isPlaying = false;
        this.progressFill.style.width = '0%';
        this.audio.currentTime = 0;
    }
    
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

// Initialize all audio players on the page
$(document).ready(function() {
    $('.audio-player').each(function() {
        new CustomAudioPlayer(this);
    });
});