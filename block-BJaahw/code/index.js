// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.



// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
// function createUser(name , age){
//     let user={};
//     user.name=name;
//     user.age=age;


//     user.sayHello=function (){alert(`Welcome ${user.name}`)};

//     return user;
// }

// let personOne= createUser("Devanshu", 28);
// let personTwo= createUser("Ajay", 29);
// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
// function createUser(name , age){
//     let user=Object.create(createUserMethods);
//     user.name=name;
//     user.age=age;

//   return user;
// }
// createUserMethods= {
//     sayHello:function (){alert(`Welcome ${this.name}`)}
// }
// let personOne= createUser("Devanshu", 28);
// let personTwo= createUser("Ajay", 29);
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
// function createUser(name , age){
//     let user=Object.create(createUser.prototype);
//     user.name=name;
//     user.age=age;

//   return user;
// }
// createUser.prototype= {
//     sayHello:function (){alert(`Welcome ${this.name}`)}
// }
// let personOne= createUser("Devanshu", 28);
// let personTwo= createUser("Ajay", 29);
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
// function createUser(name, age) {

//     this.name = name;
//     this.age = age;

// }
// createUser.prototype = {
//     sayHello: function () { alert(`Welcome ${this.name}`) }
// }
// let personOne = new createUser("Devanshu", 28);
// let personTwo = new createUser("Ajay", 29);
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

// 8. Convert the `createUser` function into `User` class.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        alert(`Welcome ${this.name}`)
    }
}

let personOne = new User("Devanshu", 28);
let personTwo = new User("Ajay", 29);
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
//Success
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
//Success