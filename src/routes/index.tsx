import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Initial_Pages/LoginPage";
import SignupPage from "../pages/Initial_Pages/SignupPage";




const router = createBrowserRouter([
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/signup',
        element:<SignupPage/>
    }
])

export default router;