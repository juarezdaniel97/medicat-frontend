import React from 'react'
import { Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../../contexts/ThemeContext';



const ThemeToggler = () => {
    const { theme, toggleTheme } = useThemeContext();
    const isDarkMode = theme === 'dark';


    return (
        <button 
            onClick={toggleTheme}
            className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
            isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-600'
            }`}
            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}

export default ThemeToggler