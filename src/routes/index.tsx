import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Initial_Pages/LoginPage";
import SignupPage from "../pages/Initial_Pages/SignupPage";
import Profile_Layout from "../layouts/Profile_Layout";
import SettingPage from "../pages/Initial_Pages/SettingPage";
import StarPage from "../pages/Initial_Pages/StarPage";
import AboutPage from "../pages/Initial_Pages/AboutPage";
import ProfilePage from "../pages/Initial_Pages/ProfilePage";
import TimeLinePage from "../pages/Initial_Pages/TimeLinePage";
import SingleCodePage from "../pages/Initial_Pages/SingleCodePage";
import Profile_View_Page from "../pages/Initial_Pages/Profile_View_Page";
import SendEmail_Page from "../pages/Others/SendEmail_Page";
import PrivateRoutes from "../pages/Others/PrivateRoutes";
import Security_Page from "../pages/Initial_Pages/Security_Page";




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
        element: <PrivateRoutes><Profile_Layout /></PrivateRoutes>,
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
                path: 'security',
                element: <Security_Page />
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
            },
            {
                path: 'timeline/:uid',
                element: <Profile_View_Page />
            },
            {
                path: 'timeline/email',
                element: <SendEmail_Page />
            }
        ]
    }
])

export default router;