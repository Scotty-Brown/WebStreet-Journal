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

Cypress.Commands.add('checkArticlePreview', (card, imgUrl, title, author, description) => {

    cy.wrap(card).find('.article-preview-image').should('have.attr', 'src', imgUrl)
    cy.wrap(card).find('.flex-row p').should('contain', 'Bookmark to read later')
    cy.wrap(card).find('h2').should('contain', title)
    cy.wrap(card).find('.author').should('contain', author)
    cy.wrap(card).find('.description').should('contain', description)
  })