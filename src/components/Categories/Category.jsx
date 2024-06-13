import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

const Category = ({cartItems, setCartItems,addToCart,message,setMessage})=>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [products, setProducts] = useState(null)

    const {productId} = useParams()
    useEffect(()=>{
        const getCategories = async()=>{
            try{
                const response = await fetch(`https://fakestoreapi.com/products/category/${productId}`);
                if(!response.ok){
                    throw new Error('Server Error Encountered');
                }
                const data = await response.json();
                setProducts(data)
            }
            catch(error){
                setError(error)
            }
            finally{
                setLoading(false)
            }
            
        }
        getCategories()
    },[productId])
    return(
        <div>
            {loading && <h2>Loading......</h2>}
            <div className="products">
                {products?.map(products=>{
                    return <ProductItem products={products} key={products.id} addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} message={message} setMessage={setMessage}/>
                })}
            </div>
        </div>

    )
}

export default Category;