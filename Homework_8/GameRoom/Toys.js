class Toys {
  constructor(toy, toyAmount, toyPrice) {
    this.toy = toy;
    this.toyAmount = toyAmount;
    this.toyPrice = toyPrice;
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

module.exports = Toys;
