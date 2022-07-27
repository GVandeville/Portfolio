let music = document.getElementById('player');
music.addEventListener("playing", () => {
    music.volume = 0.01;
});