import { useState } from 'react'
import './productItem.css'

const ProductItem = ({products,addToCart,cartItems, setCartItems,message,setMessage})=>{
    const addProductToCart = (id)=>{
        const newProduct = {
            ...products,
            qty:1
        }

        let exists = cartItems.some(item => item.id === products.id && item.name === [products].name);
        if(!exists){
            setCartItems([...cartItems,newProduct])
            document.querySelector('.nav').scrollIntoView();
            addToCart()
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
                <img src={products.image} alt="" />
            </div>
            <div className="product-title">{products.title}</div>
            <div className="reviews"><b>Reviews:</b> {products.rating.count}</div>
            <div className="price">${products.price}</div>
            <button onClick={()=>addProductToCart(products.id)}>Add to cart</button>


        </div>
    )
}

export default ProductItem;