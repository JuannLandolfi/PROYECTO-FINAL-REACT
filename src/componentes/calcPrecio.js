import datos from './datos.json';

export const calcularPrecioBicicleta = (marca, tipo, rodado) => {
    // Implementa la lógica de cálculo según tus necesidades
    // Puedes utilizar datos.json para obtener factores de cálculo
    // Retorna el precio calculado
    const bicicleta = datos.find(item => item.categoria === 'bicicleta' && item.tipo === tipo);
    const marcaFactor = datos.find(item => item.categoria === 'marca' && item.tipo === marca);

    if (bicicleta && marcaFactor) {
        const precioBase = 100; // Puedes establecer un precio base
        const precioFinal = precioBase * bicicleta.factor * marcaFactor.factor;
        return precioFinal.toFixed(2); // Redondea el precio a dos decimales
    }

    return 'Error en el cálculo';
};