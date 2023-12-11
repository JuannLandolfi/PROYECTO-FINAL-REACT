import { Link } from 'react-router-dom';
import './historial.css'

import React from 'react';



const Historial = ({ cotizaciones }) =>  {



    return(
        <div className="center div-historial">
        <table>
            <thead>
                <tr>
                    <th>Fecha de cotización</th>
                    <th>Tipo de Bicicleta</th>
                    <th>Marca Deseada</th>
                    <th>Tipo de Rodado</th>
                    <th>Póliza mensual</th>
                </tr>
            </thead>
            <tbody>
                {cotizaciones.map((cotizacion, index) => (
                <tr key={index}>
                <td>{cotizacion.fecha}</td>
                <td>{cotizacion.tipoBicicleta}</td>
                <td>{cotizacion.marcaDeseada}</td>
                <td>{cotizacion.tipoRodado}</td>
                <td>${cotizacion.precioEstimado}</td>
                </tr>
                ))}
            </tbody>
        </table>
        <div className="center separador">
            <Link to="/"><button className="button button-outline">Volver al Inicio</button></Link>
        </div>
    </div>
    )
}



export default Historial;

