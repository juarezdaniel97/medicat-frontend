import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const Rutas = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home/>} />
            </Route>

            <Route path="*" element={<>pagina no encontrada</>}/>
            {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    )
}

export default Rutas