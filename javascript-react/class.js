class Fruit {
  constructor(name) {
    this.name = name;
  }

  fol() {
    console.log(this.name + " is too much tasty");
  }

  static jackfruitse() {
    console.log("Jack fruit is very delicious");
  }
}

let add = new Fruit("Apple");
add.fol();

Fruit.jackfruitse();
