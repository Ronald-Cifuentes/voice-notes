import { FC } from 'react'
import { ButtonsContainer, RecordAreaContainer } from './RecordArea.styled'
import { RecordAreaProps } from './interfaces'
import { BiMicrophone, BiSolidMicrophone } from 'react-icons/bi'
import { IoSendSharp } from 'react-icons/io5'

const RecordArea: FC<RecordAreaProps> = ({
  dataTestId = 'record-area',
  handleTextArea,
  note,
  handleSaveNote,
  handleStart,
  handleStop,
  isListening,
}) => {
  return (
    <RecordAreaContainer data-testid={dataTestId}>
      <textarea onChange={handleTextArea} value={note} />
      <ButtonsContainer>
        <button onClick={isListening ? handleStop : handleStart}>
          {isListening ? <BiSolidMicrophone /> : <BiMicrophone />}
        </button>
        <button onClick={handleSaveNote} disabled={!note}>
          <IoSendSharp />
        </button>
      </ButtonsContainer>
    </RecordAreaContainer>
  )
}

export default RecordArea
