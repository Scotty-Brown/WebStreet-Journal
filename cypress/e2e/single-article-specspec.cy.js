describe('SingleArticle', () => {

  beforeEach(() => {
    // cy.intercept('GET', 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=006734d12ac947799b7ba8fb0af145fd', {
    //   statusCode: 200,
    //   fixture: 'homeSpecData'
    // }).as('homeSpecData')
    cy.visit('http://localhost:3000/')
    // .wait('@homeSpecData')
  })

  it('Should display full article details when user clicks to read', () => {
    cy.get(':nth-child(1) > .article-details > a').click()
    cy.url().should('eq', 'http://localhost:3000/0')
    cy.get('.single-article-image').should('have.attr', 'src', "https://images.wsj.net/im-877800/social")
    cy.get('h2').should('contain', "Caroline Ellison Offered to Step Down, Bankman-Fried Says")
    cy.get('.single-article-details p').should('have.length', 4)
    cy.get('.single-article-details > :nth-child(2)').should('contain', '2023-10-30T14:03:48Z')
    cy.get('.single-article-details > :nth-child(3)').should('contain', 'Corinne Ramey')
    cy.get('.single-article-details > :nth-child(4)').should('contain', 'Sam Bankman-Fried faces multiple fraud charges in the collapse of his cryptocurrency firm FTX. SBF continues his testimony today.')
    
  })
})