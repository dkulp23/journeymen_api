'use strict';

const express = require('express'),
      debug = require('debug')('journeymen:server');

let app = express();
let PORT = process.env.PORT || 3000;

let server = module.exports = app.listen(PORT, () => {
  debug(`Server's up on PORT: ${PORT}`);
});

server.isRunning = true;