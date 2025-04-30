import React from 'react'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useThemeContext } from '../../contexts/ThemeContext';
import Navigation from './Navigation';
import SearchBar from './SearchBar';


const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useThemeContext();
    const isDarkMode = theme === 'dark';

    return (
        <div className="md:hidden">
            <button 
                className="flex items-center justify-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
                {isOpen ? 
                <X size={20} className={isDarkMode ? 'text-white' : 'text-gray-800'} /> : 
                <Menu size={20} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
                }
            </button>
            
            {isOpen && (
                <div className="absolute left-0 right-0 top-16 py-3 px-4 border-t z-50 shadow-lg
                            border-gray-200 dark:border-gray-700
                            bg-white dark:bg-gray-900">
                <Navigation mobile={true} />
                <SearchBar mobile={true} />
                </div>
            )}
        </div>
    )
}

export default MobileMenu