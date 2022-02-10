//-------------------------------------------------------------------------------------
//Exercise 1:

//create class
class Person {
    constructor(public name:string, public age:number, public jobTitle:string, public arr?:Array<Person> ){
        if (typeof arr !== 'undefined') {arr.push(this) };
    }
    greetings() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
//make a new array for all persons(pushed in class)
const arrPersons: Array<Person> = [];
//create new Person Dataset 
new Person("Johnny Doe", 33, "Coder", arrPersons);
//output all Persons who pushed in the Array...
arrPersons.forEach(element => {
    console.log(element.greetings());
});
//-------------------------------------------------------------------------------------
//Exercise 2:
class Person_BIG extends Person {
    constructor( name:string,  age:number,  jobTitle:string, public salery:number, public jobLocation:string, public arr?:Array<Person> ) {
        super(name, age, jobTitle, arr);
    }
    greetings() {
        return super.greetings() + ` and I get ${this.salery} every month, and I work in ${this.jobLocation}`
        
    }
}

//make a new array for all persons(pushed in class)
const arrPersons_BIG: Array<Person_BIG> = [];
//create new Person Dataset 
new Person_BIG("Johnny Doe", 33, "Coder", 32000, "Malibu", arrPersons_BIG);
//output all Persons who pushed in the Array...
arrPersons_BIG.forEach(element => {
    console.log(element.greetings());
});
//-------------------------------------------------------------------------------------
