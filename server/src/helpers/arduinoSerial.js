import SerialPort from 'serialport'
const port = new SerialPort('/dev/ttyACM0', {
  baudRate: 9600
});

export function sendArduino(CODE) {
  port.write(CODE);
}