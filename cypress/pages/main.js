export const mainPage = {
    menu() {
        cy.get('header li').eq(2).click()
    },
    title() {
        cy.get('div.b-showcase.m-hide a.bi.bi-tools').click()
    }

}