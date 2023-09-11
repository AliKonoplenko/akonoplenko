import fetch from 'node-fetch'
import fs from 'fs-extra'

const url = 'https://reqres.in/api/users?page=1&per_page=5'
const fileName = './response_1694287579730.json'

let firstOpt = true

async function flow() {
    let resultJson;
    if (firstOpt) {
        resultJson = await getFromUrl(url)
    } else {
        resultJson = await getFromFile(fileName)
    }

    await write(resultJson)
    await nameARR()
    await console.log(nameArr)
}

flow()

async function getFromUrl(url) {
    let response = await fetch(url)
    let data = await response.json()
    // console.log(data)
    return data;

}

async function getFromFile(name) {
    let response = await fs.readJson(name)
    // console.log(response)
    return response;
}



async function write(json) {
    await fs.writeJson('./hw6_yarn.json', json)
}

let nameArr = []

async function nameARR() {
    let response = await fs.readJson('./hw6_yarn.json')

    for (let element of response.data) {
        element['first_name']
        nameArr.push(element['first_name'])
    }
}

