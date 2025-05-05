import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PrivateRoutes = ({ children }) => {
    const { user } =  useAuthContext();
    return user ? children : <Navigate to="/" replace/>;
};

export default PrivateRoutes;