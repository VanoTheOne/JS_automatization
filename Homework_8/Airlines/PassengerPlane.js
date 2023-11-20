const Airplanes = require('./Airplanes');

class PassengerPlane extends Airplanes {
  constructor(plane, ...params) {
    super(plane, ...params);
  }
  getPassengerPlane() {
    console.log(`This is Passenger plane`);
  }
}

module.exports = PassengerPlane;
