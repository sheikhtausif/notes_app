import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
    const { pathname } = useLocation()
    const [username, setUsername] = useState("")

    const handleLogOut = () => {
        localStorage.setItem('token', '')
        localStorage.setItem('username', '')
    }

    useEffect(() => {
        setUsername(localStorage.getItem('username'))

    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">noteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {localStorage.getItem('token') && <li className="nav-item">
                                <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Notes</Link>
                            </li>}
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button> */}
                            <Link to="/signup"><button className="btn btn-success mx-2" type="submit">SignUp</button></Link>
                            <Link to="/login"><button className="btn btn-danger mx-2" type="submit">LogIn</button></Link>
                        </form>
                            : <form className="d-flex">
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button> */}
                                <h5 className="mt-2 mx-3" style={{ color: "white" }}>{username}</h5>
                                <Link to="/login"><button className="btn btn-danger mx-2" type="submit" onClick={handleLogOut}>LogOut</button></Link>
                            </form>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
