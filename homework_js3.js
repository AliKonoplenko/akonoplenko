// let x = 5; let y = 5; Use the addition assignment (*=) operator that will result in x being 50 (same as x = x * y).
let x = 5
let y = 5
console.log(x*=y)


// create new variable 'let1' in lower case. 
let let1 = 'wow'
console.log(let1)


// Update value 'let1' to upper case.
let1 = let1.toUpperCase()
console.log(let1)


// Create another variable with few words and contain 'let1'. use method replace to word 'BANG'
let text = `A little party never killed nobody ${let1}`
console.log(text)
console.log(text.replace(`${let1}`, 'BANG'))


// create comparison operator to log true, when x is NOT equal to y.
let string = 'string'
let num = 123
console.log(string != num)


// create variable with using addition assignment (+=) for two numbers
let q = 1
let w = 3
let e = q += w
console.log(e)


// create variable that should be 'false' with using equality operator 
 let a = 3
 let b = 'three'
 let c = a == b
 console.log(c)
