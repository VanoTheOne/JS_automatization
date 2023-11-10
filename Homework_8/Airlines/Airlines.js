const AirplanesAbstractFactory = require('./AirplanesAbstractFactory');

class Airlines {
  constructor() {
    this.planes = [];
    this.totalCapacity = 0;
    this.totalPayload = 0;
  }

  addPlane(plane) {
    this.totalCapacity += plane.getCapacity();
    this.totalPayload += plane.getPayload();
    this.planes.push(plane);
  }

  sortByFlightRange() {
    return this.planes
      .sort((a, b) => a.getFlightRange() - b.getFlightRange())
      .map((plane) => plane.getPlane())
      .join(', ');
  }

  findAirplane() {
    return this.planes
      .filter((el) => el.capacity > 50)
      .map((plane) => plane.getPlane())
      .join(', ');
  }

  getTotalCapacity() {
    return this.totalCapacity;
  }

  getTotalPayload() {
    return this.totalPayload;
  }
}

const aircraft = new AirplanesAbstractFactory();

const cargoPlane = aircraft.planeProducer(`Cargo`, 20, 10000, 3000);
const passengerPlane = aircraft.planeProducer(`Passenger`, 400, 1000, 5000);
const trainingPlane = aircraft.planeProducer(`Training`, 6, 0, 500);

cargoPlane.getCargoPlane();
passengerPlane.getPassengerPlane();
trainingPlane.getTrainingPlane();

const operations = new Airlines();

operations.addPlane(cargoPlane);
operations.addPlane(passengerPlane);
operations.addPlane(trainingPlane);

console.log('Total capacity: ', operations.getTotalCapacity());
console.log('Total payload : ', operations.getTotalPayload());
console.log('Airplanes sorted by flight range ascending: ', operations.sortByFlightRange());
console.log('Needed airplanes are: ', operations.findAirplane());
