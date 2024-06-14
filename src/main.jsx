import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import Router from './components/Router.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={Router}/>
    </React.StrictMode>
)
