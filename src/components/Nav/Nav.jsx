import {Link} from 'react-router-dom'
import './nav.css'
import cart from '../../assets/cart-outline.svg'

const Nav = ({cartCount})=>{

    return(
        <nav className='nav'>
            <ul className='ul'>
                <li><Link to={'home'}>Home</Link></li>
                <li><Link to={'products'}>Products</Link></li>
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