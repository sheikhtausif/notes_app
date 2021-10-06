import React from 'react'
import { useState, useEffect } from 'react'
import { Switch, Route, } from "react-router-dom";
import NavBar from './Components/Navbar';
import Notes from './Components/Notes';
import Alert from './Components/Alert';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const App = () => {

    const [alert, setAlert] = useState(null)
    const [screen, setScreen] = useState(window.screen.width)

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    useEffect(() => {
        setScreen(window.screen.width)
    }, [screen])


    return (
        <>
            <NavBar />
            <Alert alert={alert} />
            <div className={screen < 800 ? "container w-90" : screen < 1200 ? "container w-80" : "container w-50"}>
                <Switch>
                    <Route exact path="/">
                        <Notes showAlert={showAlert} />
                    </Route>
                    <Route exact path="/login">
                        <Login showAlert={showAlert} />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp showAlert={showAlert} />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default App
