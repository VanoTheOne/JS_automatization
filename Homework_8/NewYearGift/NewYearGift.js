class NewYearGift {
  getWeight() {
    return this.weight || 0;
  }

  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  setPrice(price) {
    this.price = price;
  }
}

module.exports = NewYearGift;
