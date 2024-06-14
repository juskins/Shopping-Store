import { Link} from "react-router-dom";
import './home.css'
import { useContext } from "react";
import { ShopContext } from "../../App";


const Home = ()=>{
    // const {message}= useOutletContext();
    const {message} = useContext(ShopContext)

    return(
        <div className="home">
            <div className="btnContainer">
                <button><Link to={`/`}>All</Link></button>
                <button><Link to={`/products/category/men's clothing`}>Men's Clothing</Link></button>
                <button><Link to={`/products/category/women's clothing`}>Women's Clothing</Link></button>
                <button><Link to={`/products/category/electronics`}>Electronics</Link></button>
                <button><Link to={`/products/category/jewelery`}>Jeweleries</Link></button>
            </div>
            
            <h3 className="message">{message}</h3>
            
        </div>
    )
}

export default Home;