import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { Alert } from './components/Alert'
import { Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingSpinner />}>

    <RouterProvider router={router}/>

    </Suspense>
    <Alert/>
  </React.StrictMode>,
)
