const NewYearGift = require('./NewYearGift');

class Wafer extends NewYearGift {
  constructor(name, weight, price) {
    super();
    this.setName(name);
    this.setWeight(weight);
    this.setPrice(price);
  }
}

module.exports = Wafer;
