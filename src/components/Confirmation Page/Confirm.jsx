import './confirm.css'
import plus from '../../assets/plus.svg'
import checked from '../../assets/checkbox-multiple-marked-circle.svg'
import leftArrow from '../../assets/arrow-left-circle.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../App'




const ConfirmationPage = ()=>{
    const {setCartCount,setCartItems} = useContext(ShopContext)
    const clearCartItems = ()=>{
        setCartItems([])
        setCartCount(0)
    }

    return(
        <div className='confirm-page'>
            <img src={checked} alt="okay" />
            <h2>YAY! Order Received</h2>
            <p>You have saved $10 on this order including $2 with Us</p>
            <div className='backBtn' ><img src={leftArrow} alt="" /><h2><Link to='/' onClick={clearCartItems}>Go Back Home</Link></h2></div>
        </div>
    )
}

export default ConfirmationPage;