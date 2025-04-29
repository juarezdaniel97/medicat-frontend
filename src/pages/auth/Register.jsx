import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        watch,
    } = useForm();

    const password = watch('password', '');

    const onSubmit = async (data) => {
        setIsLoading(true);
        setErrorMessage('');
        
        try {
        // Simulación de un delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Aquí implementarías la lógica de registro real
        console.log('Datos de registro:', data);
        
        // Ejemplo de cómo manejar un registro exitoso
        // navigate('/login'); // Usando React Router para redireccionar
        
        } catch (error) {
        setErrorMessage('Error al registrar. Por favor, inténtelo de nuevo.');
        console.error('Error en registro:', error);
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-emerald-600">MediCare</h1>
                <p className="text-gray-600 mt-2">Crea tu cuenta</p>
                </div>

                {errorMessage && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                    {errorMessage}
                </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-2">
                        Nombre
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        className={`w-full px-3 py-2 border rounded-md ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                        placeholder="Juan"
                        {...register('firstName', { 
                        required: 'El nombre es obligatorio',
                        minLength: {
                            value: 2,
                            message: 'El nombre debe tener al menos 2 caracteres'
                        }
                        })}
                    />
                    {errors.firstName && (
                        <p className="mt-1 text-red-500 text-xs">{errors.firstName.message}</p>
                    )}
                    </div>

                    <div>
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-2">
                        Apellido
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        className={`w-full px-3 py-2 border rounded-md ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                        placeholder="Pérez"
                        {...register('lastName', { 
                        required: 'El apellido es obligatorio',
                        minLength: {
                            value: 2,
                            message: 'El apellido debe tener al menos 2 caracteres'
                        }
                        })}
                    />
                    {errors.lastName && (
                        <p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>
                    )}
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Correo electrónico
                    </label>
                    <input
                    id="email"
                    type="email"
                    className={`w-full px-3 py-2 border rounded-md ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    placeholder="tu@ejemplo.com"
                    {...register('email', { 
                        required: 'El correo electrónico es obligatorio',
                        pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Dirección de correo inválida'
                        }
                    })}
                    />
                    {errors.email && (
                    <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                    Contraseña
                    </label>
                    <input
                    id="password"
                    type="password"
                    className={`w-full px-3 py-2 border rounded-md ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    placeholder="••••••••"
                    {...register('password', { 
                        required: 'La contraseña es obligatoria',
                        minLength: {
                        value: 8,
                        message: 'La contraseña debe tener al menos 8 caracteres'
                        },
                        pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'La contraseña debe incluir mayúsculas, minúsculas, números y al menos un caracter especial'
                        }
                    })}
                    />
                    {errors.password && (
                    <p className="mt-1 text-red-500 text-xs">{errors.password.message}</p>
                    )}
                </div>

                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">
                    Confirmar contraseña
                    </label>
                    <input
                    id="confirmPassword"
                    type="password"
                    className={`w-full px-3 py-2 border rounded-md ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    placeholder="••••••••"
                    {...register('confirmPassword', { 
                        required: 'Por favor confirma la contraseña',
                        validate: value => value === password || 'Las contraseñas no coinciden'
                    })}
                    />
                    {errors.confirmPassword && (
                    <p className="mt-1 text-red-500 text-xs">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <div className="mb-6">
                    <div className="flex items-center">
                    <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                        {...register('terms', { 
                        required: 'Debes aceptar los términos y condiciones'
                        })}
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        Acepto los <a href="#" className="text-emerald-600 hover:text-emerald-500">términos y condiciones</a>
                    </label>
                    </div>
                    {errors.terms && (
                    <p className="mt-1 text-red-500 text-xs">{errors.terms.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
                >
                    {isLoading ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Registrando...
                    </span>
                    ) : (
                    'Crear cuenta'
                    )}
                </button>
                </form>

                <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    ¿Ya tienes una cuenta?{' '}
                    <a href="#" className="text-emerald-600 hover:text-emerald-500 font-medium">
                    Inicia sesión aquí
                    </a>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Register;