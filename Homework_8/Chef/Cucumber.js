const Ingredients = require('./Ingredients');

class Cucumber extends Ingredients {
  constructor(ingredientName, calorieContent) {
    super(ingredientName, calorieContent);
    this.ingredientName = 'Cucumber';
  }
}

module.exports = Cucumber;
