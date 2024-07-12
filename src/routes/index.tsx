import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Initial_Pages/LoginPage";
import SignupPage from "../pages/Initial_Pages/SignupPage";
import RootPages from "../pages/Initial_Pages/RootPages";
import Profile_Layout from "../layouts/Profile_Layout";




const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <SignupPage />
    },
    {
        path: '/',
        element: <RootPages />,
        children: [
            {
                path: 'profile',
                element: <Profile_Layout />
            }
        ]
    }
])

export default router;