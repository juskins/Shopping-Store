import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'

function App({cartCount,setCartCount,addToCart,message}) {
//   const [cartCount, setCartCount] = useState(0);
//   const addToCart = ()=>{
//     setCartCount(cartCount=>cartCount+1);
//     console.log('addded ')
// }
  return (
    <>
      <Nav cartCount={cartCount}/>
      <Home cartCount={cartCount} setCartCount={setCartCount} addToCart={addToCart} message={message}/>
    </>
  )
}

export default App
