import { LogOut } from 'lucide-react'
import React from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const ButtonLogout = () => {

    const { logout } =useAuthContext()
    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <button
            onClick={() => handleLogout()}
            className= "p-1 rounded-full cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 text-gray-500 hover:bg-gray-200"
        >
            <LogOut className="h-5 w-5" />
        </button>
    )
}

export default ButtonLogout