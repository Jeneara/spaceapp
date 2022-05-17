import React from 'react'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import App from './App'

test('renders SpaceApp heading', () => {
  const component = (
    <MockedProvider>
      <App />
    </MockedProvider>
  )
  render(component)
  const linkElement = screen.getByText('SpaceApp')
  expect(linkElement).toBeInTheDocument()
})
