import React from 'react'
import ThemeToggler from '../shared/ThemeToggler';
import Logo from '../shared/Logo';
import ButtonNotifications from '../shared/Buttons/ButtonNotifications';
import ButtonLogout from '../shared/Buttons/ButtonLogout';

const HeaderPatient = () => {

    // Simular datos del usuario
    const user = {
        name: "Daniel Pérez",
        email: "juan@ejemplo.com"
    };

    return (
        <header className='bg-gray-100  dark:bg-gray-800  shadow-sm'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Logo/>
                    </div>
        
                    <div className="flex items-center space-x-4">
                        <ButtonNotifications/>

                        <ThemeToggler/>

                        <div className='flex items-center'>
                            <div className='h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium'>
                                {user?.name?.charAt(0) || "P"}
                            </div>
                            <span className=' ml-2 text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block'>
                                {user?.name || "Paciente"} 
                            </span>
                        </div>

                        <ButtonLogout/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderPatient