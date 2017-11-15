
// We can't load this other than on a Pi enviroment so we'll need checks
let v4l2camera = null;
let cam;
try {
  v4l2camera = require("v4l2camera");
  cam = new v4l2camera.Camera("/dev/video0");
} catch (err) {
  console.log("The camera module only works in a Pi Enviroment")
}

console.log(!!v4l2camera)
console.log(cam);



// cam.configSet({width: 352, height: 288}); // Try different sizes
// cam.start();
// cam.capture(function loop() {
//   cam.capture(loop);
// });

// // Maybe do a socketio con - 
// // also convert yuyv to rgba here. Send raw rgab data through sockets.


// export { cam }
