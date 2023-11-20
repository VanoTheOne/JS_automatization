const Ingredients = require('./Ingredients');

class ExtraIngredients extends Ingredients {
  constructor(ingredientName, calorieContent) {
    super(ingredientName, calorieContent);
  }
}

module.exports = ExtraIngredients;
