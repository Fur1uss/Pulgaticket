import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Manejo de rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Apps
import { HeaderApp } from "./apps/header/headerApp";
import { HeaderLowerPartApp } from "./apps/header/headerLowerPartApp";
import { FooterApp } from "./apps/footer/footerApp";

// Configuración de estilos principales
import "../src/styles/header/header.css";
import "../src/styles/header/headerLowerPart.css";
import "../src/styles/config/body.css";
import "../src/styles/main/main.css";
import "../src/styles/main/mainEvents.css";
import "../src/styles/footer/footer.css";
import "../src/styles/config/components-configs/logo.css";
import "../src/styles/config/components-configs/loginButton.css";
import "../src/styles/config/components-configs/itemEvent.css";
import "../src/styles/config/components-configs/footerItem.css"
import "../src/styles/config/components-configs/usernameButton.css";
import "../src/styles/about.css";
import "../src/styles/contact.css";
import "../src/styles/login.css";
import "../src/styles/register.css";
import "../src/styles/config/components-configs/newEventButton.css";

// Usuarios
import { UserProvider } from "./users/userContext";


// Páginas
import { MainApp } from "./apps/main/mainApp";
import { MainEventsApp } from "./apps/main/mainEventsApp";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UserProvider>
            <BrowserRouter>
                    <Routes>
                        {/* Ruta para Home */}
                        <Route path="/" element={
                            <>
                                <HeaderApp />
                                <HeaderLowerPartApp />
                                <MainApp />
                                <MainEventsApp />
                                <FooterApp />
                            </>
                        } />
                        
                        {/* Ruta para About */}
                        <Route path="/about" element={
                            <>
                                <HeaderApp />
                                <About />
                                <FooterApp />
                            </>
                        } />

                        {/* Ruta para Contact */}
                        <Route path="/contact" element={
                            <>
                                <HeaderApp />
                                <Contact />
                                <FooterApp />
                            </>
                        } />

                        {/* Ruta para el Login */}
                        <Route path="/login" element={
                            <>
                                <LoginPage />
                            </>
                        } />

                        {/* Ruta para el Register */}
                        <Route path="/register" element={
                            <>
                                <RegisterPage />
                            </>
                        } />
                    </Routes>
            </BrowserRouter>

        </UserProvider>

    </StrictMode>
);
