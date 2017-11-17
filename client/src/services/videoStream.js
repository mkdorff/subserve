import io from 'socket.io-client'
import { yuyv2rgba } from '../helpers/yuyv2rgba'

const WIDTH  = 352;
const HEIGHT = 288;
const socket = io();

export function paintCanvas(canvas) {
  const c2d = canvas.getContext("2d");
  socket.on('video feed', async (data) => {
    console.log(data);
  });
  // socket.on('video feed', async (data) => {
  //   const yuyvRaw = Uint8Array.from(data);
  //   const rgbaRaw = await yuyv2rgba(yuyvRaw, new Uint8ClampedArray(405504), WIDTH, HEIGHT);
  //   const imageData = new ImageData(rgbaRaw, WIDTH, HEIGHT);
  //   c2d.putImageData(imageData, 0, 0);
  // });
}

