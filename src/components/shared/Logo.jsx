import React from 'react'

import { useThemeContext } from '../../contexts/ThemeContext'

const Logo = () => {

    const { theme } = useThemeContext();
    const isDarkMode = theme === 'dark';


    return (
        <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-emerald-800' : 'bg-emerald-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
            <span className={`text-xl font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>MediCat</span>
        </div>
    )
}

export default Logo