// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from './Spinner'
import React from 'react'
import { render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
test('sanity', () => {
  expect(true).toBe(true)
})

test('spinner renders without errors', () => {
  render(<Spinner on={true}/>)
})


test('spinner text is "please wait..." ', () => {
  render(<Spinner on={true}/>)
  const wait = screen.queryByText(/Please wait.../i, { exact: false })
  expect(wait).toBeInTheDocument()
  expect(wait).toBeVisible()
  expect(wait).toBeTruthy()
})

test('spinner does not show text while off', () => {
  render(<Spinner on={false}/>)
  const wait = screen.queryByText(/Please wait.../i, { exact: false })
  expect(wait).not.toBeInTheDocument()
  expect(wait).toBe(null)
  expect(wait).toBeFalsy()
})