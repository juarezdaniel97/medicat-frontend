import axios from "axios";

const api = axios.create({
    baseURL: "https://medicat-api.onrender.com/api",
    headers: {
        'Content-Type': 'application/json'
    }
})

export const loginUser = (credientials) => api.post(`/auth/login`, credientials);
export const registerUser = (credientials) => api.post(`/auth/register`, credientials);
export const getUser = (id) => api.get(`/auth/${id}`);


api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token expirado o inválido
            localStorage.removeItem('token');
            // Aquí podrías redirigir al login o mostrar un mensaje
        }
        return Promise.reject(error);
        }
    );

export default api;