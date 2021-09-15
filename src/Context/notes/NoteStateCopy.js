import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NoteContext from './NoteContext'

const NoteState = ({ children }) => {
    const host = "http://localhost:5000"
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getAllNotes()
    }, [])

    const getAllNotes = async () => {

        const response = await fetch(`${host}/api/notes/allNotes`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzM2UxY2JiODNjOTJmNTNmMDQ0YzcyIn0sImlhdCI6MTYzMDc5MDcwMH0.fA9GPbo4gNUW2Y2H7h4RVh35kF_ZlXU1ogOU7PDkmqw"
            },
        })
        const json = await response.json()
        console.log('data from all notes:', json)

        setNotes(json)
    }

    // Add a note
    const addNote = async (note) => {

        const response = await fetch(`${host}/api/notes/addNote`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzM2UxY2JiODNjOTJmNTNmMDQ0YzcyIn0sImlhdCI6MTYzMDc5MDcwMH0.fA9GPbo4gNUW2Y2H7h4RVh35kF_ZlXU1ogOU7PDkmqw"
            },
            body: JSON.stringify(note)
        })
        const json = await response.json()
        console.log('data from add:', json)

        setNotes([...notes, json])
    }


    // Delete a note
    const deleteNote = async (id) => {

        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzM2UxY2JiODNjOTJmNTNmMDQ0YzcyIn0sImlhdCI6MTYzMDc5MDcwMH0.fA9GPbo4gNUW2Y2H7h4RVh35kF_ZlXU1ogOU7PDkmqw"
            },
        })
        const json = await response.json()
        console.log('data from delete:', json)

        const newNotes = notes.filter(note => note._id !== id)
        setNotes(newNotes)
    }

    // Edit a note
    const editNote = async (note) => {

        const response = await fetch(`${host}/api/notes/updateNote/${note._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzM2UxY2JiODNjOTJmNTNmMDQ0YzcyIn0sImlhdCI6MTYzMDc5MDcwMH0.fA9GPbo4gNUW2Y2H7h4RVh35kF_ZlXU1ogOU7PDkmqw"
            },
            body: JSON.stringify(note)
        })
        const json = await response.json()
        console.log('data from update:', json)
        const updatedNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < updatedNotes.length; index++) {
            const element = updatedNotes[index];
            if (element._id === note._id) {
                updatedNotes[0].title = note.title
                updatedNotes[0].description = note.description
                break
            }

        }
        setNotes(updatedNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState
