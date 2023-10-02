context('Testing Cypress website', () => {


    beforeEach(() => {
        cy.visit('https://www.cypress.io/')

    })

    it('Wandering around the website', () => {
        cy.get('div.nav-bar a[href="/pricing"]').click()
        cy.get('body > main > section:nth-child(2) > div.fluid-container.relative.z-50 > astro-island > div > div > div:nth-child(2) > ul > li:nth-child(3) > a').click()
            .wait(1500)
        cy.get('label[data-cy="pricing-monthly-estimate"]').click()
            .wait(1500)
            .and('have.attr', 'for', 'Monthly-estimate')

        cy.get('div.align-center button.border-1').click()
            .and('have.attr', 'aria-expanded', 'true')

        cy.get('div.card button.group.flex').eq(2).click()
        cy.get('div.border-b-transparent').eq(0).click()
            .and('contain', "Customer stories")

        cy.get('div.grid.border-t a[href="/customer-stories"]').click()
        cy.get('button.border.border-solid').wait(1500)
            .click()
            .should('be.visible')

        cy.get('input[name="firstname"]').type('Alina')
        cy.get('input[name="lastname"]').type('Test')
        cy.get('input[name="email"]').type('aflorinskaa+t@gmail.com')
        cy.get('input[name="company"]').type('Noname')
        cy.get('textarea[name="support_message"]').type('Test-test-test')

    })
})
