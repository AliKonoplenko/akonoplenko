///  <reference types="cypress" />

import MainPage from '../../pages/main.js' 
 
describe('Testing DOU website', () => {

const mainpage = new MainPage()

it('click on the title', () => {
    cy.visit('https://dou.ua')
    mainpage.menu()
    mainpage.title().click()
})

})