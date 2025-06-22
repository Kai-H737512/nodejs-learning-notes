// Module Wrapper Function
// (function (exports, require, module, __filenmae, __dirname) {})

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old`)
  }
}

console.log(__dirname)
module.exports = Person;