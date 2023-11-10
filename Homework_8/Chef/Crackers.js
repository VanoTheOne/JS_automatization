const ExtraIngredients = require('./ExtraIngredients');

class Crackers extends ExtraIngredients {
  constructor(ingredientName, calorieContent) {
    super(ingredientName, calorieContent);
    this.ingredientName = 'Crackers';
  }
}

module.exports = Crackers;
