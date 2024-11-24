import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
    const token = useSelector(state => state.authStore.token)
    if (!token)
        return <Navigate to={"Sign-in"} replace>   </Navigate>
    return children
}

export default PrivateRouter
