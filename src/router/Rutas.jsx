import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import RegisterProfile from '../pages/profiles/RegisterProfile'

const Rutas = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/register-profile' element={<RegisterProfile/>} />
                <Route path='/home' element={<Home/>} />
            </Route>

            <Route path="*" element={<>pagina no encontrada</>}/>
            {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    )
}

export default Rutas