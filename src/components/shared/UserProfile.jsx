import React, { useState } from 'react'
import { User } from 'lucide-react';
import { useThemeContext } from '../../contexts/ThemeContext';


const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useThemeContext();
    const isDarkMode = theme === 'dark';


    const profileMenuItems = [
        { name: 'Mi Perfil', icon: '👤', href: '#' },
        { name: 'Configuración', icon: '⚙️', href: '#' },
        { 
            name: 'Notificaciones', 
            icon: '🔔', 
            href: '#', 
            badge: {
                count: 5,
                className: isDarkMode ? 'bg-emerald-800 text-emerald-200' : 'bg-emerald-100 text-emerald-800'
            }
        },
        { 
            name: 'Cerrar Sesión', 
            icon: '🚪', 
            href: '#', 
            className: isDarkMode ? 'text-red-300' : 'text-red-600',
            divider: true
        }
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
                    isDarkMode ? 'bg-emerald-800 text-emerald-300' : 'bg-emerald-100 text-emerald-600'
                }`}
            >
            <User size={16} />
            </button>
        
            {isOpen && (
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
                    {profileMenuItems.map((item, index) => (
                        <li 
                        key={index} 
                        className={item.divider ? `border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}` : ''}
                        >
                        <a 
                            href={item.href} 
                            className={`flex items-center px-3 py-2 text-sm ${
                            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            } ${item.className || ''}`}
                        >
                            <span className="mr-2">{item.icon}</span>
                            {item.name}
                            {item.badge && (
                            <span className={`ml-auto px-2 py-0.5 text-xs rounded-full ${item.badge.className}`}>
                                {item.badge.count}
                            </span>
                            )}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                )}
        </div>
    )
}

export default UserProfile