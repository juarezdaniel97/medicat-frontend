import { Toaster } from "react-hot-toast"
import Header from "./components/layouts/Header"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Rutas from "./router/Rutas"


function App() {
  
  return (
    <>
      <Toaster position="bottom-right"/>
      <Rutas/>
    </>
  )
}

export default App
