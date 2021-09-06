import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'

const Notes = () => {

    const context = useContext(NoteContext)
    const { notes, setNotes } = context
    console.log('notes:', notes)

    return (
        <div className="container my-3">
            <h2>Your notes</h2>
            {notes.map(note => (
                <h4>{note.title}</h4>
            ))}
        </div>
    )
}

export default Notes
