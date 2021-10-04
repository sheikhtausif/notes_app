const express = require('express');
const router = express.Router()
const Notes = require('../models/Notes')
var fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');



// Route: 1 -  get all notes of the user GET "/api/notes/allNotes", login required 
router.get('/allNotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        // console.log(error.message)
        res.status(500).send("internal server error");
    }
})

// Route: 2 -  add a note POST "/api/notes/addNote", login required 
router.post('/addNote', fetchUser,
    [
        body('title', "title is too short").isLength(1),
        body('description', "description is too short").isLength(1),

    ],
    async (req, res) => {
        try {
            const { title, description, } = req.body
            // if there are errors , return bad request
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Notes({
                title, description, user: req.user.id
            })
            const saveNote = await note.save()

            res.json(saveNote)
        } catch (error) {
            // console.log(error.message)
            res.status(500).send("internal server error");
        }

    })

// Route: 3 -  update an exist note PATCH or PUT "/api/notes/", login required 
router.patch('/updateNote/:id', fetchUser,
    async (req, res) => {
        try {
            const { title, description } = req.body
            const newNote = {}
            if (title) { newNote.title = title }
            if (description) { newNote.description = description }

            // Find the note and update
            let note = await Notes.findById(req.params.id)
            if (!note) {
                res.status(404).send("Not found")
            }
            // Allow the user to update the note
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not allowed")
            }
            note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            res.json(note)

        } catch (error) {
            // console.log(error.message)
            res.status(500).send("internal server error");
        }
    })

// Route: 4 -  delete an exist note DELETE "/api/notes/", login required 
router.delete('/deleteNote/:id', fetchUser,
    async (req, res) => {
        try {
            // Find the note and delete
            let note = await Notes.findById(req.params.id)
            if (!note) {
                res.status(404).send("Not found")
            }
            // Allow to delete the note
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not allowed")
            }
            note = await Notes.findByIdAndDelete(req.params.id)
            res.json({ success: "Note has been deleted successfully!", note: note })

        } catch (error) {
            // console.log(error.message)
            res.status(500).send("internal server error");
        }
    })

module.exports = router