import { jwtDecode } from "jwt-decode";
import api, { createProfile, deleteProfile, getProfile, listProfile, updateProfile } from "../API/profile"
import { useState, useEffect } from "react";


export const useProfilePatient = () => {

    const [profiles, setProfiles] = useState([]);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        async function obtenerProfile() {
            const token = localStorage.getItem('token');
        
            if (token) {
                const decoded = jwtDecode(token);
                const userProfile = await getProfile(decoded.id);
                setProfile(userProfile)
            }
        }
        obtenerProfile();
    }, [])
    

    const profilePatient = async (id) =>{

    }

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
            
            setProfile(response.data)
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

    // const update = async (id, data) => {
    //     setLoading(true);
    //     setError(null);
    //     try {
    //         const response = await updateProfile(id, data);

    //         setProfiles(profiles.map(profile => profile._id === id ? response.data : profile ));

    //         if (currentProfile && currentProfile._id === id) { 
    //             setCurrentProfile(response.data);
    //         }
    //         return response.data;

    //     } catch (err) {
    //         setError(err.message || "Error al actualizar el perfil");
    //         console.error("Error updating profile:", err);
    //         return null;

    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // const deletePatient = async (id) => {
    //     setLoading(true);
    //     setError(null);
    //     try {
    //         await deleteProfile(id);
    //         setProfiles(profiles.filter(profile => profile._id !== id));

    //         if (currentProfile && currentProfile._id === id) {
    //             setCurrentProfile(null);
    //         }
    //         return true;
    //     } catch (err) {
    //         setError(err.message || "Error al eliminar el perfil");
    //         console.error("Error deleting profile:", err);
    //         return false;
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // const clearCurrentProfile = () => {
    //     setCurrentProfile(null);
    // };

    // useEffect(() => {

    //     // listPatients();
    // }, []);

    return {
        create,
        profile,
        loading,
        error
    }
}






