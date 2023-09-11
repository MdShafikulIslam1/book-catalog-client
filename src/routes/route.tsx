import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HomePage/Home";
import Login from "../pages/LoginPage/Login";
import Books from "../pages/Books/Books";
import BookDetails from "../Components/BookDetails";
import EditBook from "../pages/EditBook/EditBook";
import SignUpPage from "../pages/SignUp/SignUpPage";

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
                path:'/users',
                element:<SignUpPage></SignUpPage>
            },
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/all-book',
                element:<Books></Books>
            },
            {
                path:'/books/:id',
                element:<BookDetails/>
            },
            {
                path:'/books/edit/:id',
                element:<EditBook/>
            }
           
        ]
    }
]);
export default router;