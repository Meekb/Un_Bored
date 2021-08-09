describe('Saved area flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/Home')
  });

  it('Should change the url to /Saved', () => {
    cy.get('header').find('.saved-btn').click()
    cy.url().should('include', '/Saved')
  });

  it('Should display a remark that the user has no saved activities', () => {
    cy.get('header').find('.saved-btn').click()
    cy.get('.saved').contains('You have no saved activities...')
  });

  it('Should be able to click the home icon to go back to the main activity form', () => {
    cy.get('header').find('.saved-btn').click()
    cy.get('.saved').contains('You have no saved activities...')
    cy.get('header').find('.home-icon').click()
    cy.url().should('include', '/Home')
  });

  it('Should display activity cards when they are saved', () => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity?', 
    {
      status: 200,
      ok: true,
      body: {
        activity: 'Visit a local brewery',
        type: 'social',
        participants: 3,
        price: 0.4,
        link: 'www.example.com',
        key: 2062530,
        accessibility: 0.1
      }
    });
    cy.visit('http://localhost:3000/Home')
      cy.get('select').select('Social')
      cy.get('main').find('button').click()
      cy.get('.activity-card')
      .find('button').click()
      cy.get('header').find('.saved-btn').click()
      cy.get('.saved-card').find('button').should('have.length', 2)
  });

});