import React, { useState } from 'react'
import { User } from 'lucide-react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { usePatientProfileContext } from '../../contexts/PatientProfileContext';

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useThemeContext();
    const { logout } = useAuthContext(); 
    const { profile } = usePatientProfileContext();
    const { currentUser } = useAuthContext();
    
    const navigate = useNavigate();

    const isDarkMode = theme === 'dark';

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        navigate("/")
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${isDarkMode ? 'bg-emerald-800 text-emerald-300' : 'bg-emerald-100 text-emerald-600' }`}
            >
                <User size={16} />
            </button>
        
            {isOpen && (
                <div 
                    className={`absolute right-0 mt-2 w-52 rounded-md shadow-lg ${ isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800' }`}
                >
                    <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <p className="font-medium">{`${profile.data.firstName} - ${profile.data.lastName}`}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{currentUser.data.user.email}</p>
                    </div>
                    <ul className="py-1">
                        <li>
                            <Link 
                                to="/perfil" 
                                className={`flex items-center px-3 py-2 text-sm ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="mr-2">👤</span>
                                Mi Perfil
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/configuracion" 
                                className={`flex items-center px-3 py-2 text-sm ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="mr-2">⚙️</span>
                                Configuración
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/notificaciones" 
                                className={`flex items-center px-3 py-2 text-sm ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="mr-2">🔔</span>
                                Notificaciones
                                <span className={`ml-auto px-2 py-0.5 text-xs rounded-full ${isDarkMode ? 'bg-emerald-800 text-emerald-200' : 'bg-emerald-100 text-emerald-800'}`}>
                                    5
                                </span>
                            </Link>
                        </li>
                        <li className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                            <button 
                                onClick={handleLogout}
                                className={`w-full text-left flex items-center px-3 py-2 text-sm ${
                                    isDarkMode ? 'hover:bg-gray-700 text-red-300' : 'hover:bg-gray-100 text-red-600'
                                }`}
                            >
                                <span className="mr-2">🚪</span>
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserProfile