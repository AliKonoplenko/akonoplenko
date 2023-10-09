export default class MainPage {

    menu() {
        return cy.get('header li').eq(2).click()
    }


    title() {
        return cy.get('div.b-showcase.m-hide a.bi.bi-tools')
    }

}