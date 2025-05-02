import React from 'react'
import { Calendar, Clock } from 'lucide-react';


const Agenda = ({ citas =[]}) => {


    return (
        <div>
            <div className='flex justify-between items-center mb-6'>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Mis Citas</h2>
                <button className="flex items-center px-4 py-2 cursor-pointer bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Nueva Cita
                </button>
            </div>

            {/* Filtros por fecha */}
            <div className='mb-6 flex flex-wrap gap-2 items-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-md'>
                <span className="text-sm text-gray-600 dark:text-gray-300">Filtrar por:</span>
                <button className="px-3 py-1 text-sm cursor-pointer bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full">
                    Próximas
                </button>
                <button className="px-3 py-1 text-sm cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                    Pasadas
                </button>
                <button className="px-3 py-1 text-sm cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                    Canceladas
                </button>
            </div>

            {/* Listas de Citas */}
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
    )
}

export default Agenda