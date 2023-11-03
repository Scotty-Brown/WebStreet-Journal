describe('Bookmarks', () => {

  beforeEach(() => {
    // cy.intercept('GET', 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=006734d12ac947799b7ba8fb0af145fd', {
    //   statusCode: 200,
    //   fixture: 'homeSpecData'
    // }).as('homeSpecData')
    cy.visit('http://localhost:3000/')
    // .wait('@homeSpecData')
  })


  it('Should be able to add news articles to bookmarks', () => {
    cy.get('.bookmark-btn').first().click()
    cy.get('.bookmark-btn').last().click()
    cy.get('[href="/bookmarks"]').click()
    cy.url('should', )
    cy.get('.article-container').children().should('have.length', 2)
    cy.get('.article-preview-card').first().find('h2').should('contain', 'Caroline Ellison Offered to Step Down, Bankman-Fried Says')
    cy.get('.article-preview-card').last().find('h2').should('contain', 'UAW, Stellantis Reach Tentative Agreement on New Four-Year Labor Contract')
  })

  it('Should be able to remove article from bookmarks', () => {
    cy.get('.bookmark-btn').first().click()
    cy.get('[href="/bookmarks"]').click()
    cy.url().should('eq', 'http://localhost:3000/bookmarks')
    cy.get('.article-container').children().should('have.length', 1)
    cy.get('.bookmark-btn').first().click()
    cy.get('.empty-bookmarks').should('exist')
    cy.get('p').should('contain', 'Looks like you haven\'t bookmarked any articles yet!')
  })

})