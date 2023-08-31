let jsonObj1 = '{"name": "Alina", "lname": "Konoplenko", "age": 27}'

let obj2 = JSON.parse(jsonObj1)

console.log(obj2.name)


obj2.city = "York"

console.log(obj2)

jsonObj1 = JSON.stringify(obj2)

console.log(jsonObj1)