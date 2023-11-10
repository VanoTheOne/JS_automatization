class Salad {
  constructor() {
    this.ingredients = [];
    this.totalCalories = 0;
  }

  addIngredients(ingredient) {
    console.log(`${ingredient.ingredientName} is added`);
    this.totalCalories += ingredient.getCalorieContent();
    this.ingredients.push(ingredient);
  }

  getTotalCalories() {
    return this.totalCalories;
  }

  sortByCalorieContent() {
    return this.ingredients
      .sort((a, b) => a.getCalorieContent() - b.getCalorieContent())
      .map((ingredient) => ingredient.ingredientName)
      .join(', ');
  }

  findIngredient() {
    return this.ingredients
      .filter((el) => el.calorieContent >= 150 && /^O/i.test(el.ingredientName))
      .map((el) => el.ingredientName)
      .join(', ');
  }
}

module.exports = Salad;
