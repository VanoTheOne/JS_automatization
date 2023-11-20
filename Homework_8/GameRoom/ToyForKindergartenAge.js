const Toys = require('./Toys');

class ToyForKindergartenAge extends Toys {
  static totalAmount = 0;
  static totalPrice = 0;

  constructor(toy, toyAmount, toyPrice) {
    super(toy, toyAmount, toyPrice);
    ToyForKindergartenAge.totalAmount += this.toyAmount;
    ToyForKindergartenAge.totalPrice += this.toyAmount * this.toyPrice;

    if (ToyForKindergartenAge.getTotalToyAmount() >= 50 || ToyForKindergartenAge.getTotalToyPrice() >= 3000) {
      console.log(`You are out of limit, man!`);
    }
  }

  static getTotalToyAmount() {
    return ToyForKindergartenAge.totalAmount;
  }

  static getTotalToyPrice() {
    return ToyForKindergartenAge.totalPrice;
  }

  produceKingergartenToys() {
    return this;
  }
}

module.exports = ToyForKindergartenAge;
