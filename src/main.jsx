import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Titlesearch from '../components/titlesearch'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Titlesearch />
  </React.StrictMode>,
)
