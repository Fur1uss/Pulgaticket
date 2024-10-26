import React from "react";
import { useUser } from "../users/userContext";
import { Link } from "react-router-dom";

export const UsernameButtonComponent = () => {
    const { user, logout } = useUser();

    return (
        <div className="usernameButton-container">
            {user ? (
                <button className="usernameButton" onClick={logout}>
                    {user.userName}
                </button>
            ) : (
                <button className="loginButton">
                    <Link to="/login">Iniciar Sesión</Link>
                </button>
            )}
        </div>
    );
};
