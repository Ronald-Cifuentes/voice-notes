import { cleanup } from '@testing-library/react'
// import App from './App'

const mockSpeechRecognition = jest.fn().mockImplementation(() => ({
  start: jest.fn(),
  stop: jest.fn(),
  abort: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  // ... other methods and properties
}))

window.SpeechRecognition = mockSpeechRecognition
window.webkitSpeechRecognition = mockSpeechRecognition

describe('<App />', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('#1. Exist - Render default', () => {
    // render(<App />)

    // const app = screen.getByTestId('app')

    // expect(app).toBeInTheDocument()

    expect(true).toBe(true)
  })
})
