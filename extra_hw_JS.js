const fs = require('fs-extra')
const { parse } = require('path')

const path = './extra_hw.json'

fs.readFile(path, (err, obj) => {
    if (err) console.error("bloody hell")
    let parsedJson = JSON.parse(obj)
    console.log(parsedJson);

    parsedJson["age"] = 22
    let jsonAsString = JSON.stringify(parsedJson)
    console.log(jsonAsString)
    
    fs.writeFile(path, jsonAsString, err => {
        if (err) return console.error(err)
        console.log('Update was successful!')
    })

})