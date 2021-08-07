describe('Home screen flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/Home')
  })

  it('Should have url that end with /Home', () => {
    cy.url().should('include', '/Home');
  })

})