import { cleanup, render, screen } from '@testing-library/react'
import ListNotes from './ListNotes'

describe('<ListNotes />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<ListNotes />)

    const listNotes = screen.getByTestId('list-notes')

    expect(listNotes).toBeInTheDocument()
  })
})
