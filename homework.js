<reference types="cypress" />

context('Check the AIN website', () => {

    it('Open the main page and click startups', () => {
      cy.visit('https://ain.ua/')
      cy.get('#subbody > div.main-content > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > a:nth-child(1) > h2').click()
      cy.url().should('contain', 'investycziyi/')
      cy.wait(2000)
    })
  
  })
  
  
  context('10steps', () => {
  
    it('10steps', () => {
      cy.visit('https://ain.ua/') //open the website
      cy.get('#header > div > div.header-bottom > div.menu-container > div.right-side-menu > div > div > a:nth-child(1)').click() //change lang to ua
      cy.wait(2000)
      cy.scrollTo('bottom') //sctoll to the page bottom
      cy.get('#footer > div > div.columns.medium-12.large-8.footer-column.footer-collumn-2 > div > nav > ul > li.menu-item.column-1.columns.small-12.medium-12.large-2 > a').click() //open the "Про проект"
      cy.get('#header > div > div.header-bottom > button').click() //open burger-menu
      cy.get('#offCanvasRight > div.custom-canvas-content > span > span > svg').click() //click on the search icon
      cy.get('#subbody > div.header-search-container > div > input').type('Twitter') //type "Twitter" in the search field
      cy.get('#subbody > div.header-search-container > div > input').clear() //clear the search field
      cy.get('#subbody > div.header-search-container > div > input').type('IOS') //type "IOS" in the search field
      cy.get('#subbody > div.header-search-container > div > div > li:nth-child(2) > a').click() //click on the searcg result
      cy.get('#show-comments').click() //click on the "Show comments" 
      cy.get('#respond > div.login_zone > a').click() //click on the "Login"
      cy.get('[id="user-name-log"]').type('aflorinskaa@gmail.com') //type email
      cy.get('[id="user-pass-log"]').type('123qweASD!') //type password
      cy.wait(2000)
      cy.get('#comment_auth_button').click() //click "Sign In/Sigh Up" button
    })
  })