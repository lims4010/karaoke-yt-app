var gainNode = window.gainNode;
const spinner = document.querySelector('#spinner');

//Connect Source
function connectSource(url) {
  if (!url) {
    url = 'iu.mp3';
  } else {
    var id = url.split('https://www.youtube.com/watch?v=');
    url = id[1];
  }

  var playSound = audioContext.createBufferSource();
  var request = new XMLHttpRequest();
  request.open('GET', '/stream/' + url, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    audioContext.decodeAudioData(request.response, function(buffer) {
      spinner.style.visibility = 'hidden';
      playSound.buffer = buffer;
      playSound.connect(gainNode);
      audioContext.resume();
      playSound.start();
      player.playVideo();
      playButton.dataset.playing = 'on';
    });
  };
  request.send();
  spinner.style.visibility = 'visible';
  return playSound;
}
