import { ObjectId } from 'mongodb'


describe('Find data', () => {

    context('usage of mongodb', () => {
        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })

    })

    context('UI & API request', () => {
        it('create user', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/users/register',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTQ3N2ZhMWVjYjI5ZTBmY2VhYTI5MzciLCJpYXQiOjE2OTkxODYzMTQsImV4cCI6MTY5OTc5MTExNH0.OCNDBy8a7xFXDYWdvMuyq5Pi3ANo-JY8noFBybGRWlo'
                },
                body: {
                    firstName: 'sss',
                    lastName: 'qqq',
                    username: 'Mi',
                    password: '123qweasd'
                }
            })

        })

    })

})

