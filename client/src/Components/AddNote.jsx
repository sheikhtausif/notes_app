import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { NoteContext } from '../Context/NoteStateContext'

const AddNote = ({ showAlert }) => {
    const [note, setNote] = useState({ title: '', description: '' })

    const context = useContext(NoteContext)
    const { addNote } = context

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleAdd = (e) => {
        e.preventDefault()
        if (note.title && note.description) {
            addNote(note)
            setNote({ title: '', description: '' })
            showAlert("notes added successfully", "success")
        }
        else showAlert("please fill the fields", "danger")
    }

    return (
        <div className=" my-2">
            <h2>Add a note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Add Title</label>
                    <input type="text" className="form-control" name="title" id="title" placeholder="Enter a title..." onChange={handleChange} value={note.title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" name="description" id="description" rows="3" placeholder="Description..." onChange={handleChange} value={note.description}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleAdd}>ADD NOTE</button>
            </form>
        </div>
    )
}

export default AddNote
