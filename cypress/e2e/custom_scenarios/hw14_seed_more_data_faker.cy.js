import { ObjectId } from 'mongodb'
import { faker } from '@faker-js/faker';


describe('HW_14', () => {
    
    context('Faker_using', () => {

        it('create user', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/users/register',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTQ3N2ZhMWVjYjI5ZTBmY2VhYTI5MzciLCJpYXQiOjE2OTkxODYzMTQsImV4cCI6MTY5OTc5MTExNH0.OCNDBy8a7xFXDYWdvMuyq5Pi3ANo-JY8noFBybGRWlo'
                },
                body: {
                    firstName: faker.person.firstName(),
                    lastName: faker.person.lastName(),
                    username: faker.internet.userName(),
                    password: faker.internet.password()
                }
            })

        })

        it('username checking', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/api/users',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTQ3N2ZhMWVjYjI5ZTBmY2VhYTI5MzciLCJpYXQiOjE2OTkxODYzMTQsImV4cCI6MTY5OTc5MTExNH0.OCNDBy8a7xFXDYWdvMuyq5Pi3ANo-JY8noFBybGRWlo'
                }
            }).then(({body}) => {
                    expect(JSON.stringify(body)).to.include('username')
                })
            

        })

    })

})
