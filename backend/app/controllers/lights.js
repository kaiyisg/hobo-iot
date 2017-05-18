// const gpio = require('rpi-gpio');

const LIGHT_1_GPIO = 2;

// const onLights = () => {
//   gpio.setup(LIGHT_1_GPIO, gpio.DIR_OUT,
//     () => {
//       gpio.write(LIGHT_1_GPIO, true, (err) => {
//         if (err) throw err;
//         console.log('Switching lamp 1 on');
//       });
//     }
//   );
// };

const onLights = () => {
  return 1;
}
const offLights = () => {
  return 1;
}


// const offLights = () => {
//   gpio.setup(LIGHT_1_GPIO, gpio.DIR_OUT,
//     () => {
//       gpio.write(LIGHT_1_GPIO, false, (err) => {
//         if (err) throw err;
//         console.log('Switching lamp 1 off');
//       });
//     }
//   );
// };

module.exports = {
  onLights: onLights,
  offLights: offLights,
}

// export default { onLights, offLights };
