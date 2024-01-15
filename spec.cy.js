
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://align-bar.netlify.app/')
;    //cy.get('.background_gradieant_color > div > div:nth-child(2) > a:nth-child(1)').click()
    //cy.get('main > section:nth-child(8) > div:nth-child(2) > a:nth-child(1)').click()
    cy.get('#__next > nav > div > button > svg').click()
    cy.get('#__next > nav > div > div > button').click()
    cy.get('#name').type('test')
    cy.get('#phone').type('00122544')
    cy.get('#email').type('test@test.com')
    //cy.select('').click();
    cy.get('#option').select(3)
    cy.get('#description').type('hello testing')
    //cy.click('.btn');
    cy.get('#__next > div > div > div:nth-child(2) > form > button').click()
    cy.contains('[data-testid="greeting"]', /^Hello/)
  })
})