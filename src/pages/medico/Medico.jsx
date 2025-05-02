import React from 'react'
import { Search, User, ChevronRight } from 'lucide-react';


const Medico = ({ medicos = [] }) => {
    return (
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
    )
}

export default Medico