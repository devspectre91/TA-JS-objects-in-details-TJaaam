## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello John, undefined
console.log(user2.sayHello()); // Hello Arya, undefined
console.log(user.sayHello.call(user2)); //Hello Arya, undefined
console.log(user.sayHello.call(user2, 'Hey')); // Hey Arya, undefined
console.log(user.sayHello.apply(user2, ['Hey'])); // Hey Arya, undefined
console.log(typeof user.sayHello.bind(user2)); // function
console.log(user.sayHello.bind(user2)()); // Hello Arya, undefined
console.log(userSayHello()); // Hello, undefined
console.log(typeof userSayHello.bind(user2)); // function
console.log(userSayHello.bind(user2)()); // Hello, Arya, undefined
console.log(user3.sayHello()); //TypeError,sayHello is not a function
console.log(userSayHello.apply(user3)); // Hello Bran, undefined
console.log(userSayHello.call(user3)); //Hello Bran, undefined
console.log(typeof new MainUser()); // object
console.log(typeof new MainUser()); // object
console.log(new MainUser().sayHello()); //Hello Tyrion
console.log(new MainUser().sayHello.call(user2)); // Hello Arya
console.log(new MainUser().sayHello.call(user)); // Hello John
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // Welcome!, John
```
