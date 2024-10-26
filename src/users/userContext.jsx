import React, { createContext, useContext, useState } from "react";

// Crea el contexto
export const UserContext = createContext(); // Exporta el contexto

// Proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Almacena la información del usuario

    const login = (userData) => {
        setUser(userData); // Establece el usuario cuando inicia sesión
    };

    const logout = () => {
        setUser(null); // Limpia el usuario al cerrar sesión
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar el contexto
export const useUser = () => {
    return useContext(UserContext);
};
