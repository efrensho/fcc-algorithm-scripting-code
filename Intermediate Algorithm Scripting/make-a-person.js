// using standar function syntax
var Person = function (firstAndLast) {
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];

    //get
    this.getFirstName = function () {
        return firstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.getFullName = function () {
        return firstName + " " + lastName;
    };

    //set
    this.setFirstName = function (first) {
        firstName = first;
    };

    this.setLastName = function (last) {
        lastName = last;
    };

    this.setFullName = function (firstAndLast) {
        firstName = firstAndLast.split(" ")[0];
        lastName = firstAndLast.split(" ")[1];
    };
};


// using ES6 arrow syntax 
var Person = function (firstAndLast) {
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];

    //get
    this.getFirstName = () => firstName;

    this.getLastName = () => lastName;

    this.getFullName = () => firstName + " " + lastName;

    //set
    this.setFirstName = (first) => firstName = first;

    this.setLastName = (last) => lastName = last;

    this.setFullName = (firstAndLast) => {
        firstName = firstAndLast.split(" ")[0];
        lastName = firstAndLast.split(" ")[1];
    };
};


// tests
var bob = new Person('Bob Ross');
console.log(bob.getFullName());

bob.setLastName('Miller');
console.log(bob.getFullName());