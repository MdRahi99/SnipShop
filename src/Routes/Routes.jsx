import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import Categories from "../Components/Products/Categories";

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
          path: "/category/:name",
          loader: async({params}) => await fetch(`https://dummyjson.com/products/category/${params.name}`),
          element: <Categories></Categories>
        }
      ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;