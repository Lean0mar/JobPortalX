import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import {DetailProduct, EmpleoDetail, Empleos, Landing, LandingEmpresa, IniciarSesion, FormCv, FormEmpresa, FormVacante, Profiles, ProfilesCompany, MiPerfil, Applicant, Registro, FormRegisterEmpresa, FormRegistroUsuario} from './views';
import {Error404, ProtectedRoute, ServerMaintenance, TermsAndConditions} from './components';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux'


axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  const { isAuthenticated } = useAuth0()
  const currentUser = useSelector(state => state.dataEmail);

  return (  
    <div className="App">
      <Routes>
        <Route index element={<Landing />} />
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/empleos" element={<Empleos/>}></Route>
        <Route path="/iniciarSesion" element={<IniciarSesion />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/registroini-empresa" element={<FormRegisterEmpresa />}></Route>
        <Route path="/registro-usuario" element={<FormRegistroUsuario />}></Route>
        <Route path="*" element={<Error404 />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
        <Route path="/ServerDevelop" element={<ServerMaintenance/>} />
        <Route path="/product/:id" element={<DetailProduct/>}></Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} currentUser={currentUser}/>}>
          <Route path="/empleoDetail/:detailId" element={<EmpleoDetail />} />
          <Route path="/empresa" element={<LandingEmpresa />}></Route>
          <Route path="/registro-cv" element={<FormCv />}></Route>
          <Route path="/registro-empresa" element={<FormEmpresa />}></Route>
          <Route path="/registro-vacante" element={<FormVacante />}></Route>
          <Route path='/profiles' element={<Profiles/>} />
          <Route path='/applicant' element={<Applicant/>} />
          <Route path='/profiles-company' element={<ProfilesCompany/>} />
          <Route path="/MiPerfil" element={<MiPerfil/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;