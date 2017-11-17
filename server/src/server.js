import http from 'http'
import express from 'express'
import socketio from 'socket.io'
import path from 'path'

import { sendArduino } from './helpers/arduinoSerial'
import { captureFeed, grabSocket }  from './helpers/camera'

const app = express();
const server = http.Server(app);
const io = socketio(server);
const port = process.env.PORT || 3001;

const staticFiles = express.static(path.join(__dirname, '../../../client/build'));
app.use(staticFiles);
app.use('/*', staticFiles);

server.listen(port, () => {console.log(`Listening on ${port}`); });

// Socket Config
io.on('connection', (socket) => {
  console.log('User Connected')

  socket.on('control input', (data) => {
    sendArduino(data);
  })

  console.log(`real socket:`)
  console.logs(socket)
  grabSocket(socket)
});

// Interval for capturing/sending video feed
// setInterval(async () => {
//   let feed = await captureFeed();
//   if (!feed) return;

//   io.emit('video feed', Array.from(feed));
// }, 1000);
