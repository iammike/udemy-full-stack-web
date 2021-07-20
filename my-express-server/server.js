const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('<a href="/contact">Contact page</a>, <a href="/about">About page</a>');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: <a href="mailto:mike@iammike.org">mike@iammike.org</a>');
});

app.get('/about', (req, res) => {
  res.send('You can find so much more about me at <a href="http://www.iammike.org">my blog</a>.');
});

app.get('/hobbies', (req, res) => {
  res.send('Bikes and beer and books');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
