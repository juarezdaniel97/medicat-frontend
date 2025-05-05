import React from 'react'
import { useState } from 'react';
import HeaderPatient from '../../components/layouts/HeaderPatient'
import { Calendar, FileText, User, Heart, User2, UsbIcon, UserSquare, UserCheck, UserCheck2, UserCheck2Icon, UserCircle, UserCircle2, UserCircle2Icon} from 'lucide-react';
import Agenda from '../patient/Agenda';
import Historial from '../patient/Historial';
import Medico from '../medico/Medico';
import Favoritos from '../patient/Favoritos';
import Perfil from '../profiles/Perfil';

const PatientDashboard = () => {

    const [activeTab, setActiveTab] = useState('agenda');

    
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
    
    const perfil = {
        nombre: 'Juan',
        apellido: 'Pérez',
        correo: 'juan.perez@email.com',
        telefono: '123456789',
        fechaNacimiento: '1990-01-01',
        genero: 'Masculino',
        direccion: {
          calle: 'Calle Falsa 123',
          ciudad: 'Springfield',
          codigoPostal: '12345'
        }
      }
    
    const favoritos = medicos.slice(0, 3);

    return (
        <div className='min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-200'>
            {/* Header */}
            <HeaderPatient/>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Menu */}
                <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
                    <nav className="flex space-x-8" aria-label="Tabs">
                        <button
                            onClick={() => setActiveTab('agenda')}
                            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm cursor-pointer ${ activeTab === 'agenda' ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600' }`}
                        >
                        <Calendar className="mr-2 h-5 w-5" />
                            Agenda
                        </button>
                        <button
                            onClick={() => setActiveTab('historial')}
                            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm cursor-pointer ${ activeTab === 'historial' ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600' }`}
                        >
                        <FileText className="mr-2 h-5 w-5" />
                            Historial
                        </button>
                        <button
                            onClick={() => setActiveTab('medicos')}
                            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm cursor-pointer ${ activeTab === 'medicos'  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600' }`}
                        >
                        <User className="mr-2 h-5 w-5" />
                        Médicos
                        </button>

                        <button
                            onClick={() => setActiveTab('favoritos') }
                            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm cursor-pointer ${ activeTab == 'favoritos' ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400': 'border-transparent text-gray-500 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600' }`}>
                            <Heart className='mr-2 h-5 w-5'/>
                            Favoritos
                        </button>
                        <button
                            onClick={() => setActiveTab('perfil') }
                            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm cursor-pointer ${ activeTab == 'perfil' ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400': 'border-transparent text-gray-500 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600' }`}>
                            <UserCircle2Icon className='mr-2 h-5 w-5'/>
                            Mi Perfil
                        </button>
                    </nav>
                </div>
                
                {/* Contenido */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    {activeTab === 'agenda' && <Agenda citas={citas} />}
                    {activeTab === 'historial' && <Historial historial={historial} />}
                    {activeTab === 'medicos' && <Medico medicos={medicos} />}
                    {activeTab === 'favoritos' && <Favoritos favoritos={favoritos} />}
                    {activeTab === 'perfil' && <Perfil/>}
                </div>
            </main>
        </div>
    )
}

export default PatientDashboard