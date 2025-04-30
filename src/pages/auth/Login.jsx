import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, loading, error, clearError } = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        clearError();
    }, [])
    

    const onSubmit = async (data) => {
        const success = await login(data.email, data.password);
        if (success) {
            navigate("/home");
        }
    }
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-emerald-600">MediCat</h1>
                    <p className="text-gray-600 mt-2">Inicia sesión en tu cuenta</p>
                </div>

                {
                    error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        {error}
                    </div>)
                }

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                            Correo electrónico
                        </label>
                        <input
                            id='email'
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

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                            Contraseña
                        </label>
                        <input
                            id='password'
                            type="password"
                            className={`w-full px-3 py-2 border rounded-md ${ errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                            placeholder="••••••••"
                            {...register('password', { 
                                required: 'La contraseña es obligatoria',
                                minLength: {
                                value: 6,
                                message: 'La contraseña debe tener al menos 6 caracteres'
                                }
                        })}
                        />
                        {errors.password && (
                        <p className="mt-1 text-red-500 text-xs">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                                {...register('remember')}
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                Recordarme
                            </label>
                        </div>
                        <a href="#" className="text-sm text-emerald-600 hover:text-emerald-500">
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
                    <p className="text-sm text-gray-600">
                        ¿No tienes una cuenta?{' '}
                        <Link to="/register" className='text-emerald-600 hover:text-emerald-500 font-medium'>
                            Regístrate aquí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;