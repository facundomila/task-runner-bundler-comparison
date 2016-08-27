const express = require('express');
const app = express();
const path = require('path');

const baseDir = process.env.NODE_ENV === 'production' ? 'build' : 'dist';

app.use(require('connect-livereload')({port: 35729}));
app.use(express.static(path.join(__dirname, baseDir)));

// API routes
app.get('/api/sample-route', (req, res) => {
  res.send({
    website: 'Toptal',
    blogPost: true
  });
});

// Client routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './', baseDir ,'/index.html'));
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});