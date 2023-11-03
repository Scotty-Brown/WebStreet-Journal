describe('Home-Spec', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=006734d12ac947799b7ba8fb0af145fd', {
    //   statusCode: 200,
    //   fixture: 'homeSpecData'
    // }).as('homeSpecData')
    cy.visit('http://localhost:3000/')
    // .wait('@homeSpecData')
  })

  it('Should have a Header', () => {
    cy.get('.header').should('exist')
    cy.get('h1').should('contain', 'WebStreet Journal')
    cy.get('[href="/"]').should('contain', 'Home')
    cy.get('.active').should('contain', 'Home')
    cy.get('[href="/bookmarks"]').should('contain', 'Bookmarks')
  })

  it('Should display previews of news articles', () => {
    cy.get('.article-preview-card')
      .first()
      .then((card) => {
        cy.checkArticlePreview(
          card,
          'https://images.wsj.net/im-877800/social',
          'Caroline Ellison Offered to Step Down, Bankman-Fried Says',
          'Corinne Ramey',
          'Sam Bankman-Fried faces multiple fraud charges in the collapse of his cryptocurrency firm FTX. SBF continues his testimony today.'
        )
      })

      cy.get('.article-preview-card')
      .last()
      .then((card) => {
        cy.checkArticlePreview(
          card,
          "https://images.wsj.net/im-877436/social",
          "UAW, Stellantis Reach Tentative Agreement on New Four-Year Labor Contract",
          "Christopher Mims",
          "UAW, Stellantis Reach Tentative Agreement on New Four-Year Labor Contractwsj.com"
        )
      })
  })

  
})
