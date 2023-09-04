// create a function that takes one param and inside makes the value Uppercase
// 	if the parameter not string type - console message about the incorrect type of data.

function upperCase(a) {
    if (typeof a == 'string') {
        return a.toUpperCase()
    } else { 
        return ('Incorrect data type')
    }
}

console.log(upperCase('sunny day'))

//  create js function that add properties for the object, allowing only number

let obj1 = { "country": "Ukraine", "city": "Kharkiv", "street": "Sumska" }

function addPropToObj(value, prop, objX) {
    if (typeof value == 'number') {
        return objX[prop] = value
    }
}

addPropToObj(563256, 'postcode', obj1)
console.log(obj1)

// create JS object with 5 different properties

let obj2 = { "name":"Lina", "surname":"Konop", "country":"CZ", "city":"Prague", "phone_number":380958761234}
console.log(obj2)

// with previously created function add a new property
 
addPropToObj(29, 'age', obj2)
console.log(obj2)

// check the function syntax and if some issues propose
// let sum == function{a, b} (
//   return a + b;
// )

function sum(a, b) {
return a + b;
}