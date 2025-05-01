import { Loader2, Sun, Moon } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../contexts/AuthContext';
import { useThemeContext } from '../../contexts/ThemeContext'; // Importamos el contexto de tema
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch, } = useForm();
    const { register: registerUser, loading, error, success: messageSuccess, clearError} = useAuthContext();
    const { theme, toggleTheme } = useThemeContext(); // Usamos el contexto de tema
    
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
        const userData = {
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
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-200 px-4 py-6 sm:px-6">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md w-full max-w-md transition-colors duration-200">
                <div className="flex justify-end mb-2 sm:mb-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Cambiar tema"
                    >
                        {theme === 'dark' ? (
                            <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                        ) : (
                            <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                        )}
                    </button>
                </div>
                
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">MediCat</h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">Crea tu cuenta</p>
                </div>

                {
                    error && 
                    (
                        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-md text-sm">
                            {error}
                        </div>
                    )
                }

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                            Nombre de usuario
                        </label>
                        <input
                            id="username"
                            type="text"
                            className={`w-full px-3 py-2 border rounded-md ${
                                errors.username ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                            placeholder="usuario123"
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
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                            Correo electrónico
                        </label>
                        <input
                        id="email"
                        type="email"
                        className={`w-full px-3 py-2 border rounded-md ${
                            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
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
                        <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            className={`w-full px-3 py-2 border rounded-md ${
                                errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                            placeholder="••••••••"
                            {...register('password', { 
                                    required: 'La contraseña es obligatoria',
                                    minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres'},
                                }
                            )}
                        />
                        {errors.password && (
                        <p className="mt-1 text-red-500 text-xs">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                            Confirmar contraseña
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            className={`w-full px-3 py-2 border rounded-md ${
                                errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
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
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        ¿Ya tienes una cuenta?{' '}
                        
                        <Link to="/" className='text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 font-medium'>
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;