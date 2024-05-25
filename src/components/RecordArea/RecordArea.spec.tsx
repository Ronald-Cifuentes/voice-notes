import { cleanup, render, screen } from '@testing-library/react'
import RecordArea from './RecordArea'

describe('<RecordArea />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    render(<RecordArea />)

    const recordArea = screen.getByTestId('record-area')

    expect(recordArea).toBeInTheDocument()
  })
})
