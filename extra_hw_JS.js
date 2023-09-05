const fs = require('fs-extra')

const path = './extra_hw.json'
let fun = (err, obj) => {

}

fs.readFile(path, fun)

fs.readFile(path, (err, obj) => {
    if (err) console.error("bloody hell")
    updateObj(obj)
})
function updateObj(obj) {
    let parsedJson = JSON.parse(obj)
    console.log(parsedJson);
    parsedJson["age"] = 22
    writeToFile(parsedJson)
}

function writeToFile(obj2) {
    let jsonAsString = JSON.stringify(parsedJson)
    console.log(jsonAsString)

    fs.writeFile(path, jsonAsString, err => {
        if (err) return console.error(err)
        console.log('Update was successful!')
    })
} 