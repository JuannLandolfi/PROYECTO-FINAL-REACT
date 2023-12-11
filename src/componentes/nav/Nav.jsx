import './nav.css'
import { Link } from 'react-router-dom';




const Nav = () => {

    return(
        <div className='nav'>
        <h1 className='titulo-principal'>¡Cotizador para Bicicletas!</h1>
        <div className='div-form-hist'>
            <Link to="/formulario">
                <button className='tituloLink' title='Entrar al formulario'>Regístrate 📝</button>
            </Link>
            <Link to="/historial">
                <button className='tituloLink' title='Entrar al historial'>Historial 🧾</button>
            </Link>
        </div>
        </div>
    )
}

export default Nav;