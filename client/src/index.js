import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import NoteStateContext from './Context/NoteStateContext'

ReactDOM.render(
    <React.StrictMode>
        <NoteStateContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </NoteStateContext>
    </React.StrictMode>,
    document.getElementById('root')
);

