import http from 'http'
import express from 'express'
import socketio from 'socket.io'

import { sendArduino } from './helpers/arduinoSerial'
import v4l2camera from './helpers/camera'

const app = express();
const server = http.Server(app);
const io = socketio(server);
const port = process.env.PORT || 3001;

server.listen(port, () => {console.log(`Listening on ${port}`); });

// Socket Config
io.on('connection', (socket) => {
  console.log('User Connected')
  // socket.emit('video feed', ...)
  socket.on('control input', (data) => {
    sendArduino(data);
  })
});

