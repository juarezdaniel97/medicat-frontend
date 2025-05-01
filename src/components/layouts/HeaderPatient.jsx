import React from 'react'
import { useThemeContext } from '../../contexts/ThemeContext';
import Logo from '../shared/Logo';
import SearchBar from '../shared/SearchBar';
import UserProfile from '../shared/UserProfile';
import ThemeToggler from '../shared/ThemeToggler';
import MobileMenu from '../shared/MobileMenu';
import NavigationPatient from '../shared/navigation/NavigationPatient';

const HeaderPatient = () => {

    const { theme } = useThemeContext();
    const isDarkMode = theme === 'dark';

    return (
        <div className={`w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Logo />
                    
                    {/* Desktop Navigation */}
                    {/* <Navigation /> */}
                    <NavigationPatient/>
                    {/* Right section */}
                    <div className="flex items-center space-x-3">
                        {/* Search */}
                        <SearchBar />
                        
                        {/* User dropdown */}
                        <UserProfile />
                        
                        {/* Dark mode toggle */}
                        <ThemeToggler />
                        
                        {/* Mobile menu button */}
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPatient