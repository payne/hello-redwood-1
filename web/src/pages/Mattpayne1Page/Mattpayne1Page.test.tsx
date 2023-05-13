import { render } from '@redwoodjs/testing/web'

import Mattpayne1Page from './Mattpayne1Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Mattpayne1Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Mattpayne1Page />)
    }).not.toThrow()
  })
})
