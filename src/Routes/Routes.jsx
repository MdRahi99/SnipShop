import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import Categories from "../Components/Products/Categories";
import Category from "../Components/Categories/Category";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/Products/ProductDetails";
import Cart from "../Components/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/categories",
          element: <Category></Category>
        },
        {
          path: "/category/:name",
          loader: async({params}) => await fetch(`https://dummyjson.com/products/category/${params.name}`),
          element: <Categories></Categories>
        },
        {
          path: "/all-products",
          loader: async() => await fetch('https://dummyjson.com/products'),
          element: <Products></Products>
        },
        {
          path: "/product-details/:id",
          loader: async({params}) => await fetch(`https://dummyjson.com/products/${params.id}`),
          element: <ProductDetails></ProductDetails>
        },
        {
          path: "/cart",
          element: <Cart></Cart>
        },
      ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;