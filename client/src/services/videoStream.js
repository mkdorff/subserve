import io from 'socket.io-client'

const socket = io();

// export function paintCanvas(canvas) {
export function paintCanvas() {
  // console.log(canvas);
  socket.on('video feed', (data) => {
    console.log(data);
  })
  // const data = fetch('/video-stream');
  // ...
}

