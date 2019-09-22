const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
// var youtubeStream = require('youtube-audio-stream');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/https://www.youtube.com/watch?v=/:videoId', (req, res) => {
    try {
      youtubeStream(req.params.videoId).pipe(res);
    } catch (exception) {
      res.status(500).send(exception);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
