import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'  
import close from '../../assets/close-circle.svg'
import leftArrow from '../../assets/arrow-left-circle.svg'
import './shoppingCart.css'
import { useContext } from 'react'
import {Link, useOutletContext} from 'react-router-dom'
import { ShopContext } from '../../App'


const CheckOutPage = ()=>{
    // const {cartItems,setCartCount,setCartItems} = useOutletContext();
    const {cartItems,cartCount,message,addToCart,setCartCount,setCartItems} = useContext(ShopContext)


    const balance = cartItems.reduce((total,item)=>item.price + total, 0).toFixed(2)

    const removeFromCart = (id)=>{
        setCartCount(cartCount=>cartCount-1)
        let newCartItems = cartItems.filter(item=>item.id !== id);
        setCartItems(newCartItems);
    }
    const increaseQty = (id) =>{
        cartItems.map(item=>{
            if(item.id === id){
                item.qty+=1;
                item.price = item.price * item.qty;
                setCartItems([...cartItems])
            }
        })
    }
    const decreaseQty = (id) =>{
        cartItems.map(item=>{
            if(item.id === id){
                if(item.qty !=1){
                    item.price = item.price / item.qty;
                    item.qty-=1;
                    setCartItems([...cartItems])
                }
                
            }
        })
    }

    return(
        <div className="checkOut-page">
            <div className="cart-header">
                <div className='top-header'>
                    <h1>Your Cart</h1>
                    <div className='backBtn' onClick={()=>history.back(-1)}><img src={leftArrow} alt="" /><h2>Go Back</h2></div>
                </div>
                <p>{cartItems.length} {cartItems.length > 1 ? 'items' :  'item'} shipped at checkout</p>
            </div>
            <div className="shipping-container">
                <div className="left-container">
                    <div className='keep-shopping'>
                        <div className="shipping">
                            <p>You are one click away from FREE SHIPPING!</p>
                            <hr />
                        </div>
                        <h4>Keep Shopping</h4>
                    </div>

                    <div className="carts-products">
                        {cartItems?.map(cartProduct=>{
                            return <div className="product" key={cartProduct.id}>
                                        <div className='react-img'><img src={cartProduct.image} alt=""/></div>
                                        <div className='kit'>
                                            <div className='blade'>
                                                <h3>{cartProduct.title}</h3>
                                                <p>{cartProduct.qty} {cartProduct.qty > 1 ? 'items' :  'item'}</p>
                                            </div>
                                            <div className="btn-container">
                                                <img src={minus} alt="" onClick={()=>decreaseQty(cartProduct.id)}/>
                                                <p>{cartProduct.qty}</p>
                                                <img src={plus} alt="" onClick={()=>increaseQty(cartProduct.id)}/>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={close} alt="" className='close' onClick={()=>removeFromCart(cartProduct.id)}/>
                                            <p className='close-price'>${cartProduct.price}</p>
                                        </div>
                                    </div>
    

                        })}
                    </div>
                </div>
                <div className="right-container">
                    <h2>Summary</h2>
                    <div className="pricing-details">
                        <div>
                            <p>Subtotal ({cartItems.length} {cartItems.length > 1 ? 'items' :  'item'})</p>
                            <p>${balance}</p>
                        </div>
                        <div>
                            <p>Shipping Discount</p>
                            <p>$-2.00</p>
                        </div>
                        <div>
                            <p>Shipping and Handling</p>
                            <p>$4.00</p>
                        </div>
                        <div>
                            <p>Tax(Calculated at Checkout)</p>
                            <p>$1.00</p>
                        </div>
                        <hr />
                        <div className="balance">
                            <h2>Balance</h2>
                            <h2>${cartItems.length === 0 ? 0 : (`${balance}` + 4 + 1 - 2).toFixed(2)} </h2>
                        </div>
                    </div>


                    <button><Link to='confirmation-page'>Checkout</Link></button>
                    
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage;