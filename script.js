//-------------------------------------------------------------------------------------
//Exercise 1:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//create class
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle, arr) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        this.arr = arr;
        if (typeof arr !== 'undefined') {
            arr.push(this);
        }
        ;
    }
    Person.prototype.greetings = function () {
        return "Hello there, My name is ".concat(this.name, " and I am ").concat(this.age, " years old, and I am a ").concat(this.jobTitle);
    };
    return Person;
}());
//make a new array for all persons(pushed in class)
var arrPersons = [];
//create new Person Dataset 
new Person("Johnny Doe", 33, "Coder", arrPersons);
//output all Persons who pushed in the Array...
arrPersons.forEach(function (element) {
    console.log(element.greetings());
});
//-------------------------------------------------------------------------------------
//Exercise 2:
var Person_BIG = /** @class */ (function (_super) {
    __extends(Person_BIG, _super);
    function Person_BIG(name, age, jobTitle, salery, jobLocation, arr) {
        var _this = _super.call(this, name, age, jobTitle, arr) || this;
        _this.salery = salery;
        _this.jobLocation = jobLocation;
        _this.arr = arr;
        return _this;
    }
    Person_BIG.prototype.greetings = function () {
        return _super.prototype.greetings.call(this) + " and I get ".concat(this.salery, " every month, and I work in ").concat(this.jobLocation);
    };
    return Person_BIG;
}(Person));
//make a new array for all persons(pushed in class)
var arrPersons_BIG = [];
//create new Person Dataset 
new Person_BIG("Johnny Doe", 33, "Coder", 32000, "Malibu", arrPersons_BIG);
//output all Persons who pushed in the Array...
arrPersons_BIG.forEach(function (element) {
    console.log(element.greetings());
});
//-------------------------------------------------------------------------------------
