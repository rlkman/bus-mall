function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.legs = 4;
  this.isAGoodDog = true;
}

Dog.prototype.says = function(bark) {
  console.log(bark);
};
var Parker = new Dog('Parker', 'English Shepherd');
Parker.bark = 'woof';
var Demi = new Dog('Demi', 'Border Collie');
Demi.legs = 3;
