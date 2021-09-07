import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'


const AddNote = () => {
    const [note, setNote] = useState({ title: '', description: '', tag: '' })

    const context = useContext(NoteContext)
    const { addNote } = context

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleAdd = (e) => {
        e.preventDefault()
        addNote(note)
    }

    return (
        <div className="container my-3">
            <h2>Add a note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Add Title</label>
                    <input type="text" className="form-control" name="title" id="title" placeholder="Enter a title..." onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" name="description" id="description" rows="3" placeholder="Description..." onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Add Tag</label>
                    <input type="text" className="form-control" name="tag" id="tag" placeholder="Add a tag..." onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleAdd}>Add</button>
            </form>
        </div>
    )
}

export default AddNote
