const obj1 = {p1:'prop1', p2:'prop2', p3:'prop3'}

for (let p in obj1) {
    console.log(obj1[p])
}

const arr1 = ['val1', 'val2', 'val3']

for (let valofArr in arr1) {
    console.log(valofArr)
}

const arr2 = ['val1', 'val2', 'val3']

for (let valofArr of arr2) {
    console.log(valofArr)
}