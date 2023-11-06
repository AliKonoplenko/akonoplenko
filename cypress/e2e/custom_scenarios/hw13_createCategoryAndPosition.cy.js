///  <reference types="cypress" />



describe('login with api request', () => {

    beforeEach(() => {
        cy.loginAndSetLocalStorage()
    })

    let category

    it('create category', () => {
        cy.createNewCategory('TEST CATEGORY', (response) => {
            category = response
        })
        cy.visit('http://5.189.186.217/categories')
        cy.get('.content a.collection-item', {timeout:5000}).should('be.visible')
    })

    it('create position', () => {
        cy.createNewPosition('cypress', '3000', category)
        cy.visit('http://5.189.186.217/categories/' + category)
        cy.get('a.collection-item').eq(-1).should('be.visible')
    })
})


