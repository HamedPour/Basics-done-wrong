var Person = require("./modules/Person");

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " ows money to the government");
  }
}

var hamed = new Person('hamed', 'lightblue');
var jane = new Adult('jane');
jane.payTaxes();
hamed.greet()
