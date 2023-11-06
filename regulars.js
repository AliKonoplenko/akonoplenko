const mArr = ['qe', 'ADF', "", 123, '*!', "jkF", " "]
const re = /^[A-Z]+$/

for (let i of mArr) {
    console.log(upperLetter(i))
}

function upperLetter(el) {
    let res = re.test(el)
    return res
}