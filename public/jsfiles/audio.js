const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioElement = document.querySelector('audio');
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

const speedControl = document.querySelector('#speed');
var audioBuffer;
var playSound = audioContext.createBufferSource();

var request = new XMLHttpRequest();
request.open('GET', '/mp3files/iu.mp3', true);
request.responseType = 'arraybuffer';
request.onload = function() {
  audioContext.decodeAudioData(request.response, function(buffer) {
    audioBuffer = buffer;
    playback();
  });
};
request.send();
window.addEventListener('load', playback);

const playButton = document.querySelector('button');
playButton.addEventListener(
  'click',
  function() {
    if (this.dataset.playing === 'false') {
      playSound.start();
      this.dataset.playing = 'on';
    } else if (this.dataset.playing === 'on') {
      playSound.disconnect();
      this.dataset.playing = 'off';
    } else if (this.dataset.playing === 'off') {
      playSound.connect(audioContext.destination);
      this.dataset.playing = 'on';
    }
  },
  false
);

// audioElement.addEventListener(
//   'ended',
//   () => {
//     playButton.dataset.playing = 'false';
//   },
//   false
// );

function playback() {
  playSound.buffer = audioBuffer;
  playSound.connect(audioContext.destination);
}

speedControl.addEventListener(
  'input',
  function() {
    var semitoneRatio = Math.pow(2, 1 / 12);
    playSound.playbackRate.value = Math.pow(semitoneRatio, this.value);
  },
  false
);
