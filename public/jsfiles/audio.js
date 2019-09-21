// //Initialize AudioContext and Connect to Output

// const audioElement = document.querySelector('audio');
// // const track = audioContext.createMediaElementSource(audioElement);

// //Create buffer source to steam
// var playSound = audioContext.createBufferSource();

// var request = new XMLHttpRequest();
// request.open('GET', '/mp3files/iu.mp3', true);
// request.responseType = 'arraybuffer';
// request.onload = function() {
//   audioContext.decodeAudioData(request.response, function(buffer) {
//     playSound.buffer = buffer;
//     // playSound.connect(audioContext.destination);
//   });
// };
// request.send();

// // window.addEventListener('load', playback);

// // //Functionality
// // const speedControl = document.querySelector('#speed');
// // const playButton = document.querySelector('button');

// // playButton.addEventListener(
// //   'click',
// //   function() {
// //     if (this.dataset.playing === 'false') {
// //       playSound.start();
// //       this.dataset.playing = 'on';
// //     } else if (this.dataset.playing === 'on') {
// //       audioContext.suspend();
// //       this.dataset.playing = 'off';
// //     } else if (this.dataset.playing === 'off') {
// //       audioContext.resume();
// //       this.dataset.playing = 'on';
// //     }
// //   },
// //   false
// // );

// // speedControl.addEventListener(
// //   'input',
// //   function() {
// //     var semitoneRatio = Math.pow(2, 1 / 12);
// //     playSound.playbackRate.value = Math.pow(semitoneRatio, this.value);
// //   },
// //   false
// // );
