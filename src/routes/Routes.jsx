import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetails";
import Products from "../pages/Products/Products";
import ErrorPage from "../pages/ErrorPage/ErrorPage";





const router = createBrowserRouter([
    {
        path:'/',  
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/add-product',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/product',
                element:<Products></Products>
            },
            {
                path:'/products/:id',
                element: <ProductDetailsPage></ProductDetailsPage> ,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
              },
        ]
    }
  ]);
  
  export default router;
  