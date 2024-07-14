import { ReactNode } from 'react'
import { useAppSelector } from "../../redux/hooks"
import { Navigate } from 'react-router-dom';


const PrivateRoutes = ({ children }: { children: ReactNode }) => {
    const token = useAppSelector(state => state.auth.token);
    if (token) {
        return children
    }
    return <Navigate to={'/login'} replace={true} />
}

export default PrivateRoutes