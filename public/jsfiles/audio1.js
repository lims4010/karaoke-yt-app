//Functionality
const speedControl = document.querySelector('#speed');
const playButton = document.querySelector('button');

playButton.addEventListener(
  'click',
  function() {
    if (this.dataset.playing === 'false') {
      playSound.start();
      this.dataset.playing = 'on';
    } else if (this.dataset.playing === 'on') {
      audioContext.suspend();
      this.dataset.playing = 'off';
    } else if (this.dataset.playing === 'off') {
      audioContext.resume();
      this.dataset.playing = 'on';
    }
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
