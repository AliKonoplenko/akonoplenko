///<reference types="cypress" />


context('Check the AIN website', () => {

    it('Open the main page and click startups', () => {
      cy.visit('https://ain.ua/')
        cy.task('saveURL', 'https://ain.ua/')
    })
  })