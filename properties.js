function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

const rand = new Person("Randy evans", 22, "M");
const car1 = new Car("Eagle", "Talon Tsi", 1993, rand);

console.log(car1.owner.name);