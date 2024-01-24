import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthRoute from "./views/routes/AuthRoute"
import Login from "./views/main/components/Login"
import Register from "./views/main/components/Register";
import MainRoute from "./views/routes/MainRoute";
import Home from "./views/main/home/Home"
import Catalogo from "./views/main/pages/catalogo/Catalogo";
import Sumisura from "./views/main/pages/crea-preventio/su-misura/Sumisura";
import Dacatalogo from "./views/main/pages/crea-preventio/da-catalogo/Dacatalogo";
import Voli from "./views/main/pages/allotment/voli/Voli";
import Servizi from "./views/main/pages/allotment/servizi-a-terra/Servizi";
import TestiItinerari from "./views/main/pages/databse/testi-itinerari/TestiItinerari";
import Destinazioni from "./views/main/pages/databse/destinazioni/Destinazioni";
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/"  element={<MainRoute/>}>vvv
      <Route path="/" element={<Home/>} />
      <Route path="/catalogo" element={<Catalogo/>} />
      <Route path="/su-misura" element={<Sumisura/>} />
      <Route path="/da-catalogo" element={<Dacatalogo/>} />
      <Route path="/voli" element={<Voli/>} />
      <Route path="/servizi" element={<Servizi/>} />
      <Route path="/testi-itinerari" element={<TestiItinerari/>} />
      <Route path="/destinazioni" element={<Destinazioni/>}/>
      </Route>
      <Route path="/auth" name="login" element={<AuthRoute/>} >
      <Route path="/auth/login" element={<Login/>} />
      <Route path="/auth/register" element={<Register/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
