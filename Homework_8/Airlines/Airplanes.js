class Airplanes {
  constructor(plane, capacity, payload, flightRange) {
    this.plane = plane;
    this.capacity = capacity;
    this.payload = payload;
    this.flightRange = flightRange;
  }

  getPlane() {
    return this.plane;
  }

  getCapacity() {
    return this.capacity;
  }

  getPayload() {
    return this.payload;
  }

  getFlightRange() {
    return this.flightRange;
  }
}

module.exports = Airplanes;
