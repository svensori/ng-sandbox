// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
const port = process.env.PORT || 4000;
const pusher = new Pusher({
  app_id: '987949',
  key: 'ae76d17749f7d459a7ef',
  secret: '4d3f2ac2afa8e5d386bc',
  cluster: 'ap1',
  forceTLS: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

setInterval(() => {
  pusher.trigger('my-channel', 'my-event', { test: 'test me'});
}, 1000);

app.post('/ping', (req, res) => {
  const { lat, lng } = req.body;
  const data = { 
    lat: lat.toString(), 
    lng: lng.toString() 
  };
  pusher.trigger('my-channel', 'my-event', data);
  console.log(data);
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});