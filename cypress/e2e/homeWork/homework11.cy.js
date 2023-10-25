///<reference types="cypress" />


context('Check the AIN website', () => {

  it('Open the main page and click startups', () => {
    cy.visit('https://dou.ua/')
    cy.url().then(($url) => {
    cy.task('saveURL', $url)
  })
  })
})