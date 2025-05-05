import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import RegisterProfile from '../pages/profiles/RegisterProfile'
import PatientDashboard from '../pages/dashboard/PatientDashboard'
import DoctorDashboard from '../pages/dashboard/DoctorDashboard'
import AdminDashboard from '../pages/dashboard/AdminDashboard'
import PrivateRoutes from './PrivateRoutes'

const Rutas = () => {
    return (
        <Routes>
            <Route>
                {/* <Route path='/' 
                element={
                    <PrivateRoutes>
                    <Home/>
                    </PrivateRoutes>
                } /> */}
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/register-profile' element={<RegisterProfile/>} />
                


                {/* <Route path='/home-Admin' 
                    element={
                        <PrivateRoutes>
                            <AdminDashboard/>
                        </PrivateRoutes>
                    } /> */}
                {/* <Route path='/home-patient' 
                    element={
                        <PrivateRoutes>
                            <PatientDashboard/>
                        </PrivateRoutes>
                    } />
                <Route path='/home-doctor'  
                    element={
                        <PrivateRoutes>
                            <DoctorDashboard/>
                        </PrivateRoutes>
                        } /> */}
            </Route>

            <Route path="*" element={<>pagina no encontrada</>}/>
            {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    )
}

export default Rutas