import io from 'socket.io-client'

const socket = io();

// export function paintCanvas(canvas) {
export function paintCanvas() {
  // console.log(canvas);
  socket.on('video feed', (data) => {
    const yuyvRaw = Uint8Array.from(data);
    // console.log(yuyvRaw);
    // console.log(Object.prototype.toString.call(yuyvRaw));
    // let imageData = new ImageData(data, 352, 288);
    // console.log(imageData);
  })
  // const data = fetch('/video-stream');
  // ...
}

