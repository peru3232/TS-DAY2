"use strict";
//-------------------------------------------------------------------------------------
//Exercise 1:
//create class
class Person {
    constructor(name, age, jobTitle, arr) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        this.arr = arr;
        if (typeof arr !== 'undefined') {
            arr.push(this);
        }
        ;
    }
    greetings() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
//make a new array for all persons(pushed in class)
const arrPersons = [];
//create new Person Dataset 
new Person("Johnny Doe", 33, "Coder", arrPersons);
//output all Persons who pushed in the Array...
arrPersons.forEach(element => {
    console.log(element.greetings());
});
//-------------------------------------------------------------------------------------
//Exercise 2:
class Person_BIG extends Person {
    constructor(name, age, jobTitle, salery, jobLocation, arr) {
        super(name, age, jobTitle, arr);
        this.salery = salery;
        this.jobLocation = jobLocation;
        this.arr = arr;
    }
    greetings() {
        return super.greetings() + ` and I get ${this.salery} every month, and I work in ${this.jobLocation}`;
    }
}
//make a new array for all persons(pushed in class)
const arrPersons_BIG = [];
//create new Person Dataset 
new Person_BIG("Johnny Doe", 33, "Coder", 32000, "Malibu", arrPersons_BIG);
//output all Persons who pushed in the Array...
arrPersons_BIG.forEach(element => {
    console.log(element.greetings());
});
//-------------------------------------------------------------------------------------
