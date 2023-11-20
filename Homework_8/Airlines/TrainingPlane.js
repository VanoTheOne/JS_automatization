const Airplanes = require('./Airplanes');

class TrainingPlane extends Airplanes {
  constructor(plane, ...params) {
    super(plane, ...params);
  }
  getTrainingPlane() {
    console.log(`This is Training plane`);
  }
}

module.exports = TrainingPlane;
