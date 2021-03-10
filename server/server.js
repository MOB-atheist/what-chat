'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static('build'))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(PORT, HOST);