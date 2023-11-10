class Device {
  constructor(device, power, isPluggedIn) {
    this.device = device;
    this.power = power;
    this.isPluggedIn = Boolean(isPluggedIn);
  }

  getDevice() {
    return this.device;
  }

  getPower() {
    return this.isPluggedIn ? this.power : 0;
  }
}

module.exports = Device;
