import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextNoteAPI from './contextAPI/ContextNote.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ContextNoteAPI>
            <App />
        </ContextNoteAPI>
    </BrowserRouter>
  </React.StrictMode>,
)
