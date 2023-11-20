const Caramel = require('./Caramel');
const Chocolate = require('./Chocolate');
const Marmalade = require('./Marmalade');
const Wafer = require('./Wafer');
const ActionsWithGift = require('./ActionsWithGift');

class PackedGift extends ActionsWithGift {
  constructor() {
    super();
    this.setName('New Year Gift');
  }
}

const gift = new PackedGift();
gift.add(new Caramel('Barberry', 200, 4));
gift.add(new Chocolate('Spartak', 300, 2.5));
gift.add(new Marmalade('Mad Bee', 400, 6));
gift.add(new Wafer('Chernomorskiye', 300, 3));

console.log(`${gift.getName()} weight is ${gift.getWeight()}`);

console.log(`Sweets by price descending:`, gift.sortByPrice());

console.log(`Your sweet is`, gift.findCandy());
