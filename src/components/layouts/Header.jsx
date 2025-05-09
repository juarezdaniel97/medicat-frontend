import { useThemeContext } from '../../contexts/ThemeContext';
import Logo from "../shared/Logo";
import Navigation from "../shared/Navigation";
import SearchBar  from "../shared/SearchBar";
import ThemeToggler  from "../shared/ThemeToggler";
import MobileMenu   from "../shared/MobileMenu";


const Header = () => {
    
    const { theme } = useThemeContext();
    const isDarkMode = theme === 'dark';
    
    
    
    return (
        <div className={`w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Logo />
                    
                    {/* Desktop Navigation */}
                    <Navigation />
                    
                    {/* Right section */}
                    <div className="flex items-center space-x-3">
                        {/* Search */}
                        <SearchBar />
                        
                        {/* Dark mode toggle */}
                        <ThemeToggler />
                        
                        {/* Mobile menu button */}
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;