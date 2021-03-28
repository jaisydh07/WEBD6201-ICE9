"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let app = require('../app');
const app = require('./app');
let debug = require('debug')('week10:server');
let http = require('http');
app.set('port', port);
const server = http.createServer(app);
let server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
      return val;
  }
  if (port >= 0) {
      return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
      throw error;
  }
  let bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  switch (error.code) {
      case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
      case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
      default:
          throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
//# sourceMappingURL=server.js.map 