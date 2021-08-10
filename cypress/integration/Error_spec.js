describe('Error', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/Hone')
  });

  it('Should display an error to the user if a faulty url is typed', () => {
    cy.get('.error').contains('Error! Something has gone terribly wrong...')
  });

  it('Should tell the user to click the home icon', () => {
    cy.get('.return-home').contains('Click Home icon')
  });

  it('Should still allow the user to click the GET Un-Bored title to navigate home', () => {
    cy.get('header').find('h1').click()
      cy.get('main').get('form').find('button').contains('Do A Thing')
  });

});