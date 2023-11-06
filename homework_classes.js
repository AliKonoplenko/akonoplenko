class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        }
    }
    eat() { console.log('eating') }
    listen() { console.log('listening') }
}

class Worker extends Human {
    constructor(salary, workTime) {
        super()
        if (typeof salary != 'number') {
            throw new Error('Not number')
        }
        this.salary = salary;

        if (typeof workTime != 'number') {
            throw new Error('Not number')
        }
        this.workTime = workTime;
    }

    sayGreetings() {
        console.log('Hello, nice person!')
    }

    sayWorkIsFinished() {
        console.log('Hey, work is finished!')
    }

    isAtWork() {
        let date = new Date()
        let timeH = date.getHours()
        let timeM = date.getMinutes()
        if (timeH >= 9 && timeH < 18) {
            console.log(`Working hours - ${timeH}:${timeM}`)
        } else {
            console.log(`Non-working hours - ${timeH}:${timeM}`)
        }
    }
}

let worker1 = new Worker(12, 23)
worker1.sayGreetings()
worker1.sayWorkIsFinished()
worker1.isAtWork()
