// src/component/Stepper.cy.jsx:

import React from 'react'
import Stepper from './Stepper'

describe('<Stepper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />)
  })
})
