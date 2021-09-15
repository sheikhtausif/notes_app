import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'

const NoteItem = ({ note, updateNote, showAlert }) => {

    const context = useContext(NoteContext)
    const { deleteNote } = context

    return (
        <div className="col-md-6">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <button type="button" className="btn btn-danger mx-2" onClick={() => { deleteNote(note._id); showAlert("notes deleted successfully", "success") }}><i className="fas fa-trash-alt mx-2" ></i>DELETE</button>
                    <button type="button" className="btn btn-success my-2 mx-2" onClick={() => { updateNote(note) }}><i className="fas fa-edit mx-2"></i>UPDATE</button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
