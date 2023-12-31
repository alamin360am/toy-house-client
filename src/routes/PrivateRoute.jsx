import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    console.log(location);

    if(loading) {
        return <h1 className="loading">Loading</h1>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;