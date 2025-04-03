const express = require('express');
const app = express();

// GET method route
app.get('/', (req, res) => {
  res.send('GET request to homepage');
});

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to homepage');
});

// Route with URL parameters
app.get('/users/:userId', (req, res) => {
  res.send(`User ID: ${req.params.userId}`);
});

// Route with query parameters
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});

// Route with regular expression
app.get(/.*fly$/, (req, res) => {
  res.send('URL path ends with "fly"');
});

app.listen(3000);