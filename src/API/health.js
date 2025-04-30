import axios from "axios";

const api = axios.create({
    baseURL: "https://medicat-api.onrender.com",
})

export const health = () => api.get(`/health`);


export default api;