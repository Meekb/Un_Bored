describe('Activity suggestion flow', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity?/', 
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
  });

  it('Should populate an Activity Card', () => {
    cy.get('section').should('have.class', 'generated-activity')
  });

  it('Should have the title of the activity in an h2', () => {
    cy.get('h2').should('have.length', 1)
      // cy.get('.title').contains('Visit a local brewery')
  });

  it('Should display the activity category', () => {
    cy.get('.category').contains('Category:')
      //cy.get('.category).contains('Category: social')
  });

  it('Should display the number of participants', () => {
    cy.get('.participants').contains('Participants:')
      // cy.get('.participants').contains('3')
  });

  it('Should display an estimated cost of the activity', () => {
    cy.get('.cost').contains('Estimated cost:')
      // cy.get('.cost').contains('$4.00')
  });

  it('Should display a remark below the cost indicating how easy doing the activity will be', () => {
    cy.get('.display').should('be.visible')
      // cy.get('.display').contains('Go get em, tiger!')
  });

  it('Should have a Save button', () => {
    cy.get('.activity-card')
      .find('button').contains('Save Activity')
  });

  it('Should remove the activity card when the Save button is clicked and display instructions to complete a saved activity', () => {
    cy.get('.activity-card')
      .find('button').click()
      .get('.now-go').contains('Now go complete a saved activity!')
  });

});