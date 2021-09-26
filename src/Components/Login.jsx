import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NoteContext } from '../Context/NoteStateContext'
import { useContext } from 'react'

const Login = ({ showAlert }) => {
    const history = useHistory()
    const { setUsername } = useContext(NoteContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        // console.log('token:', json)

        if (json.success) {
            // save the token and redirect to the home page
            localStorage.setItem('token', json.authToken)
            localStorage.setItem('username', json.name)
            setUsername(json.name)
            showAlert("login success", "success")
            history.push('/')
        }
        else {
            showAlert("invalid credentials", "danger")
        }
    }

    return (
        <div className="container mt-3">
            <h2 className="mb-3">Login to continue</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} name="email" placeholder="Enter your email" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={password} placeholder="Enter your password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">LogIn</button>
            </form>
        </div>
    )
}

export default Login
