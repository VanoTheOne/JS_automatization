const NewYearGift = require('./NewYearGift');

class Marmalade extends NewYearGift {
  constructor(name, weight, price) {
    super();
    this.setName(name);
    this.setWeight(weight);
    this.setPrice(price);
  }
}

module.exports = Marmalade;
