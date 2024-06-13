import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Routes from './components/Routes.jsx'


const Main = ()=>{
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [message, setMessage] = useState('')
    const addToCart = ()=>{
      setCartCount(cartCount=>cartCount+1);
    }
    const router = createBrowserRouter(Routes(cartItems,setCartItems,cartCount,setCartCount,addToCart,message,setMessage))


  return(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main/>
)
