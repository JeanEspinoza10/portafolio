import { AboutMain } from "./Components/About/AboutMain"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { ProyectosMain } from "./Components/Proyectos/ProyectosMain"

export const App = () => {
  
  return(
    // <>
    //   <AboutMain/>
    // </>
    <BrowserRouter>
      <Routes>
          <Route path="/Acerca" element={<AboutMain/>}/>
          <Route path="/Proyectos" element={<ProyectosMain/>}/>
      </Routes>
    </BrowserRouter>
  ) 

    
}

