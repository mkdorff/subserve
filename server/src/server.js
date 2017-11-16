import http from 'http'
import express from 'express'
import socketio from 'socket.io'

import { sendArduino } from './helpers/arduinoSerial'
import { captureFeed }  from './helpers/camera'
import { yuyv2rgba } from './helpers/yuyv2rgba'

const app = express();
const server = http.Server(app);
const io = socketio(server);
const port = process.env.PORT || 3001;

server.listen(port, () => {console.log(`Listening on ${port}`); });

// Socket Config
io.on('connection', (socket) => {
  console.log('User Connected')

  socket.on('control input', (data) => {
    sendArduino(data);
  })
  
  // pass in socket into function
  // sendCameraToSockets(socket);
});

setInterval(async () => {
  let feed = await captureFeed();
  if (!feed) return;
  let imageData = new Uint8ClampedArray(405504); 
  let sendData = await yuyv2rgba(feed, imageData, 352, 288);
  io.emit('video feed', sendData);
}, 3000);
