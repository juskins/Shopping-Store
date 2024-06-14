import { createContext, useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import { Outlet } from 'react-router-dom'
export const ShopContext = createContext(null)

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [message, setMessage] = useState('')
    const addToCart = ()=>{
      setCartCount(cartCount=>cartCount+1);
    }

  return (
    <>
      <ShopContext.Provider value={{cartItems,cartCount,setCartCount,message,setMessage,addToCart,setCartItems}}>
          <Nav />
          <Outlet />
      </ShopContext.Provider>
    </>
  )
}

export default App
