//This is the Person class
class Person {
  constructor(name, favColor) {
    this.name = name;
    this.favColor = favColor;
  }

  greet() {
    console.log("hi there " + this.name);
  }
}

module.exports = Person;
