const NewYearGift = require('./NewYearGift');

class ActionsWithGift extends NewYearGift {
  constructor() {
    super();
    this.sweets = [];
  }

  add(sweet) {
    this.sweets.push(sweet);
  }

  getWeight() {
    return this.sweets.map((sweet) => sweet.getWeight()).reduce((a, b) => a + b, 0);
  }

  sortByPrice() {
    return this.sweets.sort((a, b) => b.price - a.price);
  }

  findCandy() {
    return this.sweets.filter((el) => el.weight <= 400 && el.price > 4);
  }
}

module.exports = ActionsWithGift;
