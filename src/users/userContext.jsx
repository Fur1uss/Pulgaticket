import React, { createContext, useContext, useState, useEffect } from "react";

// Crea el contexto
export const UserContext = createContext(); // Exporta el contexto

// Proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Intenta cargar el usuario del localStorage
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null; // Si hay un usuario guardado, lo carga
    });

    const login = (userData) => {
        setUser(userData); // Establece el usuario cuando inicia sesión
        localStorage.setItem("user", JSON.stringify(userData)); // Guarda el usuario en localStorage
    };

    const logout = () => {
        setUser(null); // Limpia el usuario al cerrar sesión
        localStorage.removeItem("user"); // Elimina el usuario del localStorage
    };

    useEffect(() => {
        // Limpieza opcional al desmontar el componente
        return () => {
            setUser(null);
        };
    }, []);

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
