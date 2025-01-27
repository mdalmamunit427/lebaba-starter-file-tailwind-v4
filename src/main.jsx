import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import RoutePage from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RoutePage />
  </BrowserRouter>,
)
