import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css'
import { useOutletContext } from "react-router-dom";
import Home from "../Home/Home";


const ProductLists = ()=>{
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);

    // const [addToCart] = useOutletContext()

    useEffect(()=>{
        const controller = new AbortController()
        const fetchProducts = async()=>{
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                if(!response.ok){
                    throw new Error('server error')
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
        fetchProducts()

        return ()=>{
            controller.abort()
        }
    },[])

    return(
        <>  
        <Home />
        {error && <div>
            <h2>Error Encountered while fetching Data</h2>
            <h2>Kindly refresh</h2></div>}
        {loading && <h2>Loading......</h2>}
            <div className="products">
                {products?.map(product=>{
                    return <ProductItem product={product} key={product.id}/>
                })}
            </div>

        </>
    )

}

export default ProductLists;