
class Stack {
    constructor() {
        this.stack = [];


    }
    pop() {
        if (this._peek != -1) {
            this.stack.pop();


        } else {
            alert("Stack is empty!")
        }
    }
    push(newItem) {
        if (newItem) {
            this.stack.push(newItem);

        }
    }
    peek(i = this.stack.length - 1) {
        return this.stack[i];
    }
    get length() {
        return this.stack.length;
    }
    reverse() {
        return this.stack.reverse();
    }
    isEmpty() {
        if (this.stack.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    displayStack() {
        return this.stack.toString();
    }
}

// let myStack = new Stack();
// myStack.push('One');
// myStack.push('Two');
// console.log(myStack.length); // 2
// console.log(myStack.peek()); // "Two"
// console.log(myStack.peek(0)); // "One"
// console.log(myStack.reverse()); // ['Two', 'One']
// console.log(myStack.displayStack()); // 'Two One'
// myStack.pop();
// console.log(myStack.length); // 1
// console.log(myStack.peek()); // 'Two'
// console.log(myStack.isEmpty()); // false
// myStack.pop();
// console.log(myStack.isEmpty()); 

class Queue {
    constructor() {
        this.queue = [];


    }

    get length() {
        return this.queue.length;
    }
    enqueue(item) {

        this.queue.push(item);

    }
    dequeue() {
        if (!this.isEmpty()) {
            this.queue.shift();
        } else {
            alert("Queue is empty!");
        }
    }
    displayQueue() {
        return this.queue.toString();
    }
    peek(i = 0) {
        return this.queue[i];
    }
    isEmpty() {
        if (this.queue.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true