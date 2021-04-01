// ##More about class

//Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` 
//to the value of `side`.

// class Square{
//         constructor(side){
//             this.height=side;
//             this.width=side;
//         }
// }

// let sq= new Square(12);

// Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
// class Square{
//     constructor(side){
//         this.height=side;
//         this.width=side;
//     }
//     description(){
//         alert(`The square is ${this.width} x ${this.height}`);
//     }
//     
// }

// let sq= new Square(12);
// Create a method inside the class named `calcArea` that will return the area of the square.
// class Square{
//     constructor(side){
//         this.height=side;
//         this.width=side;
//     }
//     description(){
//         alert(`The square is ${this.width} x ${this.height}`);
//     }
//     calcArea(){
//         return this.height*this.width;
//     }
// }

// let sq= new Square(12);
// Create a `area` getter method using which we can get the area of the square.
// class Square{
//     constructor(side){
//         this.height=side;
//         this.width=side;
//         this._area=side*side;
//     }
//     description(){
//         alert(`The square is ${this.width} x ${this.height}`);
//     }
//     calcArea(){
//         return this.height*this.width;
//     }

//     get area(){return this._area;}
// }

// let sq= new Square(12);
// Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`
// class Square{
//     constructor(side){
//         this.height=side;
//         this.width=side;
//         this._area=side*side;
//     }
//     description(){
//         alert(`The square is ${this.width} x ${this.height}`);
//     }
//     calcArea(){
//         return this.height*this.width;
//     }

//     get area(){return this._area;}
//     set area(newArea){
//         if(newArea===this.area){
//         this.width= Math.sqrt(newArea);
//         this.width=this.height;
//         return this._area;} else{
//             alert(`Not a valid input`);
//         }}
// }

// let sq= new Square(12);
// Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.
// class Square{
//     constructor(side){
//         this.height=side;
//         this.width=side;
//         this._area=side*side;
//     }
//     static isEqual(one, two){
//         if(one.area==two.area){
//             return true;
//         }else {
//             return false;
//         }
//     }
//     description(){
//         alert(`The square is ${this.width} x ${this.height}`);
//     }
//     calcArea(){
//         return this.height*this.width;
//     }

//     get area(){return this._area;}
//     set area(newArea){
//         if(newArea===this.area){
//         this.width= Math.sqrt(newArea);
//         this.width=this.height;
//         return this._area;} else{
//             alert(`Not a valid input`);
//         }}
// }

// let sq1= new Square(12);
// let sq2=new Square(10);
// Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`
class Square {
    constructor(side = 0) {
        this.height = side;
        this.width = side;
        this._area = side * side;
        this.areaAccessed = 0;
    }
    static isEqual(one, two) {
        if (one.area == two.area) {
            return true;
        } else {
            return false;
        }
    }
    description() {
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea() {
        return this.height * this.width;
    }

    get area() { if (this.areaAccessed < 5) { this.areaAccessed++; return this._area; } else { alert(`Upper limit Reached`); } }
    set area(newArea) {
        if (newArea === this.area) {
            this.width = Math.sqrt(newArea);
            this.width = this.height;
            return this._area;
        } else {
            alert(`Not a valid input`);
        }
    }
}

let sq1 = new Square(12);
let sq2 = new Square(10);
// Create two instance of the `Square` class
//Done
// Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.
//Done
// Check the `isEqual` method and pass the two instance you created above.
//Done


//## User Class

// Create a `User` class that accepts `firstName` and `lastName` property

// Create a getter method named `fullName` that will return the full name of the person.

// Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

// Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

// Create two instance of the `User` class

// Check by using the `fullName` setter method with name bigger than 5 characters.

// Check by using the `fullName` setter method with name less than 5 characters.

// Check the `fullName` using getter

// Check the `nameContains` method

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(userName) {
        if (userName.length < 5) {
            alert(`Full name should be more than 5 characters`);
        }
        else {
            this.firstName = userName.split(" ").slice(0, -1).join();
            this.lastName = userName.split(" ").slice(-1).join();
        }

    }
    nameContains(str) {
        if (this.fullName.includes(str)) {
            return true;
        } else {
            return false;
        }
    }
}

let user1 = new User("Devanshu", "Tiwari");
let user2 = new User("Ajay", "Thakur");
