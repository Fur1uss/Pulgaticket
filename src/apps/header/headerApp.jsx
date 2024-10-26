import React from 'react';
import { LogoComponent } from '../../components/logoComponent';
import { LoginButtonComponent } from '../../components/loginButtonComponent';
import { UsernameButtonComponent } from '../../components/usernameButtonComponent';
import { useUser } from '../../users/userContext';
import { Link, Outlet } from 'react-router-dom';

export const HeaderApp = () => {
    const { user } = useUser(); //

    return (  
        <header>
            <LogoComponent/>

            <div className='interactiveMenuContainer'>
                <ul className='navegationMenu'>
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/about">SOBRE NOSOTROS</Link></li>
                    <li><Link to="/contact">CONTACTO</Link></li>
                </ul>
                {user ? (
                    <UsernameButtonComponent/>
                ) : (
                    <LoginButtonComponent/>
                )}
            </div>

            <Outlet />
        </header>
    );
}
