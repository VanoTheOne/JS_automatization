const Ingredients = require('./Ingredients');

class Tomato extends Ingredients {
  constructor(ingredientName, calorieContent) {
    super(ingredientName, calorieContent);
    this.ingredientName = 'Tomato';
  }
}

module.exports = Tomato;
