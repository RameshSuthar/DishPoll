import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const PrivateRoute = ({ children }) => {
    const user = useSelector((state) => state.loggedInUserData);
    
    if (!user.username && !user.isLoggedIn) {
        return <Navigate to="/login" />
    }
    return children;
}

export default PrivateRoute;