import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { Alert } from './components/Alert'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Alert/>
  </React.StrictMode>,
)
