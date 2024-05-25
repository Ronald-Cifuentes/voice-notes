import { ChangeEvent } from 'react'

export type RecordAreaProps = Partial<{
  dataTestId: string
  handleTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void
  note: string
  handleSaveNote: () => void
  handleStart: () => void
  handleStop: () => void
  isListening: boolean
}>
