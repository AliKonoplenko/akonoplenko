// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('loginAndSetCookie', (url, cookieN, cookieV) => {
//     cy.visit(url)
//     cy.setCookie(cookieN, cookieV)
// })


Cypress.Commands.add('loginAndSetLocalStorage', () => {
    cy.request({
        method: 'POST',
        url: 'http://5.189.186.217/api/auth/login',
        body: {
            email: 'email@dmytro.com',
            password: 'abc123',
        },
    }).then((response) => {
        const accessToken = response.body.token;
        localStorage.setItem('auth-token', accessToken);
    });
})

Cypress.Commands.add('createNewCategory', (category) => {
    const accessToken = window.localStorage.getItem('auth-token')
    cy.request({
        method: 'POST',
        url: 'http://5.189.186.217/api/category',
        body: {
            name: category
        },
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
        return response.body
    })
})

Cypress.Commands.add('createNewPosition', (position, cost) => {
    const accessToken = window.localStorage.getItem('auth-token')
    cy.request({
        method: 'POST',
        url: 'http://5.189.186.217/api/position',
        body: {
            category: '653fda33146a28199b538d82',
            cost: cost,
            name: position
        },
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
        return response.body 
    })
})