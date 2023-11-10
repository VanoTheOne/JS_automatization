const ToyForKindergartenAge = require('./ToyForKindergartenAge');

class ToysForEarlySchoolAge {
  constructor(toy, toyAmount, toyPrice) {
    this.toy = new ToyForKindergartenAge(toy, toyAmount, toyPrice);
    this.toy = toy;
    this.toyAmount = toyAmount;
    this.toyPrice = toyPrice;
  }

  getSchoolToy() {
    return this.toy.getToy();
  }

  getSchoolToyAmount() {
    return this.toy.getToyAmount();
  }

  getSchoolPrice() {
    return this.toy.getPrice();
  }

  produceSchoolToys() {
    return this;
  }

  getToy() {
    return this.toy;
  }

  getToyAmount() {
    return this.toyAmount;
  }

  getPrice() {
    return this.toyPrice;
  }
}

class ActionsWithToys {
  constructor() {
    this.toys = [];
  }

  addToy(toy) {
    this.toys.push(toy);
  }

  sortByPrice() {
    return this.toys
      .sort((a, b) => a.getPrice() - b.getPrice())
      .map((toy) => toy.getToy())
      .join(', ');
  }

  findToy() {
    return this.toys
      .filter((el) => el.toyAmount < 10)
      .map((toy) => toy.getToy())
      .join(', ');
  }
}

let kindergardenBall = new ToyForKindergartenAge(`small ball`, 10, 20);
let kindergardenCar = new ToyForKindergartenAge(`small car`, 10, 40);
let mediumKinderCar = new ToyForKindergartenAge(`medium car`, 2, 100);
let kindergardenDoll = new ToyForKindergartenAge(`small doll`, 8, 40);

let kinderBall = kindergardenBall.produceKingergartenToys();
let kinderCar = kindergardenCar.produceKingergartenToys();
let mediumCar = mediumKinderCar.produceKingergartenToys();
let kinderDoll = kindergardenDoll.produceKingergartenToys();

console.log(kinderBall);
console.log(kinderCar);
console.log(mediumCar);
console.log(kinderDoll);

let schoolPlasticGun = new ToysForEarlySchoolAge('plastic gun', 10, 40);
let schoolBigCar = new ToysForEarlySchoolAge('big car', 5, 150);
let schoolComputer = new ToysForEarlySchoolAge('computer', 3, 200);

let plasticGun = schoolPlasticGun.produceSchoolToys();
let bigCar = schoolBigCar.produceSchoolToys();
let computer = schoolComputer.produceSchoolToys();

console.log(plasticGun);
console.log(bigCar);
console.log(computer);

console.log(`Total amount of toys:`, ToyForKindergartenAge.getTotalToyAmount());
console.log(`Total price of toys:`, ToyForKindergartenAge.getTotalToyPrice());

const actions = new ActionsWithToys();

actions.addToy(kinderBall);
actions.addToy(kinderCar);
actions.addToy(mediumCar);
actions.addToy(kinderDoll);
actions.addToy(plasticGun);
actions.addToy(bigCar);
actions.addToy(computer);

console.log('Sorted toys are:', actions.sortByPrice());
console.log('Needed toys are:', actions.findToy());
