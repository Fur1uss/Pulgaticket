import React from 'react';
import manImg from "../../assets/manposing.png";
import { Link } from 'react-router-dom';
import NewEventButtonComponent from '../../components/newEventButtonComponent';
import { useUser } from '../../users/userContext';

export const HeaderLowerPartApp = () => {
    const { user } = useUser();

    return (
        <div className='headerLP-container'>
            <div className='divisor01'>
                <img src={manImg} alt="hombre posando feliz" />
            </div>

            <div className='divisor02'>
                <p> NECESITAS <b>COMPRAR</b> <br/> O <b>VENDER</b> ENTRADAS?</p>
                <h2>Hazlo aquí! <br /> Fácil y seguro</h2>
                {user ? (
                    <NewEventButtonComponent />
                ) : (
                    <button><Link to="/register">Regístrate</Link></button>
                )}
            </div>
        </div>
    );
}
