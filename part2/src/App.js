import React, {useState} from 'react'
// import notes from './components/Notes'
import Note from './components/Notes comp'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNotes, setNewNotes] = useState('add notes...')
  const [showAll, setShowAll] = useState(true)

  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)
  
  const show = () => setShowAll(!showAll)

  const handleNotes = (event) => {
    setNewNotes(event.target.value)
    console.log(event.target.value)
  }
  const addNote = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)
    const noteObject = {
      content: newNotes,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNotes('')
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {noteToShow.map(note => <Note key={note.id} note={note}/>)}
      </ul>
      <button onClick={show}>Show {showAll ? 'Important':'All'}</button>
      <form onSubmit={addNote}>
        <input value={newNotes} onChange={handleNotes}/>
        <button type="submit">Save</button>
      </form>
    </div>
      
  )
}

export default App;
