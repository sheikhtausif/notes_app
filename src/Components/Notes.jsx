import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Notes = () => {

    const context = useContext(NoteContext)
    const { notes } = context

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((note, i) => (
                    <NoteItem key={i} note={note} />
                ))}
            </div>
        </>
    )
}

export default Notes
