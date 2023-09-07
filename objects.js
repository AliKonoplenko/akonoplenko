const objMy = { name: "Alina", lname: "Kon", age: 1234 }
const testDataEnv2 = { url: 'url2', username: 'user2' }

const testDataEnv1 = {
    url: 'url1',
    usernamae: 'user1',
    getThisProp() {
        return this.url
    },
    server: {
        url: '123.0.0.21',
        protocol: 'https',
        showFullAddress() {
            return this.protocol + '://' + this.url
        }
    }, mailAddressArr: [
        {
            mail_server: 'gmail',
            mail_user: 'blah',
            mail_pass: "123123123"
        }

    ]
}

console.log(testDataEnv1.mailAddressArr[0].mail_pass)


// let urlForTest = testDataEnv1.server.showFullAddress()
// console.log(urlForTest)
// console.log(testDataEnv1.server.protocol)



function addPropColor() {
    this.color = 'red'
}
// addPropColor.prototype = objMy
// const objMy2 = new addPropColor()
objMy.addPropColor = addPropColor
// objMy.addPropColor()
// console.log(Object.values(objMy))


// function getAllProp() {
//     return this.age;
// }

// objMy.getAllProp = getAllProp
// testDataEnv2.getAllProp = getAllProp

// console.log(objMy.getAllProp())



// let getValFromObj = testDataEnv1.getThisProp()
// console.log(getValFromObj)







// console.log(Object.keys(testDataEnv1))

testDataEnv1.pass = 'Pass1'

// console.log(Object.keys(testDataEnv1))
// console.log(Object.values(testDataEnv1))

// for (let data in testDataEnv1) {
//     console.log(`${data}: ${testDataEnv1[data]}`)
// }

// delete testDataEnv2.url
// console.log(testDataEnv2)

// console.log(Object.hasOwn(testDataEnv1, 'url'))
