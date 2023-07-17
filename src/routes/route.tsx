import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HomePage/Home";
import Login from "../pages/LoginPage/Login";
import Books from "../pages/Books/Books";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/books',
                element:<Books></Books>
            }
        ]
    }
]);
export default router;