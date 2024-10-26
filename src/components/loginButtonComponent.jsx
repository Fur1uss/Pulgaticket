import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../users/userContext";

export const LoginButtonComponent = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="loginButton-container">
            {user ? ( // Si hay un usuario actual, muestra su nombre
                <span className="userGreeting">Hola, {user.userName}</span>
            ) : (
                <button className="loginButton">
                    <Link to="/login">Iniciar Sesión</Link>
                </button>
            )}
        </div>
    );
};
