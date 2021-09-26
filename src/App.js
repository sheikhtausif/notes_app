import React from 'react'
import { useState } from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Alert from './Components/Alert';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const App = () => {

    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    return (
        <>

            <Router>
                <NavBar />
                <Alert alert={alert} />
                <div className="container w-50">
                    <Switch>
                        <Route exact path="/">
                            <Home showAlert={showAlert} />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/login">
                            <Login showAlert={showAlert} />
                        </Route>
                        <Route exact path="/signup">
                            <SignUp showAlert={showAlert} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App
