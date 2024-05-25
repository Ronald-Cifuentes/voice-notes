import { FC } from 'react'
import { ListNotesContainer } from './ListNotes.styled'
import { ListNotesProps } from './interfaces'

const ListNotes: FC<ListNotesProps> = ({ dataTestId = 'list-notes', savedNotes }) => {
  return (
    <ListNotesContainer data-testid={dataTestId}>
      <h2>Notes</h2>
      {savedNotes?.map(n => <p key={n}>{n}</p>)}
    </ListNotesContainer>
  )
}

export default ListNotes
