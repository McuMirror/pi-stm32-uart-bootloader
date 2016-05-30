
var wpi = require('wiring-pi');
var STM32USARTBootloader = require('../');

wpi.wiringPiSetupPhys();

bootloader = new STM32USARTBootloader({
  resetPin: 11,
  boot0Pin: 13,
  serialPortPath: '/dev/ttyAMA0'
});

bootloader.flash('blink.bin', (err) => {
  if (err) {
    return console.error('could not flash image', err);
  }
  console.log('done');
});