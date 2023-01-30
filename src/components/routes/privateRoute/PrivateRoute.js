import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../pages/Spinner/Spinner';
import { toggleContext } from '../../../App';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const {  setLocationState } = useContext(toggleContext);
    const location = useLocation();
    setLocationState(location.pathname);
    if (loading) {
        return <Spinner></Spinner>;
    }
    if (user) {
        return children;
    }
    console.log(location.pathname);
    // return <Navigate to='/signin' state={{ from: location }} replace></Navigate >;
    return <Navigate to='/signup' state={{ from: location }} replace></Navigate >;

};

export default PrivateRoute;