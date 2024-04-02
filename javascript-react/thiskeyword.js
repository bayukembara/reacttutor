const Mango = {
  color: "Yellow",
  price: 20,
  weight: 1,
  about: function () {
    //   this is for calling the Mango constructor it self
    // return "this mango price is " + this.price + " USD";
    return `this mango color is ${this.color}`;
  },
};

console.log(Mango.about());
