import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Initial_Pages/LoginPage";
import SignupPage from "../pages/Initial_Pages/SignupPage";
import RootPages from "../pages/Initial_Pages/RootPages";
import Profile_Layout from "../layouts/Profile_Layout";
import SettingPage from "../pages/Initial_Pages/SettingPage";
import StarPage from "../pages/Initial_Pages/StarPage";
import AboutPage from "../pages/Initial_Pages/AboutPage";
import ProfilePage from "../pages/Initial_Pages/ProfilePage";
import TimeLinePage from "../pages/Initial_Pages/TimeLinePage";
import SingleCodePage from "../pages/Initial_Pages/SingleCodePage";




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
        element: <Profile_Layout />,
        children: [
            {
                path: 'profile',
                element: <ProfilePage />
            },
            {
                path: 'profile/:cid',
                element: <SingleCodePage />
            },
            {
                path: 'setting',
                element: <SettingPage />
            },
            {
                path: 'star',
                element: <StarPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'timeline',
                element: <TimeLinePage />
            }
        ]
    }
])

export default router;