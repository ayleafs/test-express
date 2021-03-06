const express = require('express');

const app = express();

app.all('/', (_, res) => {
  res.send('Hello world!');
});

app.get('/crash', (req, res) => {
  process.exit(-1);
});

app.listen(7000, () => {
  console.log('listening on port 7000');
});
