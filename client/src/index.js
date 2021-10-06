import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import NoteStateContext from './Context/NoteStateContext'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

ReactDOM.render(
    <React.StrictMode>
        <NoteStateContext>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </NoteStateContext>
    </React.StrictMode>,
    document.getElementById('root')
);

