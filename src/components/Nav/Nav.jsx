import {Link} from 'react-router-dom'
import './nav.css'
import cart from '../../assets/cart-outline.svg'
import { useContext } from 'react'
import { ShopContext } from '../../App'

const Nav = ()=>{
    const {cartCount} = useContext(ShopContext)

    return(
        <nav className='nav'>
            <ul className='ul'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Products</Link></li>
                <li className='checkout'>
                    <Link to={'checkout'}>Checkout</Link>
                    <img src={cart} alt="" className='cart'/>
                    <small>{cartCount}</small>
                </li>
            </ul>
        </nav>

    )
}

export default Nav;