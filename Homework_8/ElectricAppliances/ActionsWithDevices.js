const DevicesInFlat = require('./DevicesInFlat');

class ActionsWithDevices {
  constructor() {
    this.devices = [];
  }

  addDevice(device) {
    this.devices.push(device);
  }

  getTotalPower() {
    return this.devices.map((device) => device.getPower()).reduce((a, b) => a + b, 0);
  }

  sortByPower() {
    return this.devices
      .sort((a, b) => a.getPower() - b.getPower())
      .map((device) => device.getDevice())
      .join(', ');
  }

  findDevice() {
    return this.devices
      .filter((el) => el.power < 2000 && el.isPluggedIn === true)
      .map((device) => device.getDevice())
      .join(', ');
  }
}

const readyDevices = new DevicesInFlat();

const kettle = readyDevices.createDevice('Kettle', 1000, true);
const microwave = readyDevices.createDevice('Microwave', 2000, true);
const tv = readyDevices.createDevice('TV', 1500, true);
const airConditioner = readyDevices.createDevice('Air conditioner', 3000, false);

console.log(kettle);
console.log(microwave);
console.log(tv);
console.log(airConditioner);

const actions = new ActionsWithDevices();

actions.addDevice(kettle);
actions.addDevice(microwave);
actions.addDevice(tv);
actions.addDevice(airConditioner);

console.log('Total power of plugged in devices: ', actions.getTotalPower());

console.log('Devices by power consumption ascending:', actions.sortByPower());

console.log('Needed devices are:', actions.findDevice());
