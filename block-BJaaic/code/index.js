//Creating Animal Object using prototypal pattern

let animalMethods = {
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation(newLocation) {
        this.location = newLocation;
        console.log(`I live in ${this.location} and I can eat`);
    },
    summary() {
        console.log(`I live in ${this.location} and I haev ${this.numberOfLegs}`);
    },

}
let dogMethods = {
    bark() { alert(`I am ${this.name} and I can bark 🐶`); },
    changeName(newName) { this.name = newName },
    changeColor(newColor) { this.color = newColor },
    summary() { return `I am ${this.name} and I am of ${this.color} color. I can also bark` }
}
let catMethods = {
    meow() { alert(`I am ${this.name} and I can do meow meow 😹`); },
    changeName(newName) { this.name = newName },
    changeColorOfEyes(newColor) { this.colorOfEyes = newColor },
    summary() { return `I am ${this.name} and the color of my eyes is ${this.colorOfEyes} I can also do meow meow` }
}

function createAnimal(location, numberOfLegs) {
    let Animal = Object.create({ animalMethods });
    Animal.location = location;
    Animal.numberOfLegs = numberOfLegs;
    return Animal;
}

function createDog(name, color, location, numberOfLegs) {
    let Dog = Object.create(dogMethods);
    Dog.name = name;
    Dog.color = color;
    Dog.location = location;
    Dog.numberOfLegs = numberOfLegs;
    return Dog;
}
function createCat(name, colorOfEyes, location, numberOfLegs) {
    let Cat = Object.create(catMethods);
    Cat.name = name;
    Cat.colorOfEyes = colorOfEyes;
    Cat.location = location;
    Cat.numberOfLegs = numberOfLegs;
    return Cat;
}

Object.setPrototypeOf(dogMethods, animalMethods);
Object.setPrototypeOf(catMethods, animalMethods);

let bullDog = new createDog('Pochi', `black`, `Dharamshala`, 5);