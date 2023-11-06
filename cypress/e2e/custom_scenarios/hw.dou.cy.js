///  <reference types="cypress" />

import {mainPage} from '../../pages/main.js'

describe('Testing DOU website', () => {

    it('click on the title', () => {
        cy.visit('https://dou.ua')
        mainPage.menu()
        mainPage.title()
    })

})