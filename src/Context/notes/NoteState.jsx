import React from 'react'
import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = ({ children }) => {

    const initNotes = [
        {
            "_id": "6133f357bc5e9da19e58d733",
            "user": "6133e1cbb83c92f53f044c72",
            "title": "hello",
            "description": "This is my first note",
            "tag": "personal",
            "__v": 0
        },
        {
            "_id": "6133f359bc5e9da19e58d735",
            "user": "6133e1cbb83c92f53f044c72",
            "title": "hello",
            "description": "This is my first note",
            "tag": "personal",
            "__v": 0
        },
        {
            "_id": "6133f357bc5e9da19e58d734",
            "user": "6133e1cbb83c92f53f044c72",
            "title": "hello",
            "description": "This is my first note",
            "tag": "personal",
            "__v": 0
        },
        {
            "_id": "6133f359bc5e9da19e58d736",
            "user": "6133e1cbb83c92f53f044c72",
            "title": "hello",
            "description": "This is my first note",
            "tag": "personal",
            "__v": 0
        },
        {
            "_id": "6133f357bc5e9da19e58d737",
            "user": "6133e1cbb83c92f53f044c72",
            "title": "hello",
            "description": "This is my first note",
            "tag": "personal",
            "__v": 0
        },
        {
            "_id": "6133f359bc5e9da19e58d738",
            "user": "6133e1cbb83c92f53f044c72",
            "title": "hello",
            "description": "This is my first note",
            "tag": "personal",
            "__v": 0
        },
        {
            "_id": "6133f359bc5e9da19e58d739",
            "user": "6133e1cbb83c92f53f044c72",
            "title": "hello",
            "description": "This is my first note",
            "tag": "personal",
            "__v": 0
        },
        {
            "_id": "6133f359bc5e9da19e58d729",
            "user": "6133e1cbb83c92f53f044c72",
            "title": "hello",
            "description": "This is my first note",
            "tag": "personal",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(initNotes)

    // Add a note
    const addNote = (note) => {
        // const note = {
        //     "_id": "6133f359bc5e9da19e58d729",
        //     "user": "6133e1cbb83c92f53f044c72",
        //     "title": "helloAdd",
        //     "description": "This is my first note",
        //     "tag": "personal",
        //     "__v": 0
        // }
        setNotes([...notes, note])
    }

    // Delete a note
    const deleteNote = (id) => {
        const newNotes = notes.filter(note => note._id !== id)
        setNotes(newNotes)
    }

    // Edit a note
    const editNote = () => { }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState
