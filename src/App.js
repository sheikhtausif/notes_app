import React from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';

const App = () => {
    return (
        <>

            <NoteState> {/* this is the context api */}
                <Router>
                    <Navbar />
                    <Alert message={"your notes added"}/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </NoteState>
        </>
    )
}

export default App
