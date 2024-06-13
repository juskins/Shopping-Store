import ProductLists from "../ProductsList/ProductList";
import { Link, Outlet } from "react-router-dom";
import './home.css'


const Home = ({cartCount, setCartCount, addToCart,message})=>{


    return(
        <div className="home">
            <div className="btnContainer">
                <button><Link to={`/`}>All</Link></button>
                <button><Link to={`/products/men's clothing`}>Men's Clothing</Link></button>
                <button><Link to={`/products/women's clothing`}>Women's Clothing</Link></button>
                <button><Link to={`/products/electronics`}>Electronics</Link></button>
                <button><Link to={`/products/jewelery`}>Jeweleries</Link></button>
            </div>
            
            <h3 className="message">{message}</h3>

            <Outlet addToCart={addToCart}/>
            

            
        </div>
    )
}

export default Home;