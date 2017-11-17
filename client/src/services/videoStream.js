// import io from 'socket.io-client'
import { yuyv2rgba } from '../helpers/yuyv2rgba'

const WIDTH  = 352;
const HEIGHT = 288;
// const socket = io();

export function paintCanvas(canvas) {
  const c2d = canvas.getContext("2d");

  (function load() {
    let req = new XMLHttpRequest();
    req.responseType = "arraybuffer";
    req.addEventListener("load", async () => {
      const yuyvRaw = new Uint8Array(req.response);
      const rgbaRaw = await yuyv2rgba(yuyvRaw, new Uint8ClampedArray(405504), WIDTH, HEIGHT);
      const imageData = new ImageData(rgbaRaw, WIDTH, HEIGHT);
      c2d.putImageData(imageData, 0, 0);
      setTimeout(load, 50);
    }, false);
    req.open("GET", "/video-feed", true);
    req.send();
  })()

  // setInterval(() => {
  //   // socket.on('video feed', async (data) => {
  //   //   console.log(data);
  //   // });
  //   socket.on('video feed', async (data) => {
  //     const yuyvRaw = Uint8Array.from(data);
  //     const rgbaRaw = await yuyv2rgba(yuyvRaw, new Uint8ClampedArray(405504), WIDTH, HEIGHT);
  //     const imageData = new ImageData(rgbaRaw, WIDTH, HEIGHT);
  //     c2d.putImageData(imageData, 0, 0);
  //   });
  //   socket.emit('video req');
  // }, 1000)

}

