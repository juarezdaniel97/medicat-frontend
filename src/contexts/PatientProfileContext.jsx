import { createContext, useContext } from "react";
import { useProfilePatient } from "../hooks/useProfilePatient";


const PatientProfileContext = createContext();


export const PatientProfileProvider = ({children}) => {
    const values = useProfilePatient();

    return (
        <PatientProfileContext.Provider value={values}>
            {children}
        </PatientProfileContext.Provider>
    )
}


export const usePatientProfileContext = () => useContext(PatientProfileContext)