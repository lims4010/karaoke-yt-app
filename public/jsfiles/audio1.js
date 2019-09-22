const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function loadSound() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:5000/stream/nl6OW07A5q4', true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    var Data = request.response;
    process(Data);
  };

  request.send();
}

function process(Data) {
  source = audioContext.createBufferSource(); // Create Sound Source
  audioContext.decodeAudioData(Data, function(buffer) {
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(audioContext.currentTime);
  });
}
