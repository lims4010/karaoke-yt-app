var gainNode = window.gainNode;

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
      playSound.buffer = buffer;
      playSound.connect(gainNode);
    });
  };
  request.send();
  return playSound;
}

// var playSound = audioContext.createBufferSource();
// var request = new XMLHttpRequest();
// request.open('GET', '/mp3files/iu.mp3', true);
// request.responseType = 'arraybuffer';
// request.onload = function() {
//   audioContext.decodeAudioData(request.response, function(buffer) {
//     playSound.buffer = buffer;
//     playSound.connect(gainNode);
//   });
// };
// request.send();
