// Review OOP in JS

// Syntax class => ES6/ES2015

const person = {
    name: 'Kendy',
    age: 100,
    walk: function () {
        console.log('walking...');
    }
}

class Person { // Parent class
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Men extends Person {
    constructor(name, age) {
        super(name, age, 'male');
    }
}

console.log(new Person('Kendy', 100, 'male'));
console.log(new Men('Kendy', 100));