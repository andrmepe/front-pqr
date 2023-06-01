import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pqrs from "./pages/Pqrs";
import Solicitudes from "./pages/Solicitudes";
import Home from "./pages/Home";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>{

  const [isAllowed, setIsAllowed] = useState(false)
  const [id_numero, setId_numero] = useState('')
  const [tipo_id, setTipo_id] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [celular, setCelular] = useState('')
  const [telefono_fijo, setTelefono_fijo] = useState('')
  const [correo, setCorreo] = useState('')
  const [titulo_pqr, setTitulo_pqr] = useState('')
  const [tipo_ticket, setTipo_ticket] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [estado, setEstado] = useState('')
  
const handleId_numero = (e)=>{
  setId_numero(e.target.value)
}
const handleTipo_id = (e)=>{
  setTipo_id(e.target.value)
}
const handleNombre = (e)=>{
    setNombre(e.target.value)
}
const handleApellido = (e)=>{
    setApellido(e.target.value)
}
const handleCelular = (e)=>{
  setCelular(e.target.value)
}
const handleTelefono_fijo = (e)=>{
  setTelefono_fijo(e.target.value)
}
const handleCorreo = (e)=>{
  setCorreo(e.target.value)
}
const handleTitulo_pqr = (e)=>{
    setTitulo_pqr(e.target.value)
}
const handleTipo_ticket = (e)=>{
  setTipo_ticket(e.target.value)
}
const handleDescripcion = (e)=>{
  setDescripcion(e.target.value)
}
const handleEstado = (e)=>{
  setEstado(e.target.value)
}
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/pqrs" element = {<Pqrs/>} />
          <Route path="/solicitudes" element = {<Solicitudes
          id_numero={id_numero} 
          setId_numero={setId_numero} 
          tipo_id={tipo_id} 
          setTipo_id={setTipo_id} 
          nombre={nombre} 
          setNombre={setNombre} 
          apellido={apellido} 
          setApellido={setApellido} 
          celular={celular} 
          setCelular={setCelular}
          telefono_fijo={telefono_fijo}
          setTelefono_fijo={setTelefono_fijo}
          correo={correo}
          setCorreo={setCorreo}
          titulo_pqr={titulo_pqr}
          setTitulo_pqr={setTitulo_pqr}
          tipo_ticket={tipo_ticket}
          setTipo_ticket={setTipo_ticket}
          descripcion={descripcion}
          setDescripcion={setDescripcion}
          estado={estado}
          setEstado={setEstado} 
          handleId_numero={handleId_numero} 
          handleTipo_id={handleTipo_id} 
          handleNombre={handleNombre} 
          handleApellido={handleApellido} 
          handleCelular={handleCelular} 
          handleTelefono_fijo={handleTelefono_fijo} 
          handleCorreo={handleCorreo} 
          handleTitulo_pqr={handleTitulo_pqr}
          handleTipo_ticket={handleTipo_ticket}
          handleDescripcion={handleDescripcion} 
          handleEstado={handleEstado}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
