import axios from "axios";

// Crear una función que configure axios con el token actual
const createApiInstance = () => {
  const token = localStorage.getItem('token'); // Obtener el token del localStorage
    
    return axios.create({
        baseURL: "https://medicat-api.onrender.com/api",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Incluir el token en el header
        }
    });
};

// Usar esta función para cada llamada a la API
export const listProfile = () => {
    const api = createApiInstance();
    return api.get(`/profiles/list`);
};

export const getProfile = (id) => {
    const api = createApiInstance();
    return api.get(`/profile/${id}`);
};

export const createProfile = (data) => {
    const api = createApiInstance();
    return api.post(`/profile/create`, data);
};

export const updateProfile = (id, data) => {
    const api = createApiInstance();
    return api.put(`/profile/update/${id}`, data);
};

export const deleteProfile = (id) => {
    const api = createApiInstance();
    return api.delete(`/profile/delete/${id}`);
};


export const getApi = createApiInstance;
export default createApiInstance();