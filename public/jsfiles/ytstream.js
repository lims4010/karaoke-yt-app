<<<<<<< HEAD
=======
#!/usr/bin/env node
>>>>>>> b4a8870cfae3c3fa4f34f40ec74af4b25de6747d
const ytdl = require('ytdl-core');
const FFmpeg = require('fluent-ffmpeg');
const { PassThrough } = require('stream');
const fs = require('fs');

module.exports = streamify;

function streamify(uri, opt) {
  opt = {
    ...opt,
    videoFormat: 'mp4',
    quality: 'lowest',
    audioFormat: 'mp3',
    filter(format) {
      return format.container === opt.videoFormat && format.audioEncoding;
    }
  };

  const video = ytdl(uri, opt);
  const { file, audioFormat } = opt;
  const stream = file ? fs.createWriteStream(file) : new PassThrough();
  const ffmpeg = new FFmpeg(video);

  process.nextTick(() => {
    const output = ffmpeg.format(audioFormat).pipe(stream);

    ffmpeg.on('error', error => stream.emit('error', error));
    output.on('error', error => {
      video.end();
      stream.emit('error', error);
    });
  });

  stream.video = video;
  stream.ffmpeg = ffmpeg;

  return stream;
}
