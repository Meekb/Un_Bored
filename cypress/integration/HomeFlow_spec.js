describe('Home screen flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/Home')
  });

  it('Should have url that end with /Home', () => {
    cy.url().should('include', '/Home')
  });

  it('Should have a header with the app name GET Un-Bored', () => {
    cy.get('header').contains('GET Un-Bored')
  });

  it('Should have two buttons for navigation in the header', () => {
    cy.get('header')
      .find('button').should('have.length', 2)
  });

  it('Should have a header that contains an image of a house to navigate to Home', () => {
    cy.get('header')
      .find('img').should('have.length', 1);
  });

  it('Should have a drop down labeled Category', () => {
    cy.get('label').contains('Category')
  });

  it('Should be defaulted to undefined', () => {
    cy.get('select')
      .should('have.value', 'undefined')
  });

  it('Should be able to select a different category', () => {
    cy.get('select')
      .select('education')
      .should('have.value', 'education')
    
      .select('recreational')
      .should('have.value', 'recreational')

      .select('social')
      .should('have.value', 'social')

      .select('DIY')
      .should('have.value', 'diy')

      .select('charity')
      .should('have.value', 'charity')

      .select('cooking')
      .should('have.value', 'cooking')

      .select('relaxation')
      .should('have.value', 'relaxation')

      .select('music')
      .should('have.value', 'music')

      .select('busywork')
      .should('have.value', 'busywork')
  });

  it('Should have a Do A Thing button to submit for an activity suggestion', () => {
    cy.get('form').find('button').contains('Do A Thing')
  });

});