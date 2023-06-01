import Button from '@mui/material/Button';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Alert } from '@mui/material';
import anaranjado from '../assets/anaranjado.jpg'


const Solicitudes = ({
    id_numero, 
    setId_numero, 
    tipo_id, 
    setTipo_id, 
    nombre, 
    setNombre,
    apellido, 
    setApellido,
    celular, 
    setCelular,
    telefono_fijo, 
    setTelefono_fijo,
    correo, 
    setCorreo,
    titulo_pqr, 
    setTitulo_pqr,
    tipo_ticket, 
    setTipo_ticket,
    descripcion, 
    setDescripcion,
    estado, 
    setEstado, 
    handleId_numero, 
    handleTipo_id, 
    handleNombre,
    handleApellido,
    handleCelular,
    handleTelefono_fijo,
    handleCorreo,
    handleTitulo_pqr, 
    handleTipo_ticket, 
    handleDescripcion,
    handleEstado
    }) => {

    const [showAlertSucces, setShowAlertSucces] = useState(false)
    const [showAlertFiels, setShowAlertFiels] = useState(false)
    const [showForm, setShowForm] = useState(true)
    
     const timeShowAlertSucces = ()=>{
        setTimeout(()=>{
            setShowAlertSucces(false)
            setShowForm(true)
        }, 1000)
    }
    
    const timeShowAlertFiels = ()=>{
        setTimeout(()=>{
            setShowAlertFiels(false)
        }, 1000)
    }
    
    /* console.log(id_numero, tipo_id, nombre, apellido, celular, 
      telefono_fijo, correo, titulo_pqr, tipo_ticket, descripcion, estado) */

    const handleSubmit =(e)=>{
        e.preventDefault()
         if(id_numero === '' || tipo_id === '' || nombre === '' || apellido === '' || correo === '' 
         || titulo_pqr === '' || tipo_ticket === '' || descripcion === '' || estado === ''){
            setShowAlertFiels(true)
            timeShowAlertFiels()
            console.log('entro if')
        } else {
            console.log('entro else')
            axios.post('http://localhost:3001/Solicitudes/createRequest', {
              id_numero: id_numero,
              tipo_id: tipo_id,
              nombre: nombre,
              apellido: apellido,
              correo: correo,
              titulo_pqr: titulo_pqr,
              tipo_ticket: tipo_ticket,
              descripcion: descripcion,
              estado: estado
            }).then ((res)=>{
                setId_numero('')
                setTipo_id('')
                setNombre('')
                setApellido('')
                setCorreo('')
                setTitulo_pqr('')
                setTipo_ticket('')
                setDescripcion('')
                setEstado('')
                setShowAlertSucces(true)
                setShowForm(false)
                timeShowAlertSucces()

                /* clearFiels() */
            })
        }
    }
  /*   console.log(id_numero, tipo_id, nombre, apellido, celular, 
      telefono_fijo, correo, titulo_pqr, tipo_ticket, descripcion, estado) */

    return (
        <div  container width='100%' style={{backgroundImage: `url(${anaranjado})`}}>
            
            <h3>Llena los siguientes campos para realizar tu PQR</h3>    
            {
                showAlertSucces && <Alert severity="success">sent succesfully</Alert>
            }
            {
                showAlertFiels && <Alert severity="error">you must complete all the fiels</Alert>
            }
            <div>
            
            {   showForm &&
                <div>
                
            <form onSubmit={handleSubmit}
                style={{backgroundColor:'white', margin:'2rem', borderRadius:'5px'}}
                noValidate
                autoComplete="off"
                >
                <TextField id="id_numero" label="id_numero" onChange={handleId_numero} variant="filled" />
                <TextField id="tipo_id" label="tipo_id" onChange={handleTipo_id} variant="filled" />
                <TextField id="nombre" label="nombre" onChange={handleNombre} variant="filled" />
                <TextField id="apellido" label="apellido" onChange={handleApellido} variant="filled" />
                <TextField id="celular" label="celular" onChange={handleCelular} variant="filled" />
                <TextField id="telefono_fijo" label="telefono_fijo" onChange={handleTelefono_fijo} variant="filled" />
                <TextField id="correo" label="correo" onChange={handleCorreo} variant="filled" />
                <TextField id="titulo_pqr" label="titulo_pqr" onChange={handleTitulo_pqr} variant="filled" />
                <TextField id="tipo_ticket" label="tipo_ticket" onChange={handleTipo_ticket} variant="filled" />
                <TextField id="estado" label="estado" onChange={handleEstado}  variant="filled" />
                <TextField id="descripcion" label="descripcion" onChange={handleDescripcion} 
                multiline
                rows={4}
                defaultValue=""
                variant="filled"/>
                <Button type='submit' onClick={(e)=>{handleSubmit(e)}} value={'Send'} style={{background:'black', color:'white'}}> Enviar</Button>
            </form>
            </div>
            }
            <div>
                </div>
                </div>      
      </div>
      
    )
}

export default Solicitudes