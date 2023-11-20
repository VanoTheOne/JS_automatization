const Airplanes = require('./Airplanes');

class CargoPlane extends Airplanes {
  constructor(plane, ...params) {
    super(plane, ...params);
  }

  getCargoPlane() {
    console.log(`This is Cargo plane`);
  }
}

module.exports = CargoPlane;
