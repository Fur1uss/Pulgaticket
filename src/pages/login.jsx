import React, { useState } from "react";
import { LogoComponent } from "../components/logoComponent";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useUser } from "../users/userContext"; // Asegúrate de la ruta correcta

export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { login } = useUser(); // Obtiene la función login del contexto

    const handleLogin = async (e) => {
        e.preventDefault();

        // Validación de campos vacíos
        if (!username || !password) {
            setErrorMessage("⚠️Por favor, completa todos los campos.");
            return;
        }

        try {
            const userRef = collection(db, "Usuario");
            const usernameQuery = query(userRef, where("userName", "==", username));
            const usernameSnapshot = await getDocs(usernameQuery);

            if (usernameSnapshot.empty) {
                // Usuario no existe
                setErrorMessage("⚠️Nombre de usuario incorrecto.");
                console.log("Nombre de usuario incorrecto.");
            } else {
                // Usuario existe, verificar la contraseña
                let isPasswordCorrect = false;
                let loggedInUser = null; // Almacena el usuario logueado

                usernameSnapshot.forEach((doc) => {
                    const userData = doc.data();
                    console.log("Datos del usuario encontrado:", userData);

                    // Verificar la contraseña
                    if (userData.passwordUser === password) {
                        isPasswordCorrect = true;
                        loggedInUser = { userName: userData.userName, passwordUser: userData.passwordUser }; // Almacena los datos del usuario
                    }
                });

                if (isPasswordCorrect) {
                    // Contraseña correcta, guardar en localStorage
                    localStorage.setItem("user", JSON.stringify(loggedInUser));

                    // Contraseña correcta, redirigir al home
                    console.log("Inicio de sesión exitoso");
                    login(loggedInUser); // Llama a login con el usuario
                    navigate("/"); // Redirige al home
                } else {
                    // Contraseña incorrecta
                    setErrorMessage("⚠️Contraseña incorrecta.");
                    console.log("Contraseña incorrecta.");
                }
            }
        } catch (error) {
            console.error("Error al iniciar sesión: ", error);
            setErrorMessage("Ocurrió un error al iniciar sesión.");
        }
    };

    return (
        <div className="loginPageContainer">
            <div className="content-container">
                <div className="logoText-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Flogo.svg?alt=media&token=b485de5c-7327-43ef-b284-7790ba20c65e" alt="" className="logoPage" />
                    <p className="mainText"> INGRESA TUS <br /> <b className="p-b">DATOS</b></p>
                    <div className="logoComponentContainer">
                        <LogoComponent />
                    </div>
                </div>
                <div className="loginContainer">
                    <div className="loginItem">
                        <div className="inputContainer">
                            <p>NOMBRE DE USUARIO</p>
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                className="inputText" 
                            />
                        </div>

                        <div className="inputContainer">
                            <p>CONTRASEÑA</p>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>

                        {errorMessage && <p className="errorMessage">{errorMessage}</p>}

                        <p className="p-separator">O</p>

                        <div className="RRSS-login-buttons-container">
                            <button className="RRSS-button">
                                <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2FRRSS-01-img.svg?alt=media&token=b01abac1-f1d6-4454-be8b-efa0194201cb" alt="" />
                            </button>
                            <button className="RRSS-button">
                                <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2FRRSS-02-img.svg?alt=media&token=20a625fa-407b-45f4-a739-f4ac8a28332b" alt="" />
                            </button>
                            <button className="RRSS-button">
                                <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2FRRSS-03-img.svg?alt=media&token=236ea62a-17d6-418e-841c-f2f8974db0e9" alt="" />
                            </button>
                        </div>

                        <button className="loginButtonInput" onClick={handleLogin}>Iniciar sesión</button>

                        <p><Link to="" className="forgotPassword">Olvidé mi contraseña</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
