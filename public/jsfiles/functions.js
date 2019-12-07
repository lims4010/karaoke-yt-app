var pitchShift = window.pitchShift;
var biquadFilter = window.biquadFilter;
var gainNode = window.gainNode;
var playSound;

const pitchControl = document.querySelector('#pitch');
const wetControl = document.querySelector('#wet');
const dryControl = document.querySelector('#dry');
const filterControl = document.querySelector('#filter');
const gainControl = document.querySelector('#gain');
const speedControl = document.querySelector('#speed');

pitchShift.transpose = pitchControl.value;
pitchShift.wet.value = wetControl.value;
pitchShift.dry.value = dryControl.value;
biquadFilter.frequency.value = filterControl.max;
gainNode.gain.value = gainControl.value;

//Audio Effects
pitchControl.addEventListener(
  'input',
  function() {
    pitchShift.transpose = this.value;
  },
  false
);
wetControl.addEventListener(
  'input',
  function() {
    pitchShift.wet.value = this.value;
  },
  false
);
dryControl.addEventListener(
  'input',
  function() {
    pitchShift.dry.value = this.value;
  },
  false
);

filterControl.addEventListener(
  'input',
  function() {
    biquadFilter.frequency.value = this.max - this.value;
  },
  false
);

gainControl.addEventListener(
  'input',
  function() {
    gainNode.gain.value = this.value;
  },
  false
);

speedControl.addEventListener(
  'input',
  function() {
    playSound.playbackRate.value = this.value;
    player.setPlaybackRate(parseFloat(this.value));
  },
  false
);

//Buttons
const sampleButton = document.querySelector('#samplebutton');
const playButton = document.querySelector('#playbutton');
const youtubeInput = document.querySelector('#youtubeinput');
const youtubeVideo = document.querySelector('#youtubevideo');

sampleButton.addEventListener(
  'click',
  function() {
    if (!youtubeInput.value) {
      playIU();
    } else {
      playInput();
    }
  },
  false
);

function playInput() {
  {
    var id = youtubeInput.value.split('https://www.youtube.com/watch?v=');
    if (playButton.dataset.playing !== 'false') {
      playSound.disconnect();
    }
    player.loadVideoById(id[1]);
    player.pauseVideo();
    playSound = connectSource(youtubeInput.value);
    youtubeInput.value = '';
  }
}

function playIU() {
  if (playButton.dataset.playing !== 'false') {
    playSound.disconnect();
  }
  player.loadVideoById('NwxUejW0NUo');
  player.pauseVideo();
  playSound = connectSource();
}

playButton.addEventListener(
  'click',
  function() {
    if (this.dataset.playing === 'on') {
      player.pauseVideo();
      audioContext.suspend();
      this.dataset.playing = 'off';
    } else if (this.dataset.playing === 'off') {
      player.playVideo();
      audioContext.resume();
      this.dataset.playing = 'on';
    }
  },
  false
);
