const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers(){
      return this._courses.appetizers; 
    },
    set appetizers(appetizerIn){
      this._courses.appetizers.push(appetizerIn);
    },
    get mains(){
      return this._courses.mains;
    },
    set mains(mainIn){
      this._courses.mains.push(mainIn);
    },
    get desserts(){
      return this._courses.desserts;
    },
    set desserts(dessertsIn){
      this._courses.desserts.push(dessertsIn);
    },
  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal: function(){
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `${appetizer.name}, ${main.name}, and ${dessert.name}. Total price: ${totalPrice}`;
  },
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Fufu and bread', 5.50);
menu.addDishToCourse('desserts', 'Nsa fufuo and cake', 7.99);

const meal = menu.generateRandomMeal()
console.log(meal);