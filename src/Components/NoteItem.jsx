import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'

const NoteItem = ({ note }) => {

    const context = useContext(NoteContext)
    const { deleteNote } = context

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fas fa-trash-alt mx-2" onClick={() => deleteNote(note._id)}></i>
                    <i className="fas fa-edit mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
