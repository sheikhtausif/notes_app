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
    ]

    const [notes, setNotes] = useState(initNotes)


    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState
