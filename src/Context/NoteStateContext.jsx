import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const NoteContext = createContext()

const NoteStateContext = ({ children }) => {
    const host = "http://localhost:5000"
    const [notes, setNotes] = useState([])
    const [username, setUsername] = useState("")

    useEffect(() => {
        if (localStorage.getItem('token'))
            getAllNotes()
    }, [])

    const getAllNotes = async () => {
        const { data } = await axios.get(`${host}/api/notes/allNotes`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            },
        })
        setNotes(data)
    }

    // ! Add a note
    const addNote = async (note) => {

        const { data } = await axios.post(`${host}/api/notes/addNote`, note, {
            headers: {
                'auth-token': localStorage.getItem('token')
            },
        })
        setNotes([...notes, data])
    }


    // ! Delete a note
    const deleteNote = async (id) => {

        await axios.delete(`${host}/api/notes/deleteNote/${id}`, {
            headers: {
                'auth-token': localStorage.getItem('token')
            },
        })
        const newNotes = notes.filter(note => note._id !== id)
        setNotes(newNotes)
    }

    // ! Edit a note
    const editNote = async (note) => {

        const response = await fetch(`${host}/api/notes/updateNote/${note._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(note)
        })
        // eslint-disable-next-line
        const json = await response.json()
        // console.log('data from update:', json)
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
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNotes, username, setUsername }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteStateContext
