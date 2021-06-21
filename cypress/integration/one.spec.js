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

it('t5', () => {
  cy.wait(1000)
  .then(() => {
    expect(Math.random()).to.be.gt(0.5)
  })
})
