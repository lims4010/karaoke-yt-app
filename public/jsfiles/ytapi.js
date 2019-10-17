var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubevideo', {
    height: '390',
    width: '640',
    videoId: '',
    playerVars: { controls: 0, rel: 0, disablekb: 1 },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady() {
  player.mute();
}
