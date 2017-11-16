
// We can't load this other than on a Pi enviroment so we'll need checks
let v4l2camera = null;
let cam;
let feed;
try {
  v4l2camera = require("v4l2camera");
  cam = new v4l2camera.Camera("/dev/video0");
  cam.configSet({width: 352, height: 288}); // Try different sizes
  cam.start();
  
} catch (err) {
  console.log("The camera module only works in a Pi Enviroment")
}

export function captureFeed() {
  if (!v4l2camera) return null;
  
  let feed = cam.toYUYV();
  console.log(feed.length);  
  return feed;
  // cam.capture(function loop() {
    // console.log(cam.toYUYV().length);
    // socket.emit('video feed', "emitting image...");
    // cam.capture(loop);
  // });
}