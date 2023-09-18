class User {
    _arms = 2
    static planet = 'Earth'
    #legs = 2
    fingers = 10

    constructor(name, legs, arms, fingers) {
        this.name = name
        this.#legs = legs
        this.arms = arms
        this.fingers = fingers

    }
    sayHello() {
        console.log('Hello')
    }

    getName() {
        return this.name
    }
    setName(val) {

        if (val.length < 5 || typeof val != 'string') {
            throw new Error('Please fill only letters')
        }
        this.name = val
    }
}

class Student extends User {
    mark = 5

    speak() {
        console.log('Yes, I know answer')
    }
}

class SchoolStudent extends Student {
    speak() {
        super.speak()
        console.log('My answer very short and correct')
    }
}


let student1 = new Student('jenkins', 2, 2)
student1.sayHello()
console.log(student1.getName())
console.log('student1 ^^^^')
let student2 = new SchoolStudent('travis', 2, 2)
student2.speak()

let student3 = new SchoolStudent('mimimi', 2, 2, 9)
console.log(student3.fingers)
student3.fingers = 4
console.log(student3.fingers)



let userD = new User('Birdss', 2, 2)
let nnn = userD.getName
console.log(nnn)
console.log(User.planet)
userD.legs = 3
console.log(userD.legs)




