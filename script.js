window.addEventListener('load', function() {
    var audio = document.getElementById('background-music');
    var playButton = document.getElementById('play-button');

    audio.play().catch(function(error) {
        playButton.style.display = 'block';
        playButton.addEventListener('click', function() {
            audio.play();
            playButton.style.display = 'none';
        });
    });
});