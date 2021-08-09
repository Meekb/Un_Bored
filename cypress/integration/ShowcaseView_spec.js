describe('Showcase area flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/Home')
  });

  it('Should change the url to /Showcase', () => {
    cy.get('header').find('.showcase-btn').click()
    cy.url().should('include', '/Showcase')
  });

  it('Should say Showcase under the header', () => {
    cy.get('header').find('.showcase-btn').click()
    cy.get('h3').contains('✨ Showcase ✨')
  });

  it('Should display a remark that the user has nothing in their showcase if they have not completed any activities', () => {
    cy.get('header').find('.showcase-btn').click()
    cy.get('.showcase').contains('Nothing to see here 😳 Generate an activity to get started!')
  });

  it('Should be able to click the home icon to go back to the main activity form', () => {
    cy.get('header').find('.showcase-btn').click()
    cy.get('header').find('.home-icon').click()
    cy.url().should('include', '/Home')
  });

  it('Should display completed cards when they are saved', () => {
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
      cy.get('.saved').find('.saved-card').find('.complete-btn').click()
      cy.get('header').find('.showcase-btn').click()
      cy.get('.showcase').find('.completed-card') 
  });

});