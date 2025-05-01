import { Loader2, Sun, Moon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useThemeContext } from '../../contexts/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { usePatientProfileContext } from '../../contexts/PatientProfileContext';

const RegisterProfile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { theme } = useThemeContext();
    const { create, loading, error } = usePatientProfileContext();

    const navigate = useNavigate();
    const isDarkMode = theme === 'dark';
    
    const onSubmit = async (data) => {
        const userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            address: {
                street: data.street,
                city: data.city,
                zipCode: data.zipCode
            },
            profileType: "patient"
        };
        
        const success = await create(userData);

        if (success) {
            
            navigate("/home");
        }
    };


    return (
        <div className={`min-h-screen flex items-center justify-center px-4 py-6 sm:px-6 ${isDarkMode ? 'bg-gray-900': 'bg-gray-100'}`}>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md w-full max-w-md transition-colors duration-200">                
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">MediCat</h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">Crea tu Perfil</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-md text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Datos personales básicos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                Nombre
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                className={`w-full px-3 py-2 border rounded-md ${
                                    errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                placeholder="Daniel"
                                {...register('firstName', { 
                                    required: 'El nombre es obligatorio', 
                                    minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres'} 
                                })}
                            />
                            {errors.firstName && (
                                <p className="mt-1 text-red-500 text-xs">{errors.firstName.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                Apellido
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                className={`w-full px-3 py-2 border rounded-md ${
                                    errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`} 
                                placeholder="Juárez"
                                {...register('lastName', { 
                                    required: 'El apellido es obligatorio', 
                                    minLength: { value: 2, message: 'El apellido debe tener al menos 2 caracteres' } 
                                })}
                            />
                            {errors.lastName && (
                                <p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Teléfono y Fecha de nacimiento */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="phoneNumber" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                Teléfono
                            </label>
                            <input
                                id="phoneNumber"
                                type="tel"
                                className={`w-full px-3 py-2 border rounded-md ${
                                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                placeholder="123456789"
                                {...register('phoneNumber', { 
                                    required: 'El teléfono es obligatorio',
                                    pattern: {
                                        value: /^\d{9,15}$/,
                                        message: 'Ingrese un número de teléfono válido'
                                    }
                                })}
                            />
                            {errors.phoneNumber && (
                                <p className="mt-1 text-red-500 text-xs">{errors.phoneNumber.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="dateOfBirth" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                Fecha de nacimiento
                            </label>
                            <input
                                id="dateOfBirth"
                                type="date"
                                className={`w-full px-3 py-2 border rounded-md ${
                                    errors.dateOfBirth ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`} 
                                {...register('dateOfBirth', { 
                                    required: 'La fecha de nacimiento es obligatoria' 
                                })}
                            />
                            {errors.dateOfBirth && (
                                <p className="mt-1 text-red-500 text-xs">{errors.dateOfBirth.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Género */}
                    <div>
                        <label htmlFor="gender" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                            Género
                        </label>
                        <select
                            id="gender"
                            className={`w-full px-3 py-2 border rounded-md ${
                                errors.gender ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                            {...register('gender', { 
                                required: 'El género es obligatorio' 
                            })}
                        >
                            <option value="">Seleccione un género</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="X">Otro</option>
                        </select>
                        {errors.gender && (
                            <p className="mt-1 text-red-500 text-xs">{errors.gender.message}</p>
                        )}
                    </div>

                    {/* Dirección */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <h3 className="text-gray-700 dark:text-gray-300 font-medium mb-3">Dirección</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="street" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                    Calle y número
                                </label>
                                <input
                                    id="street"
                                    type="text"
                                    className={`w-full px-3 py-2 border rounded-md ${
                                        errors.street ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                    placeholder="Calle Principal 123"
                                    {...register('street', { 
                                        required: 'La dirección es obligatoria' 
                                    })}
                                />
                                {errors.street && (
                                    <p className="mt-1 text-red-500 text-xs">{errors.street.message}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="city" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                        Ciudad
                                    </label>
                                    <input
                                        id="city"
                                        type="text"
                                        className={`w-full px-3 py-2 border rounded-md ${
                                            errors.city ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                        placeholder="Ciudad Ejemplo"
                                        {...register('city', { 
                                            required: 'La ciudad es obligatoria' 
                                        })}
                                    />
                                    {errors.city && (
                                        <p className="mt-1 text-red-500 text-xs">{errors.city.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="zipCode" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                                        Código postal
                                    </label>
                                    <input
                                        id="zipCode"
                                        type="text"
                                        className={`w-full px-3 py-2 border rounded-md ${
                                            errors.zipCode ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                                        } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                                        placeholder="12345"
                                        {...register('zipCode', { 
                                            required: 'El código postal es obligatorio',
                                            pattern: {
                                                value: /^\d{5}$/,
                                                message: 'Ingrese un código postal válido de 5 dígitos'
                                            }
                                        })}
                                    />
                                    {errors.zipCode && (
                                        <p className="mt-1 text-red-500 text-xs">{errors.zipCode.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <Loader2 className='animate-spin mr-2'/>
                                Registrando...
                            </span>
                        ) : (
                            'Crear Perfil'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterProfile;