import React from 'react'

const Alert = ({ message }) => {
    return (
        <div className="alert alert-primary" role="alert">
            {message}
        </div>
    )
}

export default Alert
