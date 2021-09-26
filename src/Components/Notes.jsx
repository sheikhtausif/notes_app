import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { NoteContext } from '../Context/NoteStateContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Notes = ({ showAlert }) => {
    const ref = useRef(null)
    const history = useHistory()

    const [upNote, setUpNote] = useState({ title: '', description: '', tag: '' })

    const context = useContext(NoteContext)
    const { notes, editNote, getAllNotes } = context

    useEffect(() => {
        if (localStorage.getItem('token')) getAllNotes()
        else history.push('/login')
        // eslint-disable-next-line
    }, [])

    const updateNote = (note) => {
        ref.current.click()
        setUpNote(note)
    }

    const handleChange = (e) => {
        setUpNote({ ...upNote, [e.target.name]: e.target.value })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        editNote(upNote)
        showAlert("notes updated successfully", "success")
    }

    return (
        <>
            <AddNote showAlert={showAlert} />

            {/* Modal */}
            <button style={{ display: 'none' }} type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" name="title" id="title" placeholder="Enter a title..." onChange={handleChange} value={upNote.title} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" name="description" id="description" rows="3" placeholder="Description..." onChange={handleChange} value={upNote.description} ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                {notes.length > 0 ? <h2 style={{ textAlign: 'center' }}>Your Notes</h2> : <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Add your first note</h2>}
                {notes?.map(note => (
                    <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={showAlert} />
                ))}
            </div>
        </>
    )
}

export default Notes
