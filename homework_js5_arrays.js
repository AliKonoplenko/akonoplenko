// create array with 10 elements
let arr1 = new Array(10)
console.log(arr1)

// create a function that will add value to array under index 500
let m = 'Privet Drive'
let i = 500

function addValue(i, m) {
    arr1[i] = m
}
addValue(i, m)
console.log(arr1)

// create a function with for inside and conditions to create two new arrays - one with string elements only, another only with numbers

let arr2 = ['qwe', 'asd', 'rty', 'fgh', 123, 'zxc', 456, 123, 52, 5, 'gsd']
let strArr = []
let numArr = []

function strNum() {
    for (let element of arr2) {
        if (typeof element === 'string') {
            strArr.push(element)
        } else if (typeof element === 'number') {
            numArr.push(element)
        } else {
            console.log('Element is not string or number')
        }
    }
}
strNum()
console.log(strArr)
console.log(numArr)