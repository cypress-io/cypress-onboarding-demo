beforeEach(() => {
  cy.wait(3000)
})

it('t1', () => {
  cy.log('t1')
  cy.wait(2000)
})

it('t2', () => {
  cy.log('t2 v2')
  cy.wait(2000)
})

it('t3', () => {
  cy.log('t3')
  cy.wait(2000)
})

it('t4', () => {
  cy.log('t4')
  cy.wait(2000)
})
