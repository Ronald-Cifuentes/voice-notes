import { ChangeEvent, FC, useEffect, useState } from 'react'
import { AppProps } from './interfaces'
import { AppContainer } from './App.styled'
import ListNotes from '../ListNotes'
import RecordArea from '../RecordArea'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const App: FC<AppProps> = ({ dataTestId = 'app' }) => {
  const [isListening, setIsListening] = useState<boolean>(false)
  const [note, setNote] = useState<string>('')
  const [savedNotes, setSavedNotes] = useState<string[]>([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onend = () => {
      console.log('Stopped Mic on Click')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
    }

    mic.onerror = event => {
      console.log(event.error)
    }
  }

  const handleStart = () => {
    if (!isListening) {
      mic.start()
      setIsListening(true)
    }
  }

  const handleStop = () => {
    if (isListening) {
      mic.stop()
      setIsListening(false)
    }
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
    handleStop()
  }

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value)
  }

  return (
    <AppContainer data-testid={dataTestId}>
      <h1>Voice Notes</h1>
      <div>
        <RecordArea
          {...{ handleTextArea, note, handleSaveNote, handleStart, handleStop, isListening }}
        />
        <ListNotes {...{ savedNotes }} />
      </div>
    </AppContainer>
  )
}

export default App
