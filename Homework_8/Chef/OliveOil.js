const ExtraIngredients = require('./ExtraIngredients');

class OliveOil extends ExtraIngredients {
  constructor(ingredientName, calorieContent) {
    super(ingredientName, calorieContent);
    this.ingredientName = 'Olive oil';
  }
}

module.exports = OliveOil;
