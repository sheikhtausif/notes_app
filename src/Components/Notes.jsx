import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import NoteItem from './NoteItem'

const Notes = () => {

    const context = useContext(NoteContext)
    const { notes, setNotes } = context
    console.log('notes:', notes)

    return (
        <div className="row my-3">
            <h2>Your notes</h2>
            {notes.map(note => (
                <NoteItem note={note} />
            ))}
        </div>
    )
}

export default Notes
