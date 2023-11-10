const CargoPlane = require('./CargoPlane');
const PassengerPlane = require('./PassengerPlane');
const TrainingPlane = require('./TrainingPlane');

class AirplanesAbstractFactory {
  planeProducer(kind, ...params) {
    function buildCargoPlane() {
      return new CargoPlane('Cargo', ...params);
    }

    function buildPassengerPlane() {
      return new PassengerPlane('Passenger', ...params);
    }

    function buildTrainingPlane() {
      return new TrainingPlane('Training', ...params);
    }

    if (kind === 'Cargo') {
      return buildCargoPlane();
    }
    if (kind === 'Passenger') {
      return buildPassengerPlane();
    }
    if (kind === 'Training') {
      return buildTrainingPlane();
    }
  }
}

module.exports = AirplanesAbstractFactory;
