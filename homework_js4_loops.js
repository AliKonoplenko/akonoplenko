// rewrite to while
//      for (let i = 0; i < 3; i++) {
//          alert( `number ${i}!` );
//          }

// let i = 0
// while (i < 3) {
//     alert(`number ${i}!`)
//     i++
// }


// create a loop from 0 to 10, inside create a variable 'NotDivide', and assign numbers that can't divide 2 and console every time that number. 

for (let notDivide = 0; notDivide <= 10; notDivide++) {
    if (notDivide % 2 == 1) {
        console.log(notDivide)
    }
}

// create loop with condition from 0 to 10, and jump to the next iteration when i is 5.

for (i = 0; i <= 10; i++) {
    if (i == 5) continue
    console.log(i)
}

// create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'

a = 1
if (a < 10) {
    console.log("Hello")
} else if (a > 10) {
    console.log("Bye")
} else {
    console.log("Other definition")
}