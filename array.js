let arr1 = ['aaa', 123, 'bbb', 'werq', true, function () { console.log(`Hi from array`) }];

arr1[3] = 'new';

async function getOnlyString(baseArr) {

let result = [];
resultWithUpperC = [];

for (let i = 0; i < baseArr.length; i++) {
    // console.log(arr1[i])

    if (typeof baseArr[i] === 'string') {
        await result.push(baseArr.at(i))
    }   
}
for (let y = 0; y < result.length; y++) {
    let word = result.at(y)
    let firstLetter = await String(word[0]).toUpperCase()
    let restLetters = await String(word.slice(1))
    await resultWithUpperC.push(firstLetter + restLetters)
    }
console.log(resultWithUpperC)
}
getOnlyString(arr1)
// console.log(resultR)
// console.log(resultWithUpperC)
