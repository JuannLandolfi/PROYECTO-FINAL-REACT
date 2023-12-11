import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';
import Nav from "./componentes/nav/Nav";
import Cotizador from "./componentes/cotizador/Cotizador";
import Formulario from "./componentes/formulario/Formulario";
import Historial from "./componentes/historial/Historial";

function App() {

  const [cotizaciones, setCotizaciones] = useState([]);

  return (
    <Router>
      <div>
      <Nav />
      <br />
      <Routes>
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/historial" element={<Historial cotizaciones={cotizaciones} />} />
        <Route path="/" element={<Cotizador setCotizaciones={setCotizaciones} />} />
      </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
