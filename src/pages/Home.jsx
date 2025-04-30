import React from 'react'
import Login from './auth/Login'
import Header from '../components/layouts/Header'
import { useThemeContext } from '../contexts/ThemeContext';

const Home = () => {

    const { theme } = useThemeContext();
    const isDarkMode = theme === 'dark';

    return (
        <>
            {/* <Header/>
            <Login/> */}
            <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <Header />
                <main className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">¡Bienvenido a MediCat!</h1>
                    <p className="mb-4">El sistema de gestión médica para profesionales de la salud.</p>
                    {/* Resto del contenido de la aplicación */}
                </main>
            </div>
        </>
    )
}

export default Home