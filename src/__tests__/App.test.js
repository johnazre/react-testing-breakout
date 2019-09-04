import React from 'react'
import renderWithRedux from '../__utils__/renderWithRedux'
import App from '../App'
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
  const { getByText } = renderWithRedux(<App />)
  expect(getByText('Sosh')).toBeInTheDOM()
})
