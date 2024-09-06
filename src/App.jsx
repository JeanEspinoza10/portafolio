import { AboutMain } from "./Components/About/AboutMain"
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import { ProyectosMain } from "./Components/Proyectos/ProyectosMain"
import { AllHeaders } from './Components/General/AllHeaders'
import { AllFotter } from './Components/General/AllFotter'
export const App = () => {
  
  return(

    <BrowserRouter>
      <AllHeaders name={'Jean'}/>
      <Routes>
          <Route path="/" element={<Navigate to="/Acerca" />} />
          <Route path="/Acerca" element={<AboutMain/>}/>
          <Route path="/Proyectos" element={<ProyectosMain/>}/>
      </Routes>
      <AllFotter name={'Jean'}/>
    </BrowserRouter>
  ) 

    
}

