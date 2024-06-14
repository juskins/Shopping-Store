import { useContext, useState } from 'react'
import './productItem.css'
import { useOutletContext } from 'react-router-dom';
import { ShopContext } from '../../App';

const ProductItem = ({product})=>{
    // const {cartItems,setCartItems,addToCart,setMessage} = useOutletContext();
    const {cartItems,addToCart,setCartItems,setMessage} = useContext(ShopContext)

    const addProductToCart = ()=>{
        const newProduct = {
            ...product,
            qty:1
        }


        let exists = cartItems.some(item => item.id === product.id && item.name === product.name);

        if(!exists){
            setCartItems([...cartItems,newProduct]);
            addToCart();
        }
        else{
            setMessage('Already Added to Cart');
            document.querySelector('.ul').scrollIntoView();
            setTimeout(() => {
                setMessage('');
                document.querySelector('.productItem').scrollIntoView()
            }, 2500);
        }

        

        
        
        
    }


    return(
        <div className="productItem">
            <div className="product-image">
                <img src={product.image} alt="" />
            </div>
            <div className="product-title">{product.title}</div>
            <div className="reviews"><b>Reviews:</b> {product.rating.count}</div>
            <div className="price">${product.price}</div>
            <button onClick={()=>addProductToCart()}>Add to cart</button>


        </div>
    )
}

export default ProductItem;