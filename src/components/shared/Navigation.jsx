import React from 'react'
import { useThemeContext } from '../../contexts/ThemeContext'

const Navigation = ({ mobile = false }) => {
    
    const { theme } = useThemeContext();
    const isDarkMode = theme === 'dark';

    const navigationItems = [
        { name: 'Inicio', href: '#' },
        { name: 'Servicios', href: '#' },
        { name: 'Doctores', href: '#' },
        { name: 'Contacto', href: '#' },
    ];
    

    if (mobile) {
        return (
            <div className="flex flex-col space-y-2 pb-3">
                {navigationItems.map((item) => (
                <a 
                    key={item.name}
                    href={item.href} 
                    className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}
                >
                    {item.name}
                </a>
                ))}
            </div>
        );
    }

    return (
        <div className="hidden md:flex items-center space-x-4">
            {navigationItems.map((item) => (
                <a 
                    key={item.name}
                    href={item.href} 
                    className={`px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-emerald-50'}`}
                    >
                    {item.name}
                </a>
            ))}
        </div>

    )
}

export default Navigation