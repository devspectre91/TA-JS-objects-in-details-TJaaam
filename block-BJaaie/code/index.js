//Creating Animal Object using pseudoclassical pattern



function CreateAnimal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;

}
CreateAnimal.prototype = {
    eat: function () {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function (newLocation) {
        this.location = newLocation;
        console.log(`I live in ${this.location} and I can eat`);
    },
    summary: function () {
        console.log(`I live in ${this.location} and I haev ${this.numberOfLegs}`);
    },

}

function CreateDog(name, color, location, numberOfLegs) {
    CreateAnimal.call(this, location, numberOfLegs);
    this.name = name;
    this.color = color;


}
CreateDog.prototype = {
    bark: function () { alert(`I am ${this.name} and I can bark 🐶`); },
    changeName: function (newName) { this.name = newName },
    changeColor: function (newColor) { this.color = newColor },
    summary: function () { return `I am ${this.name} and I am of ${this.color} color. I can also bark` }
}


function CreateCat(name, colorOfEyes, location, numberOfLegs) {
    CreateAnimal.call(this, location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;


}
CreateCat.prototype = {
    meow: function () { alert(`I am ${this.name} and I can do meow meow 😹`); },
    changeName: function (newName) { this.name = newName },
    changeColorOfEyes: function (newColor) { this.colorOfEyes = newColor },
    summary: function () { return `I am ${this.name} and the color of my eyes is ${this.colorOfEyes} I can also do meow meow` }
}

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);
Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

let bullDog = new CreateDog('Pochi', `black`, `Dharamshala`, 5);


//Using class pattern for inheritance:

class Animal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation) {
        this.location = newLocation;
        console.log(`I live in ${this.location} and I can eat`);
    }
    summary() {
        console.log(`I live in ${this.location} and I haev ${this.numberOfLegs}`);
    }

}


class Dog extends Animal {
    constructor(name, color, location, numberOfLegs) {
        super(location, numberOfLegs);
        this.name = name;
        this.color = color;
    }

    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    }
    changeName(newName) {
        this.name = newName
    }
    changeColor(newColor) {
        this.color = newColor
    }
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}


class Cat extends Animal {

    constructor(name, colorOfEyes, location, numberOfLegs) {
        super(location, numberOfLegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow() {
        alert(`I am ${this.name} and I can do meow meow 😹`);
    }
    changeName(newName) {
        this.name = newName
    }
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor
    }
    summary() {
        return `I am ${this.name} and the color of my eyes is ${this.colorOfEyes} I can also do meow meow`
    }
}




let bullDogUsingClass = new Dog('Pochi', `black`, `Dharamshala`, 5);