import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import ItemView from "../views/item";
import Category from "../views/category";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/category/:category',
        element: <Category/>
    },
    {
        path:'/item/:id',
        element: <ItemView/>
    },
    // {},
])