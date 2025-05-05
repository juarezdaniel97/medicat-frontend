import React from 'react'
import Login from './auth/Login'
import Header from '../components/layouts/Header'
import { useThemeContext } from '../contexts/ThemeContext';
import Footer from '../components/layouts/Footer';

const Home = () => {

    const { theme } = useThemeContext();
    const isDarkMode = theme === 'dark';

    return (
        <>
            <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <Header />
                <main className="container mx-auto px-4 py-8">
                    <Login />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Home