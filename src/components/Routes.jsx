import { element } from "prop-types";
import Nav from "./Nav/Nav";
import App from "../App";
import ProductLists from "./ProductsList/ProductList";
import Category from "./Categories/Category";
import CheckOutPage from "./ShoppingCart/ShoppingCart";
import ConfirmationPage from "./Confirmation Page/Confirm";

const Routes = (cartItems,setCartItems,cartCount,setCartCount,addToCart,message,setMessage) => {
   return [
        {
            path:'/',
            element:<App cartCount={cartCount} setCartCount={setCartCount} addToCart={addToCart} message={message}/>,
            children:[
                {index:true, element: <ProductLists cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} message={message} setMessage={setMessage}/>},
                {path:'products/:productId', element:<Category addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} message={message} setMessage={setMessage}/>}
            ]
        },
        
        {
            path:'checkout',
            element:<CheckOutPage cartItems={cartItems} setCartItems={setCartItems} cartCount={cartCount} setCartCount={setCartCount}/>,
            
        },
        {
            path:'checkout/confirmation-page',
            element:<ConfirmationPage cartItems={cartItems} setCartItems={setCartItems} setCartCount={setCartCount}/>
        }
    ]
}

export default Routes;