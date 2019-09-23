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
    var semitoneRatio = Math.pow(2, 1 / 12);
    playSound.playbackRate.value = Math.pow(semitoneRatio, this.value);
  },
  false
);

//Buttons
const sampleButton = document.querySelector('#samplebutton');
const playButton = document.querySelector('#playbutton');
const youtubeInput = document.querySelector('#youtubeinput');

sampleButton.addEventListener(
  'click',
  function() {
    if (playButton.dataset.playing === 'false') {
      playSound = connectSource();
      playSound.start();
      playButton.dataset.playing = 'on';
    } else if (playButton.dataset.playing === 'on' || 'off') {
      playSound.disconnect();
      playSound = connectSource();
      audioContext.resume();
      playSound.start();
      playButton.dataset.playing = 'on';
    }
  },
  false
);

playButton.addEventListener(
  'click',
  function() {
    if (this.dataset.playing === 'on') {
      audioContext.suspend();
      this.dataset.playing = 'off';
    } else if (this.dataset.playing === 'off') {
      audioContext.resume();
      this.dataset.playing = 'on';
    }
  },
  false
);

youtubeInput.addEventListener(
  'change',
  function() {
    if (playButton.dataset.playing === 'false') {
      playSound = connectSource(this.value);
      playSound.start();
      playButton.dataset.playing = 'on';
      this.value = '';
    } else if (playButton.dataset.playing === 'on' || 'off') {
      playSound.disconnect();
      playSound = connectSource(this.value);
      audioContext.resume();
      playSound.start();
      playButton.dataset.playing = 'on';
      this.value = '';
    }
  },
  false
);
