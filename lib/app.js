const express = require('express');

const app = express();
const path = require('path');

// app.use('/', (req, res) => {
//   res.send('hello world!');
// });

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cats', require('./controllers/cats'));

module.exports = app;
