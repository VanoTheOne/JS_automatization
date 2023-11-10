const Ingredients = require('./Ingredients');

class Onion extends Ingredients {
  constructor(ingredientName, calorieContent) {
    super(ingredientName, calorieContent);
    this.ingredientName = 'Onion';
  }
}

module.exports = Onion;
