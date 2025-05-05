import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../contexts/AuthContext';
import { useThemeContext } from '../../contexts/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, login, loading, error, clearError } = useAuthContext();
    
    const navigate = useNavigate();

    // if (user) {
    //     navigate("/home-patient");
    // }

    
    useEffect(() => {
        clearError();
    }, [])
    
    const onSubmit = async (data) => {
        const response = await login(data.email, data.password);
        if (response) {
            navigate("/home-patient"); // Redirigir a la página de inicio del paciente
        }
    }
    
    return (
        <div className="flex items-center justify-center">
            <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 md:p-8 rounded-lg shadow-md w-full max-w-md transition-colors duration-200">
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">MediCat</h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">Inicia sesión en tu cuenta</p>
                </div>

                {
                    error && (
                    <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-md text-sm">
                        {error}
                    </div>)
                }

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                            Correo electrónico
                        </label>
                        <input
                            id='email'
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

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                            Contraseña
                        </label>
                        <input
                            id='password'
                            type="password"
                            className={`w-full px-3 py-2 border rounded-md ${
                                errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                            } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                            placeholder="••••••••"
                            {...register('password', { 
                                required: 'La contraseña es obligatoria',
                                minLength: {
                                value: 3,
                                message: 'La contraseña debe tener al menos 3 caracteres'
                                }
                        })}
                        />
                        {errors.password && (
                        <p className="mt-1 text-red-500 text-xs">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 dark:border-gray-600 rounded"
                                {...register('remember')}
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                Recordarme
                            </label>
                        </div>
                        <a href="#" className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300">
                        ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out"
                    >
                        {loading ? (
                        <span className="flex items-center justify-center">
                            <Loader2 className="animate-spin mr-2" />
                            Iniciando sesión...
                        </span>
                        ) : (
                        'Iniciar sesión'
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        ¿No tienes una cuenta?{' '}
                        <Link to="/register" className='text-emerald-600 cursor-pointer dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 font-medium'>
                            Regístrate aquí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;