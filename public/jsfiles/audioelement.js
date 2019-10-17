const audioContext = new (window.AudioContext || window.webkitAudioContext)();
audioContext.suspend();
