import { jwtDecode } from "jwt-decode";
import api, { createProfile, deleteProfile, getProfile, listProfile, updateProfile } from "../API/profile"
import { useState, useEffect } from "react";


export const useProfilePatient = () => {

    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        async function obtenerProfile() {
            const token = localStorage.getItem('token');
        
            if (token) {
                const decoded = jwtDecode(token);
                const userProfile = await getProfile(decoded.id);
                localStorage.setItem('profile', JSON.stringify(userProfile.data));
            }
        }
        obtenerProfile();
    }, [])
    

    const create = async (data) => {
        setLoading(true);
        setError(null);
    
        try {
            
            const token = localStorage.getItem('token');
            let userId = null;
            
            if (token) {
                const decoded = jwtDecode(token);
                userId = decoded.id
            }
            
            const profileData = {
                ...data,
                userId: userId
            };
            
            const response = await createProfile(profileData);
            
            // setProfile(response.data)
            return true;
    
        } catch (err) {
            console.error("Error dutante creación del perfil. ", err);
            const errorMessage = err.response?.data?.message || "Error al crear un perfil";
            setError(errorMessage);
            return false;
        } finally {
            setLoading(false);
        }
    }

    return {
        create,
        loading,
        error
    }
}






