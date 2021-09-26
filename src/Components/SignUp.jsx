import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SignUp = ({ showAlert }) => {
    const history = useHistory()
    const [userData, setUserData] = useState({ name: "", email: "", password: "", confirmPassword: "" })

    const handleChange = (e) => { setUserData({ ...userData, [e.target.name]: e.target.value }) }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password } = userData

        const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json()
        // console.log('token:', json)

        if (json.success) {
            // save the token and redirect to the home page
            // localStorage.setItem('token', json.authToken)
            history.push('/login')
            showAlert("account created successfully", 'success')
        }
        else {
            showAlert("user already exists", 'danger')
        }
    }

    return (
        <div className="container mt-3">
            <h2 className="mb-3">Create an account</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full name</label>
                    <input type="text" className="form-control" value={userData.name} name="name" placeholder="Enter your name" id="name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={userData.email} name="email" placeholder="Enter your email" id="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={userData.password} name="password" placeholder="Enter your password" id="password" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp
