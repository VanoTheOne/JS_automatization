class Ingredients {
  constructor(ingredientName, calorieContent) {
    this.ingredientName = ingredientName;
    this.calorieContent = calorieContent;
  }

  getCalorieContent() {
    return this.calorieContent;
  }
}

module.exports = Ingredients;
