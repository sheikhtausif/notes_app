import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NoteStateContext from './Context/NoteStateContext'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <NoteStateContext>
            <App />
        </NoteStateContext>
    </React.StrictMode>,
    document.getElementById('root')
);

