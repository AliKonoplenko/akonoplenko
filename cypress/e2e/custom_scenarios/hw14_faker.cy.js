///  <reference types="cypress" />
import { faker } from '@faker-js/faker';


describe('login with api request', () => {

    beforeEach(() => {
        cy.loginAndSetLocalStorage()
    })

    let category

    it('create category', () => {
        cy.createNewCategory('TEST CATEGORY', (response) => {
            category = response
        })
      
    })

    it('create position', () => {
        cy.createNewPosition('cypress', '3000', category)
        cy.visit('http://5.189.186.217/categories/' + category)
    })
})


