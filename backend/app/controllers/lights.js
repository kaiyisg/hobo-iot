const rpio = require('rpio');

const LIGHT_1_GPIO = 15; // physical naming scheme

const onLights = () => {
  rpio.open(LIGHT_1_GPIO, rpio.OUTPUT, rpio.LOW);
  rpio.write(LIGHT_1_GPIO, rpio.HIGH);
};

const offLights = () => {
  rpio.open(LIGHT_1_GPIO, rpio.OUTPUT, rpio.LOW);
  rpio.write(LIGHT_1_GPIO, rpio.LOW);
};

module.exports = {
  onLights: onLights,
  offLights: offLights,
}
