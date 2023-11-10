const NewYearGift = require('./NewYearGift');

class Caramel extends NewYearGift {
  constructor(name, weight, price) {
    super();
    this.setName(name);
    this.setWeight(weight);
    this.setPrice(price);
  }
}

module.exports = Caramel;
