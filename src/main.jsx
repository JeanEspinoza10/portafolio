import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { AllFotter } from './Components/General/AllFotter'
import { AllHeaders } from './Components/General/AllHeaders'

import './Components/Styles/styleBody.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AllHeaders name={'Jean'}/>
    <App /> 
    <AllFotter name={'Jean'}/>
    
       
  </React.StrictMode>,
)
