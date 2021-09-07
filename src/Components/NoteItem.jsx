import React from 'react'

const NoteItem = ({ note }) => {
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fas fa-trash-alt mx-2"></i>
                    <i className="fas fa-edit mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
