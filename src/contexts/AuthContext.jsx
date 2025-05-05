import { createContext, useContext, useEffect, useState } from "react";
import api, { getUser, loginUser, registerUser } from "../API/auth";
import { jwtDecode } from "jwt-decode";
import { getProfile } from "../API/profile";


    const AuthContext = createContext();


    export const AuthProvider = ({children}) =>{
        const [user, setUser] = useState(null);
        const [userData, setUserData] = useState(null);
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null)
        const [success, setSuccess] = useState("")

        useEffect(() => {
            const checkAuth = async () =>{
                setLoading(true);
                
                try {
                    const token = localStorage.getItem("token");
                    
                    if (token) {
                        const decoded = jwtDecode(token);
                        const  currentTime = Date.now() / 1000;

                        if (decoded.exp && decoded.exp < currentTime) {
                            logout();
                        }else{
                            setUser(decoded)
                            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                        }
                    }

                } catch (err) {
                    console.error('Error al verificar autenticación ', err);
                    logout();

                } finally{
                    setLoading(false)
                }
            }

            checkAuth();
        }, []);
        

        const login = async (email, password) =>{

            setLoading(true);
            setError(null);

            try {
                const res = await loginUser({email, password});

                const { token } = res.data;

                const decoded = jwtDecode(token);

                localStorage.setItem("token", token);
                
                const responseProfile = await getProfile(decoded.id);

                setUser(decoded)
                setUserData(responseProfile.data.profileUser);

                api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

                return true;

            } catch (err) {
                console.error("Error durante el login. ", err);
                const errorMessage = err.response?.data?.message || "Error al iniciar sesión";
                setError(errorMessage);
                return false;

            } finally{
                setLoading(false);
            }
        }

        const logout = () =>{
            setUser(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            delete api.defaults.headers.common["Authorization"];
        }

        const register = async (data) => {
            setLoading(true);
            setError(null);
            setSuccess("")
            try {
                const res = await registerUser(data);
                const { token } = res.data.data;
                
                const decoded = jwtDecode(token);

                setUser(decoded);
                localStorage.setItem("token", token);
                api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

                setSuccess(res.data.message);
                return true;

            } catch (err) {
                console.error("Error dutante el registro. ", err);
                const errorMessage = `${ err.response?.data?.message}, ${err.response?.data?.error}` || "Error al registrar usuario";
                setError(errorMessage);
                return false;

            } finally{
                setLoading(false);
            }
        }

        const clearError = () => {
            setError(null);
        }


        return (
            <AuthContext.Provider value={ {user, userData, loading, error, success ,clearError, login, logout, register} }>
                {children}
            </AuthContext.Provider>
        )
    }

    export const useAuthContext = () => useContext(AuthContext)


