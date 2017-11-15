import http from 'http'
import express from 'express'
import socketio from 'socket.io'
// import bodyParser, { urlencoded } from 'body-parser'
// import path from 'path'

const app = express();
const server = http.Server(app);
const io = socketio(server);

// Express Config
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// TEMP
// const router = express.Router();
// const staticFiles = express.static(path.join(__dirname, '../../client/build'));
// app.use(staticFiles); -- I don't think I need this.

// router.get('/cities', (req, res) => ( res.json({name: 'New York City', population: 8175133}) ));

// app.use(router);

// Only if we need to build this
// const staticFiles = express.static(path.join(__dirname, '../../client/build'));
// app.use('/*', staticFiles);

app.set('port', (process.env.PORT || 3001));
server.listen(app.get('port'), () => {console.log(`Listening on ${app.get('port')}`); });


// Socket Config
io.on('connection', (socket) => {
  console.log('User Connected')
  // socket.emit('video feed', ...)
  socket.on('control input', (data) => {
    console.log(data);
  })
});
// import { sendArduino } from './helpers/arduinoSerial'
