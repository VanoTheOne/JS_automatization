const Tomato = require('./Tomato');
const Cucumber = require('./Cucumber');
const Onion = require('./Onion');
const OliveOil = require('./OliveOil');
const Crackers = require('./Crackers');
const Salad = require('./Salad');

class SaladFacade {
  constructor(salad) {
    this.salad = salad;
  }

  buildSalad() {
    const tomato = new Tomato(`Tomato`, 200);
    const cucumber = new Cucumber(`Cucumber`, 100);
    const onion = new Onion(`Onion`, 150);
    const oliveOil = new OliveOil(`Olive oil`, 200);
    const crackers = new Crackers(`Crackers`, 100);

    this.salad.addIngredients(tomato);
    this.salad.addIngredients(cucumber);
    this.salad.addIngredients(onion);
    this.salad.addIngredients(oliveOil);
    this.salad.addIngredients(crackers);
  }
}

const saladFacade = new SaladFacade(new Salad());
saladFacade.buildSalad();

const salad = saladFacade.salad;

console.log(`Total calorie content in salad:`, salad.getTotalCalories());

console.log('Ingredients sorted by calorie content ascending:', salad.sortByCalorieContent());

console.log(`Your ingredient is`, salad.findIngredient());
