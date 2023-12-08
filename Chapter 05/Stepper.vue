// src/component/Stepper.cy.js:
 
import Stepper from './Stepper.vue'

describe('<Stepper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Stepper)
  })
})

