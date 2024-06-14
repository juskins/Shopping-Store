import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductLists from "./ProductsList/ProductList";
import Category from "./Categories/Category";
import CheckOutPage from "./ShoppingCart/ShoppingCart";
import ConfirmationPage from "./Confirmation Page/Confirm";
import Home from "./Home/Home";
import { element } from "prop-types";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<ProductLists/>,
            },
            {
                path:'/products/category/:productId',
                element:<Category/>
            },
            {
                path:'checkout',
                element:<CheckOutPage/>
            },
            {
                path:'checkout/confirmation-page',
                element:<ConfirmationPage/>
            }
        ]
    }
])
export default Router;