const Device = require('./Device');

class DevicesInFlat {
  createDevice(device, power, isPluggedIn) {
    if (device.toLowerCase() === 'kettle') {
      return new Device(device, power, isPluggedIn);
    }
    if (device.toLowerCase() === 'microwave') {
      return new Device(device, power, isPluggedIn);
    }
    if (device.toLowerCase() === 'tv') {
      return new Device(device, power, isPluggedIn);
    }
    if (device.toLowerCase() === 'air conditioner') {
      return new Device(device, power, isPluggedIn);
    }
  }
}

module.exports = DevicesInFlat;
