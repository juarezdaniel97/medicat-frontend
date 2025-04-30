import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {

    const { register, handleSubmit, formState: { errors }, watch, } = useForm();
    const { register: registerUser, loading, error, success: messageSuccess, clearError} = useAuthContext();
    
    
    const navigate = useNavigate();

    useEffect(() => {
        clearError();
    }, [])

    useEffect(() => {
        if (messageSuccess) {
            toast.success(messageSuccess);
        }
    }, [messageSuccess]);
    

    const onSubmit = async (data) => {
        const  userData = {
            username: data.username,
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName
        };
        
        const success = await registerUser(userData);

        if (success) {
            navigate("/home")
        }
        
    };

    const password = watch('password');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-emerald-600">MediCat</h1>
                    <p className="text-gray-600 mt-2">Crea tu cuenta</p>
                </div>

                {
                    error && 
                    (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                            {error}
                        </div>
                    )
                }

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-2">
                                Nombre
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                className={`w-full px-3 py-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                                placeholder="Daniel"
                                {...register('firstName', { required: 'El nombre es obligatorio', minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres'} })}
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
                                className={`w-full px-3 py-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`} 
                                placeholder="Juárez"
                                {...register('lastName', { required: 'El apellido es obligatorio', minLength: { value: 2, message: 'El apellido debe tener al menos 2 caracteres' } })}
                            />
                            {errors.lastName && (
                                <p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
                            Nombre de usuario
                        </label>
                        <input
                            id="username"
                            type="text"
                            className={`w-full px-3 py-2 border rounded-md ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                            {...register('username', { 
                                required: 'El nombre de usuario es obligatorio',
                                minLength: {
                                    value: 3,
                                    message: 'El nombre de usuario debe tener al menos 3 caracteres'
                                }
                            })}
                        />
                        {errors.username && (
                            <p className="mt-1 text-red-500 text-xs">{errors.username.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                            Correo electrónico
                        </label>
                        <input
                        id="email"
                        type="email"
                        className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
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
                            className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                            placeholder="••••••••"
                            {...register('password', { 
                                    required: 'La contraseña es obligatoria',
                                    minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres'},
                                }
                                )
                            }
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
                            className={`w-full px-3 py-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300' } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
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
                    'Crear cuenta'
                    )}
                </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        ¿Ya tienes una cuenta?{' '}
                        
                        <Link to="/" className='text-emerald-600 hover:text-emerald-500 font-medium'>
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;