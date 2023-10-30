///  <reference types="cypress" />


describe('login with api request', () => {

    beforeEach(() => {
        cy.loginAndSetLocalStorage()
    })

    it('create category', () => {
        cy.createNewCategory('My test category 20')
        cy.visit('http://5.189.186.217/categories')
        cy.get('.content a.collection-item', {timeout:5000}).should('be.visible')
    })

    it('create position', () => {
        cy.createNewPosition('cypress', '2')
        cy.visit('http://5.189.186.217/categories/653fda33146a28199b538d82')
        cy.get('a.collection-item').eq(-1).should('be.visible')
    })
})


