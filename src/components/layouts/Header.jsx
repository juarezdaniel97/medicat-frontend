import { useState } from 'react';
import { Search, User, Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userProfile, setUserProfile] = useState(false);
    
    return (
        <div className={`w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md`}>
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-emerald-800' : 'bg-emerald-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                </div>
                <span className={`text-xl font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>MediCare</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}>Inicio</a>
                <a href="#" className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}>Servicios</a>
                <a href="#" className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}>Doctores</a>
                <a href="#" className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}>Contacto</a>
            </div>
            
            {/* Right section */}
            <div className="flex items-center space-x-3">
                {/* Search */}
                <div className="hidden md:block relative">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className={`pl-3 pr-10 py-2 rounded-md text-sm w-36 lg:w-48 focus:outline-none ${
                    isDarkMode 
                        ? 'bg-gray-800 focus:bg-gray-700 border-gray-700' 
                        : 'bg-gray-100 focus:bg-white border-gray-200'
                    } border`}
                />
                <Search size={16} className="absolute right-3 top-2.5 text-gray-400" />
                </div>
                
                {/* User dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setUserProfile(!userProfile)}
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                            isDarkMode ? 'bg-emerald-800 text-emerald-300' : 'bg-emerald-100 text-emerald-600'
                        }`}
                    >
                        <User size={16} />
                    </button>
                    
                    {userProfile && (
                        <div 
                            className={`absolute right-0 mt-2 w-52 rounded-md shadow-lg ${
                                isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
                            }`}
                        >
                            <div className={`p-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <p className="font-medium">Dr. Ana García</p>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>ana.garcia@medicare.com</p>
                            </div>
                            <ul className="py-1">
                                <li>
                                    <a href="#" className={`flex items-center px-3 py-2 text-sm ${
                                        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                    }`}>
                                        <span className="mr-2">👤</span>
                                        Mi Perfil
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`flex items-center px-3 py-2 text-sm ${
                                        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                    }`}>
                                        <span className="mr-2">⚙️</span>
                                        Configuración
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`flex items-center px-3 py-2 text-sm ${
                                        isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                    }`}>
                                        <span className="mr-2">🔔</span>
                                        Notificaciones
                                        <span className={`ml-auto px-2 py-0.5 text-xs rounded-full ${
                                        isDarkMode ? 'bg-emerald-800 text-emerald-200' : 'bg-emerald-100 text-emerald-800'
                                        }`}>5</span>
                                    </a>
                                </li>
                                <li className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <a href="#" className={`flex items-center px-3 py-2 text-sm ${
                                        isDarkMode ? 'hover:bg-gray-700 text-red-300' : 'hover:bg-gray-100 text-red-600'
                                    }`}>
                                        <span className="mr-2">🚪</span>
                                        Cerrar Sesión
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                
                {/* Dark mode toggle */}
                <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-600'
                    }`}
                >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                
                {/* Mobile menu button */}
                <button 
                className="md:hidden flex items-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                {mobileMenuOpen ? 
                    <X size={20} className={isDarkMode ? 'text-white' : 'text-gray-800'} /> : 
                    <Menu size={20} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
                }
                </button>
            </div>
            </div>
            
            {/* Mobile menu */}
            {mobileMenuOpen && (
            <div className="md:hidden py-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-2 pb-3">
                <a href="#" className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}>Inicio</a>
                <a href="#" className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}>Servicios</a>
                <a href="#" className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}>Doctores</a>
                <a href="#" className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}>Contacto</a>
                </div>
                <div className="pt-2 relative border-t border-gray-200 dark:border-gray-700">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className={`w-full pl-3 pr-10 py-2 rounded-md text-sm focus:outline-none ${
                    isDarkMode 
                        ? 'bg-gray-800 focus:bg-gray-700 border-gray-700' 
                        : 'bg-gray-100 focus:bg-white border-gray-200'
                    } border`}
                />
                <Search size={16} className="absolute right-3 top-5 text-gray-400" />
                </div>
            </div>
            )}
        </div>
        </div>
    );
};

export default Header;