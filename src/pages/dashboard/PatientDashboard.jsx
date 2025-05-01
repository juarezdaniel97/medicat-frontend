import React from 'react'
import HeaderPatient from '../../components/layouts/HeaderPatient'
import { useThemeContext } from '../../contexts/ThemeContext';

import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  FileText, 
  User, 
  LogOut, 
  Sun, 
  Moon, 
  Search,
  ChevronRight,
  Bell
} from 'lucide-react';

const PatientDashboard = () => {

    const { theme } = useThemeContext();
    const isDarkMode = theme === 'dark';
    const [activeTab, setActiveTab] = useState('agenda');
    const [notifications, setNotifications] = useState(2);

    // Simular datos del usuario
    const user = {
        name: "Juan Pérez",
        email: "juan@ejemplo.com"
    };
    
    // Datos de ejemplo
    const citas = [
        { id: 1, doctor: "Dra. María López", especialidad: "Cardiología", fecha: "2025-05-05", hora: "10:00", estado: "confirmada" },
        { id: 2, doctor: "Dr. Juan García", especialidad: "Dermatología", fecha: "2025-05-12", hora: "16:30", estado: "pendiente" },
        { id: 3, doctor: "Dr. Roberto Sánchez", especialidad: "Neurología", fecha: "2025-05-20", hora: "09:15", estado: "confirmada" }
    ];
    
    const historial = [
        { id: 1, fecha: "2025-04-15", tipo: "Consulta", doctor: "Dra. María López", descripcion: "Control rutinario cardiovascular" },
        { id: 2, fecha: "2025-03-10", tipo: "Análisis", doctor: "Dr. Carlos Ruiz", descripcion: "Análisis de sangre completo" },
        { id: 3, fecha: "2025-02-22", tipo: "Tratamiento", doctor: "Dra. Ana Torres", descripcion: "Inicio de tratamiento para hipertensión" }
    ];
    
    const medicos = [
        { id: 1, nombre: "Dra. María López", especialidad: "Cardiología", valoracion: 4.9, disponible: true },
        { id: 2, nombre: "Dr. Juan García", especialidad: "Dermatología", valoracion: 4.7, disponible: true },
        { id: 3, nombre: "Dr. Roberto Sánchez", especialidad: "Neurología", valoracion: 4.8, disponible: false },
        { id: 4, nombre: "Dra. Ana Torres", especialidad: "Medicina General", valoracion: 4.6, disponible: true },
        { id: 5, nombre: "Dr. Carlos Ruiz", especialidad: "Análisis Clínicos", valoracion: 4.5, disponible: true }
    ];
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    const handleLogout = () => {
        console.log('Cerrar sesión');
    };

    return (
        // <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        //         <HeaderPatient/>
        //         <main className="container mx-auto px-4 py-8">
        //             <h1 className="text-3xl font-bold mb-6">¡Bienvenido a MediCat!</h1>
        //             <p className="mb-4">El sistema de gestión médica para profesionales de la salud.</p>
                    
        //             <p>Paciente</p>
        //         </main>
        // </div>
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-200`}>
        
            {/* Header */}
            <header className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>MediCat</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button 
                    className={`relative p-1 rounded-full ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-200'}`}
                    aria-label="Notificaciones"
                    >
                    <Bell className="h-6 w-6" />
                    {notifications > 0 && (
                        <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-xs text-white text-center">
                        {notifications}
                        </span>
                    )}
                    </button>
                    <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors`}
                    aria-label="Cambiar tema"
                    >
                    {theme === 'dark' ? (
                        <Sun className="h-5 w-5 text-yellow-400" />
                    ) : (
                        <Moon className="h-5 w-5 text-gray-600" />
                    )}
                    </button>
                    <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium">
                        {user?.name?.charAt(0) || "P"}
                    </div>
                    <span className={`ml-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hidden sm:block`}>
                        {user?.name || "Paciente"}
                    </span>
                    </div>
                    <button
                    onClick={handleLogout}
                    className={`p-1 rounded-full ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-200'}`}
                    aria-label="Cerrar sesión"
                    >
                    <LogOut className="h-5 w-5" />
                    </button>
                </div>
                </div>
            </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Tabs */}
                <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-8" aria-label="Tabs">
                    <button
                    onClick={() => setActiveTab('agenda')}
                    className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm ${
                        activeTab === 'agenda'
                        ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    >
                    <Calendar className="mr-2 h-5 w-5" />
                    Mi Agenda
                    </button>
                    <button
                    onClick={() => setActiveTab('historial')}
                    className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm ${
                        activeTab === 'historial'
                        ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    >
                    <FileText className="mr-2 h-5 w-5" />
                    Historial Médico
                    </button>
                    <button
                    onClick={() => setActiveTab('medicos')}
                    className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm ${
                        activeTab === 'medicos'
                        ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    >
                    <User className="mr-2 h-5 w-5" />
                    Médicos
                    </button>
                </nav>
                </div>
                
                {/* Tab Content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                {activeTab === 'agenda' && (
                    <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Mis Citas</h2>
                        <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
                        <Calendar className="mr-2 h-4 w-4" />
                        Nueva Cita
                        </button>
                    </div>
                    
                    {/* Filtro de fechas */}
                    <div className="mb-6 flex flex-wrap gap-2 items-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Filtrar por:</span>
                        <button className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full">
                        Próximas
                        </button>
                        <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                        Pasadas
                        </button>
                        <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                        Canceladas
                        </button>
                    </div>
                    
                    {/* Lista de citas */}
                    <div className="space-y-4">
                        {citas.map(cita => (
                        <div 
                            key={cita.id} 
                            className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-0">
                            <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${
                                cita.estado === 'confirmada' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                                }`}>
                                <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">{cita.doctor}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{cita.especialidad}</p>
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Calendar className="h-4 w-4 mr-1" />
                                {cita.fecha} - {cita.hora}
                            </div>
                            </div>
                            <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                                cita.estado === 'confirmada' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            }`}>
                                {cita.estado === 'confirmada' ? 'Confirmada' : 'Pendiente'}
                            </span>
                            <button className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-medium">
                                Detalles
                            </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                )}
                
                {activeTab === 'historial' && (
                    <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Mi Historial Médico</h2>
                        <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Buscar en historial..." 
                            className="pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                    
                    {/* Lista de historial */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Tipo
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Doctor
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                Descripción
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Acciones</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {historial.map(item => (
                            <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                {item.fecha}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                {item.tipo}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                {item.doctor}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                {item.descripcion}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
                                    Ver detalle
                                </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                )}
                
                {activeTab === 'medicos' && (
                    <div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Médicos Disponibles</h2>
                        <div className="relative w-full sm:w-64">
                        <input 
                            type="text" 
                            placeholder="Buscar médico..." 
                            className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                    
                    {/* Filtro por especialidad */}
                    <div className="mb-6 flex flex-wrap gap-2">
                        <button className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full">
                        Todas
                        </button>
                        <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                        Cardiología
                        </button>
                        <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                        Dermatología
                        </button>
                        <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                        Neurología
                        </button>
                        <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                        Medicina General
                        </button>
                    </div>
                    
                    {/* Lista de médicos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {medicos.map(medico => (
                        <div 
                            key={medico.id} 
                            className="border rounded-lg p-4 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        >
                            <div className="flex items-start">
                            <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4">
                                <User className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">{medico.nombre}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{medico.especialidad}</p>
                                <div className="flex items-center mt-1">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                    <svg 
                                        key={i} 
                                        className={`h-4 w-4 ${i < Math.floor(medico.valoracion) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    ))}
                                    <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">{medico.valoracion}</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                                medico.disponible 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                            }`}>
                                {medico.disponible ? 'Disponible' : 'No disponible'}
                            </span>
                            <button 
                                className={`flex items-center text-sm font-medium ${
                                medico.disponible 
                                    ? 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300' 
                                    : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                }`}
                                disabled={!medico.disponible}
                            >
                                Agendar Cita
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                )}
                </div>
            </main>
        </div>
    )
}

export default PatientDashboard