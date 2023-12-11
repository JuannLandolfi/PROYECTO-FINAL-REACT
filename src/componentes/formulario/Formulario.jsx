import './formulario.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; 

const Formulario = ({navigate}) => {
 // Estados para almacenar los valores de los inputs
  const [datosUsuario, setDatosUsuario] = useState({
  nombre: '',
  apellido: '',
  numeroDocumento: '',
  correoElectronico: '',
  fechaNacimiento: '0000-00-00',
  enviarRegistro: 'Registrarme',
});

  const { nombre, apellido, numeroDocumento, correoElectronico, fechaNacimiento, enviarRegistro } = datosUsuario;

  useEffect(() => {
    const datosLocalStorage = JSON.parse(localStorage.getItem('datosUsuario'));
  // Si hay datos en localStorage, establece el estado con esos datos
  if (datosLocalStorage) {
    setDatosUsuario(datosLocalStorage);
  }
}, []); // Se ejecuta una vez al cargar el componente


  const handleSubmit = (event) => {           //Esto evita que el formulario se envíe automáticamente cuando se presiona el botón "Registrarme".
  event.preventDefault(); 

  console.log('Datos del Usuario:', datosUsuario);

  mostrarNotificacion();   //llama a esta funcion para mostrar la notificacion de exito.

   // Limpiar los campos del formulario después del envío
    setDatosUsuario({
    nombre: '',
    apellido: '',
    numeroDocumento: '',
    correoElectronico: '',
    fechaNacimiento: '2000-01-01',
    enviarRegistro: 'Registrarme',
  });

  navigate('/historial');
};


  const handleChange = (e) => {
  const { name, value } = e.target;

  setDatosUsuario((prevDatos) => {
    const nuevosDatos = {
      ...prevDatos,
      [name]: value,
    };

    guardarDatosEnLocalStorage(nuevosDatos);

    return nuevosDatos;
  });
};


const handleFechaNacimientoChange = (e) => {
  const { value } = e.target;

  setDatosUsuario((prevDatos) => {
    const nuevosDatos = {
      ...prevDatos,
      fechaNacimiento: value,
    };

    guardarDatosEnLocalStorage(nuevosDatos);

    return nuevosDatos;
  });
};


  const guardarDatosEnLocalStorage = (datos) => {
  // Convierte los datos a formato JSON y los guarda en localStorage
  localStorage.setItem('datosUsuario', JSON.stringify(datos));
};

const mostrarNotificacion = () => {
  toast.success('¡Te has registrado con exito!', {
    position: 'top-center',  //posicion de la notificacion
    autoClose: 6000, // Duración en milisegundos
    hideProgressBar: false, //muestra la duracion en milisegundos
    closeOnClick: true,  //se cierra si hago click en la notificacion
    pauseOnHover: true, //se pausa la duracion en milisegundos para que la puedan observar a su tiempo
    draggable: false,  //para que no puedan arrastrar la configuracion de la notificacion
  });
};




return (
    <div className="div-contenedor">
    <h2 className="tituloFormulario">¡A completar el Formulario con tus datos!</h2>
    <form className="form-contenedor" onSubmit={handleSubmit}>
        <input
        className="input-css"
        type="text"
        placeholder="Nombre"
        name='nombre'
        value={nombre}
        onChange={handleChange}
        required
        />
        <input
        className="input-css"
        type="text"
        placeholder= "Apellido"
        name= "apellido"
        value={apellido}
        onChange={handleChange}
        required
        />
        <input
        className="input-css"
        type="text"
        placeholder="N° de Documento"
        name= "numeroDocumento"
        value={numeroDocumento}
        onChange={handleChange}
        required
        />
        <input
        className="input-css"
        type="email"
        placeholder="Correo Electronico"
        name= "correoElectronico"
        value={correoElectronico}
        onChange={handleChange}
        required
        />
        <h3 className='fechaNacimiento'>Fecha de nacimiento:</h3>
        <input
        className="inputFecha"
        type="date"
        value={fechaNacimiento}
        onChange={handleFechaNacimientoChange}
        max="2005-12-10"
        required
        />
        <input
        className="input-css" id="enviarFormulario" 
        name='enviarRegistro'
        type="submit" 
        value={enviarRegistro} 
        required
        />
        <Link to="/"><button className="button button-outline">Volver al Inicio</button></Link>
    </form>
    </div>
);
};


export default Formulario;

