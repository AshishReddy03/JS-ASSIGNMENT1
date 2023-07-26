//ASSIGNMENT 1: ARRAY OPERATIONS

const fruits = ["apple", "banana", "orange"];
fruits.shift();
fruits.push("grape");
fruits[1] = "pear";
console.log(fruits);

// ASSIGNMENT2 : OBJECT OPERATIONS

const person = {
    name: "john",
    age: 30,
    city: "New York"
}
delete person.age;
person.job = "Engineer";
person.city = "San Fransico";

// ASIGNMENT 3 :  ARRAY OF OBJECTS AND OPERATIONS.
const cars = [{
    make: "Toyota",
    model: "Camry",
    year: 2018
}]
console.log(cars[0]);
cars.pop();
cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020
})
console.log(cars[0]);
cars[0].model = "Accord";
console.log(cars);

