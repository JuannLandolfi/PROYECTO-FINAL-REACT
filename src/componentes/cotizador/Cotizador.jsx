    import './cotizador.css'
    import React, { useState } from 'react';
    import datos from '../datos.json';
    import { toast } from 'react-toastify';





    const Cotizador = ({setCotizaciones}) => {

        const [marca, setMarca] = useState('');
        const [tipo, setTipo] = useState('');
        const [rodado, setRodado] = useState('');
        const [precioEstimado, setPrecioEstimado] = useState(0);
        const [nuevaCotizacion, setNuevaCotizacion] = useState(null); // Declaración de nuevaCotizacion

        const bicicletas = datos.filter(item => item.categoria === 'bicicleta');
        const marcas = datos.filter(item => item.categoria === 'marca');
        const rodados = datos.filter(item => item.categoria === 'rodado');

        const handleNotification = () => {
            toast.success("¡Cotización realizada con éxito!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        };


        const handleSubmit = (event) => {
            event.preventDefault(); 

            // Validar que se hayan seleccionado las opciones
    if (!tipo || !marca || !rodado) {
        // Mostrar algún mensaje de error o manejar de otra manera
        console.error("Debe seleccionar todas las opciones antes de cotizar.");
        return;
    }


        // Obtener los factores según la selección
        const bicicletaFactor = bicicletas.find(item => item.tipo === tipo)?.factor || 1;
        const marcaFactor = marcas.find(item => item.tipo === marca)?.factor || 1;
        const rodadoFactor = rodados.find(item => item.tipo === rodado)?.factor || 1;

        // Calcular el precio estimado
        const precioBase = 200.000; // precio base
        const precioFinal = precioBase * bicicletaFactor * marcaFactor * rodadoFactor; //precio final

        //objeto que representa una nueva cotizacion
        const nuevaCotizacion = {
            fecha: new Date().toLocaleDateString(),
            tipoBicicleta: tipo,
            marcaDeseada: marca,                        
            tipoRodado: rodado,
            precioEstimado: precioFinal.toFixed(3),
        };

        // Actualizar el estado del precio estimado
        setPrecioEstimado(precioFinal);


        // Agregar la nueva cotización al historial (estado global)
        setCotizaciones((prevCotizaciones) => [...prevCotizaciones, nuevaCotizacion]);

        // Limpiar el formulario
        setMarca('');
        setTipo('');
        setRodado('');

        // Mostrar notificación
        handleNotification();
        };

        return(

            <div className="div-cotizador">
                <h2 className="titulo-secundario">Completá los datos solicitados</h2>

                <label htmlFor="tipoBicicleta">Selecciona el tipo de Bicicleta:</label>
                <select 
                id="tipoBicicleta"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)} required>
                    <option value="" disabled>...</option>
                    {bicicletas.map((bicicleta, index) => (
                        <option key={`tipo-${bicicleta.tipo}-${index}`} value={bicicleta.tipo}>
                            {bicicleta.tipo}
                        </option>
                    ))};
                </select>
                <label htmlFor="marcaDeseada">Selecciona la Marca deseada:</label>
                <select 
                id="marcaDeseada"
                value={marca}
                onChange={(e) => setMarca(e.target.value)} required>
                    <option value="" disabled>...</option>
                    {marcas.map((marca, index) => (
                        <option key={`tipo-${marca.tipo}-${index}`} value={marca.tipo}>
                            {marca.tipo}
                        </option>
                    ))};
                </select>
                <label htmlFor="tipoRodado">Selecciona el tipo de rodado:</label>
                <select 
                id="tipoRodado"
                value={rodado}
                onChange={(e) => setRodado(e.target.value)} required>
                    <option value="" disabled>...</option>
                    {rodados.map((rodado, index) => (
                        <option key={`tipo-${rodado.tipo}-${index}`} value={rodado.tipo}>
                            {rodado.tipo}
                        </option>
                    ))};
                    </select>
                            <div className="center separador">
                <button className="button button-outline" onClick={handleSubmit}>Cotizar</button>
            </div>
            <div className="center separador">
                <p className="tituloPrecio">Precio estimado  : $<span id="valorPoliza">{precioEstimado.toFixed(3)}</span>
                <button className="botonHistorial"
                title="Guardar en historial"
                onClick={() => {
                if(nuevaCotizacion){
                    setCotizaciones([...cotizaciones, nuevaCotizacion]);
                    setNuevaCotizacion(null);
                } else {
                    // Mostrar algún mensaje de error o manejar de otra manera
                console.error("No hay una nueva cotización para guardar.");
                }
                }
            }
            >
                💾</button></p>
            </div>
            </div>
        )
    };

    export default Cotizador;