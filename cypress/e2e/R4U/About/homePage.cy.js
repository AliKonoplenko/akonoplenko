///<reference types="cypress" />

context('R4U testing', () => {


  beforeEach(() => {
    cy.visit('https://runforukraine.com/')
    cy.get('a[data-cookie="accept"]').click()
  })

  it.skip('Reloading the website by clicking on the Logo - Header', () => {
    cy.get('header-component').shadow().find('div.header_image_wrapper').click()
  })

  it.skip('Opening R4U Teams page from header', () => {
    cy.get('header-component').shadow().find('div.header_links_container a').eq(0).click()
  })

  it.skip('Opening the "Superhumans center" charity page from header', () => {
    cy.get('header-component').shadow().find('div.header_links_container div.drop-down-area').click()
    cy.get('header-component').shadow().find('div.drop-down-area.opened a').eq(0).click()
    cy.get('div.page-content a.big-blue-button').click()
    cy.get('h3.donate-subtitle').should('contain.text', 'Support Non-profits')
      .should('be.visible')
    cy.get('div.charity_item').eq(0).should('have.attr', 'data-highlighted', 'true')
      .and('contain.text', 'Superhumans Center')
  })

  it.skip('Opening the "Doctors without Borders" charity page from header', () => {
    cy.get('header-component').shadow().find('div.header_links_container div.drop-down-area').click()
    cy.get('header-component').shadow().find('div.drop-down-area.opened a').eq(1).click()
    cy.get('div.page-content a.big-blue-button').click()
    cy.get('h3.donate-subtitle').should('contain.text', 'Support Non-profits')
      .should('be.visible')
    cy.get('div.charity_item').eq(1).should('have.attr', 'data-highlighted', 'true')
      .and('contain.text', 'Doctors Without Borders')
  })

  it.skip('Opening the "United24 - Rebuild Ukraine" charity page from header', () => {
    cy.get('header-component').shadow().find('div.header_links_container div.drop-down-area').click()
    cy.get('header-component').shadow().find('div.drop-down-area.opened a').eq(2).click()
    cy.get('div.page-content a.big-blue-button').click()
    cy.get('h3.donate-subtitle').should('contain.text', 'Support Non-profits')
      .should('be.visible')
    cy.get('div.charity_item').eq(2).should('have.attr', 'data-highlighted', 'true')
      .and('contain.text', 'United24 - Rebuild Ukraine')
  })

  it.skip('Opening the "United24 - Medical Aid" charity page from header', () => {
    cy.get('header-component').shadow().find('div.header_links_container div.drop-down-area').click()
    cy.get('header-component').shadow().find('div.drop-down-area.opened a').eq(3).click()
    cy.get('div.page-content a.big-blue-button').click()
    cy.get('h3.donate-subtitle').should('contain.text', 'Support Non-profits')
      .should('be.visible')
    cy.get('div.charity_item').eq(3).should('have.attr', 'data-highlighted', 'true')
      .and('contain.text', 'United24 - Medical Aid')
  })

  it.skip('Opening "Create a team" page from header (with signing in)', () => {
    cy.get('header-component').shadow().find('div.header_links_container a').eq(5).click()
    cy.get('input[type="email"]').type('alina.konoplenko@vilmate.com')
    cy.get('input[type="password"]').type('qweASD123$')
    cy.get('button.submit-button').click()
  })

  it.skip('Opening "Sponsoring" page', () => {
    cy.get('header-component').shadow().find('div.header_links_container a').eq(6).click()
    cy.get('section.l-sponsor a.big-blue-button').click()
    cy.get('section.form_container h3').should('contain.text', 'Sponsor R4U Runners')
    for (let i = 0; i <= 3; i++) {
      cy.get('div.charity_item').eq(i).should('have.attr', 'data-highlighted', 'false')
    }
    // cy.get('div.charity_item').eq(0).should('have.attr', 'data-highlighted', 'false') // figure out how to check all four elements by one line instead of these four
    // cy.get('div.charity_item').eq(1).should('have.attr', 'data-highlighted', 'false')
    // cy.get('div.charity_item').eq(2).should('have.attr', 'data-highlighted', 'false')
    // cy.get('div.charity_item').eq(3).should('have.attr', 'data-highlighted', 'false')
  })

  it.skip('Opening "Contact us" form', () => {
    cy.get('header-component').shadow().find('div.header_links_container a').eq(7).click()
    cy.url().should('include', '/contact-us')
  })

  it.skip('Opening "FAQ" form', () => {
    cy.get('header-component').shadow().find('div.header_links_container a').eq(8).click()
    cy.url().should('include', '/faq')
  })

  it.skip('Sign IN', () => {
    cy.get('header-component').shadow().find('user-panel').shadow().find('div.buttons a.link-signin').click()
  })

  it.skip('Sign UP', () => {
    cy.get('header-component').shadow().find('user-panel').shadow().find('div.buttons a.link-signup').click()
  })


  it.skip('Jumping on sliders photos', () => {
    cy.get('div.slider-controls.desktop-only ul.slick-dots li').eq(0).click()
    cy.get('div.slider-controls.desktop-only ul.slick-dots li').eq(1).click()
    cy.get('div.slider-controls.desktop-only ul.slick-dots li').eq(2).click()
    cy.get('div.slider-controls.desktop-only ul.slick-dots li').eq(3).click()
    cy.get('div.slider-controls.desktop-only ul.slick-dots li').eq(4).click()
    cy.get('div.slider-controls.desktop-only ul.slick-dots li').eq(5).click()
    cy.get('div.slider-controls.desktop-only ul.slick-dots li').eq(6).click()
    cy.get('div.slider-controls.desktop-only ul.slick-dots li').eq(7).click()
  })

  it.skip('Clickin on the "The war in Ukraine" sliders photos', { scrollBehavior: false }, () => {
    cy.get('div.inner div.row.second.desktop-only').scrollIntoView()
    for (let i = 0; i <= 3; i++) {
      cy.get('div.slider-controls button.slide-m-prev').click()
        .wait(1000)
    }
    for (let i = 0; i <= 3; i++) {
      cy.get('div.slider-controls button.slide-m-next').click()
        .wait(1000)
    }
  })

  it.skip('Opening the "Create a team" page by clicking on the button(with signing in)', () => {
    cy.get('div.block.team a[href="/next/team/create"]').click()
    cy.get('input[type="email"]').type('alina.konoplenko@vilmate.com')
    cy.get('input[type="password"]').type('qweASD123$')
    cy.get('button.submit-button').click()
  })

  it.skip('Map is visible', () => {
    cy.get('map-component').should('be.visible')
  })

  it.skip('Opening the "Sponsor R4U runners" by clicking the button ', () => {
    cy.get('div.block.map div.desktop-btn').click()
    cy.get('div.u-container a.big-blue-button').click()
      .wait(1000)
    cy.get('h3.donate-subtitle').should('contain.text', 'Sponsor R4U Runners')
      .should('be.visible')
  })

  it.skip('Opening the "Superhumans Center" donate page by clicking on the element', () => {
    cy.get('div.charities div.picture').eq(0).click()
    cy.get('div.page-content a.big-blue-button').click()
    cy.get('h3.donate-subtitle').should('contain.text', 'Support Non-profits')
      .should('be.visible')
    cy.get('div.charity_item').eq(0).should('have.attr', 'data-highlighted', 'true')
      .and('contain.text', 'Superhumans Center')
  })

  it.skip('Opening the "Doctors Without Borders" donate page by clicking on the element', () => {
    cy.get('div.charities div.picture').eq(1).click()
    cy.get('div.page-content a.big-blue-button').click()
    cy.get('h3.donate-subtitle').should('contain.text', 'Support Non-profits')
      .should('be.visible')
    cy.get('div.charity_item').eq(1).should('have.attr', 'data-highlighted', 'true')
      .and('contain.text', 'Doctors Without Borders')
  })

  it.skip('Opening the "United24 - Rebuild Ukraine" donate page by clicking on the element', () => {
    cy.get('div.charities div.picture').eq(2).click()
    cy.get('div.page-content a.big-blue-button').click()
    cy.get('h3.donate-subtitle').should('contain.text', 'Support Non-profits')
      .should('be.visible')
    cy.get('div.charity_item').eq(2).should('have.attr', 'data-highlighted', 'true')
      .and('contain.text', 'United24 - Rebuild Ukraine')
  })

  it.skip('Opening the "United24 - Medical Aid" donate page by clicking on the element', () => {
    cy.get('div.charities div.picture').eq(3).click()
    cy.get('div.page-content a.big-blue-button').click()
    cy.get('h3.donate-subtitle').should('contain.text', 'Support Non-profits')
      .should('be.visible')
    cy.get('div.charity_item').eq(3).should('have.attr', 'data-highlighted', 'true')
      .and('contain.text', 'United24 - Medical Aid')
  })

  it.skip('Opening the "Support Non-profits" page by clicking on the button', () => {
    cy.get('div.row.charities a.big-blue-button').click()
    for (let i = 0; i <= 3; i++) {
      cy.get('div.charity_item').eq(i).should('have.attr', 'data-highlighted', 'false')
    }
  })

  it.skip('Opening the App Store by clicking on the icon', () => {
    cy.get('a[href="https://apps.apple.com/ua/app/run4ukraine/id1658786568?l"]').click().wait(2000)           //сделать проверку, что открывается нужная страница


  })

  it.skip('Opening the Play Market by clicking on the icon', () => {
    cy.get('a[href="https://play.google.com/store/apps/details?id=com.run4ukraine.app&hl=ru&pli=1"]').click() //сделать проверку, что открывается нужная страница 

  })

  it.skip('Reloading the website by clicking on the Logo - Footer', () => {
    cy.get('footer a.logo-img').click()
  })

  it.skip('Opening the "Create a team" page with signing in - Footer', () => {
    cy.get('footer a.big-blue-button').click()
    cy.get('input[type="email"]').type('alina.konoplenko@vilmate.com')
    cy.get('input[type="password"]').type('qweASD123$')
    cy.get('button.submit-button').click()
  })

  it.skip('Opening "R4U Teams" page - Footer', () => {
    cy.get('div.menu-footer-2-container li').eq(0).click()
    cy.url().should('include', '/team/all')
  })

  it.skip('Get the "Non-Profits" section on the Home page - Footer', () => {
    cy.get('div.menu-footer-2-container li').eq(1).click()
  })

  it.skip('Opening "Sponsoring" page - Footer', () => {
    cy.get('div.menu-footer-2-container li').eq(2).click()
    cy.get('section.l-sponsor a.big-blue-button').click()
    cy.get('section.form_container h3').should('contain.text', 'Sponsor R4U Runners')
    for (let i = 0; i <= 3; i++) {
      cy.get('div.charity_item').eq(i).should('have.attr', 'data-highlighted', 'false')
    }
  })

  it.skip('Opening "FAQ" page - Footer', () => {
    cy.get('div.menu-footer-2-container li').eq(3).click()
    cy.get('div.block.page-title h1').should('contain.text', 'FAQ')
  })

  it.skip('Opening "Terms of Use" page - Footer', () => {
    cy.get('div.menu-footer-2-container li').eq(4).click()
    cy.get('div.block.page-title h1').should('contain.text', "Terms of Use")
  })

  it.skip('Opening "Privacy Policy " page - Footer', () => {
    cy.get('div.menu-footer-2-container li').eq(5).click()
    cy.get('div.block.page-title h1').should('contain.text', "Privacy")
  })

  it.skip('Opening "Cookies Policy" page - Footer', () => {
    cy.get('div.menu-footer-2-container li').eq(6).click()
    cy.get('div.block.page-title h1').should('contain.text', "Cookies")
  })

  it.skip('Opening "Facebook" page - Footer', () => {
    cy.get('ul.c-social a').eq(0).should('have.attr', 'target', '_blank')
      .invoke('removeAttr', 'target').click()
  })

  it.skip('Opening "Instagram" page - Footer', () => {
    cy.get('ul.c-social a').eq(1).should('have.attr', 'target', '_blank')
      .invoke('removeAttr', 'target').click()
  })

  it.skip('Opening "LinkedIn" page - Footer', () => {
    cy.get('ul.c-social a').eq(2).should('have.attr', 'target', '_blank')
      .invoke('removeAttr', 'target').click()
  })

  it.skip('Opening "Twitter" page - Footer', () => {
    cy.get('ul.c-social a').eq(3).should('have.attr', 'target', '_blank')
      .invoke('removeAttr', 'target').click()
  })


  it.skip('Checking the "Q?C?I?" text', () => {
    cy.get('div.col.col-3').scrollIntoView().should('contain.text', 'Questions? Comments? Ideas?')
  })

  it.skip('Opening the "Contact us" page - Footer', () => {
    cy.get('div.col.col-3 a').click()
    cy.get('div.inner h2').should('contain.text', 'Contact R4U!')
    cy.url().should('include', '/contact-us')
  })

})
