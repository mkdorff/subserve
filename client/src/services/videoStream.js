import io from 'socket.io-client'

const socket = io();

// export function paintCanvas(canvas) {
export function paintCanvas() {
  // console.log(canvas);
  socket.on('video feed', (data) => {
    console.log(data.length);
    // let imageData = new ImageData(data, 352, 288);
    // console.log(imageData);
  })
  // const data = fetch('/video-stream');
  // ...
}

