import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Manejo de rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Apps
import { HeaderApp } from "./apps/header/headerApp";
import { HeaderLowerPartApp } from "./apps/header/headerLowerPartApp";
import { FooterApp } from "./apps/footer/footerApp";

// Configuración de estilos principales
import "./styles/header/header.css";
import "./styles/header/headerLowerPart.css";
import "./styles/config/body.css";
import "./styles/main/main.css";
import "./styles/main/mainEvents.css";
import "./styles/footer/footer.css";
import "./styles/config/components-configs/logo.css";
import "./styles/config/Components-configs/loginButton.css";
import "./styles/config/Components-configs/ItemEvent.css";
import "./styles/config/Components-configs/footerItem.css";
import "./styles/config/Components-configs/usernameButton.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/login.css";
import "./styles/register.css";
import "./styles/config/Components-configs/newEventButton.css";

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
