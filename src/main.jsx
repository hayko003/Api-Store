import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import data from "./db/db.js"
createRoot(document.getElementById('root')).render(
    <App data={data}/>
)
