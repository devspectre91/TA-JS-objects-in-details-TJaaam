
// using function
function createUser(name, id, noOfProjects) {
    let user = {};
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    user.getProjects = function () {
        return user.noOfProjects;
    };
    user.changeName = function (newName) {
        user.name = newName;
    }
    user.incrementProject = function () {
        user.noOfProjects++;
        return noOfProjects;
    }
    user.decrementProject = function () {
        user.noOfProjects--;
        return noOfProjects;
    }
    return user;
}

let user1= createUser("Devanshu", 1, 90);
let user2=createUser("Ajay", 2, 100);

//using prototypal pattern

function createUser(name, id, noOfProjects) {
    let user = Object.create(createUserMethods);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;

    return user;
}

let createUserMethods={
    getProjects: function () {
        return this.noOfProjects;
    },
    changeName: function (newName) {
        this.name = newName;
    },
    incrementProject: function () {
        this.noOfProjects++;
        return this.noOfProjects;
    },
    decrementProject :function () {
        this.noOfProjects--;
        return this.noOfProjects;
    }
};

let user1= createUser("Devanshu", 1, 90);
let user2=createUser("Ajay", 2, 100);


//pseudoclassical pattern
function CreateUser(name, id, noOfProjects) {

    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;


}

CreateUser.prototype={
    getProjects: function () {
        return this.noOfProjects;
    },
    changeName: function (newName) {
        this.name = newName;
    },
    incrementProject: function () {
        this.noOfProjects++;
        return this.noOfProjects;
    },
    decrementProject :function () {
        this.noOfProjects--;
        return this.noOfProjects;
    }
};

let user1= new CreateUser("Devanshu", 1, 90);
let user2= new CreateUser("Ajay", 2, 100);

class pattern

class User {
    constructor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }

    getProjects() {
        return this.noOfProjects;
    }
    changeName(newName) {
        this.name = newName;
    }
    incrementProject() {
        this.noOfProjects++;
        return this.noOfProjects;
    }
    decrementProject() {
        this.noOfProjects--;
        return this.noOfProjects;
    }

}



let user1 = new User("Devanshu", 1, 90);
let user2 = new User("Ajay", 2, 100);