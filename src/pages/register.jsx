import React, { useState } from "react";
import { LogoComponent } from "../components/logoComponent";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useUser } from "../users/userContext"; // Importa el contexto de usuario

export const RegisterPage = () => {
    const [rut, setRut] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [successModal, setSuccessModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { login } = useUser(); // Accede a la función de login del contexto
    const validDomains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];

    const formatRUT = (value) => {
        let cleanValue = value.replace(/\./g, "").replace(/-/g, "").toUpperCase();
        if (!/^[0-9]*[0-9K]?$/i.test(cleanValue)) return;

        let rutFormatted = "";
        if (cleanValue.length > 1) {
            let body = cleanValue.slice(0, -1);
            let verifier = cleanValue.slice(-1);
            rutFormatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "-" + verifier;
        } else {
            rutFormatted = cleanValue;
        }

        setRut(rutFormatted);
    };

    const handleTelefonoChange = (e) => {
        const value = e.target.value;
        if (/^9[0-9]{0,8}$/.test(value)) {
            setTelefono(value);
        }
    };

    const isEmailValid = (email) => {
        const emailParts = email.split("@");
        if (emailParts.length !== 2) return false;

        const domain = emailParts[1];
        return validDomains.includes(domain);
    };

    const isPasswordValid = (password) => {
        return password.length >= 6; // Ajusta según tus requerimientos
    };

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword || !rut || !telefono || !userName) {
            setErrorMessage("Por favor, completa todos los campos.");
            return;
        }

        if (rut.replace(/\D/g, "").length < 8 || rut.replace(/\D/g, "").length > 10) {
            setErrorMessage("El RUT debe tener entre 8 y 10 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Las contraseñas no coinciden.");
            return;
        }

        if (!isEmailValid(email)) {
            setErrorMessage("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (!isPasswordValid(password)) {
            setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        const userQuery = query(collection(db, "Usuario"), where("userName", "==", userName));
        const querySnapshot = await getDocs(userQuery);
        if (!querySnapshot.empty) {
            setErrorMessage("El nombre de usuario ya existe.");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "Usuario"), {
                correoUser: email,
                passwordUser: password,
                rutUser: rut,
                telefonoUser: telefono,
                userName: userName,
            });
            
            // Guarda la información del usuario en localStorage
            const userData = {
                id: docRef.id,
                correoUser: email,
                userName: userName,
                rutUser: rut,
                telefonoUser: telefono,
            };

            localStorage.setItem("user", JSON.stringify(userData)); // Guarda en localStorage
            login(userData); // Llama a la función de login con el nuevo usuario

            setSuccessModal(true);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage("Error al registrar. Intente nuevamente.");
            console.error("Error adding document: ", error);
        }
    };

    const handleContinue = () => {
        setSuccessModal(false);
        navigate("/");
    };

    return (
        <div className="registerPage-container">
            <div className="registerContent-container">
                <div className="logoTextR-container">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Flogo.svg?alt=media&token=b485de5c-7327-43ef-b284-7790ba20c65e"
                        alt=""
                        className="logoPage"
                    />
                    <p className="mainText"> REGÍSTRATE <br /> CON <b className="p-b">NOSOTROS</b></p>
                    <div className="logoComponentContainer">
                        <LogoComponent />
                    </div>
                </div>

                <div className="registerContainer">
                    <div className="registerItem">
                        <div className="inputContainer">
                            <p>NOMBRE DE USUARIO</p>
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="inputText" />
                        </div>

                        <div className="inputContainer">
                            <p>EMAIL</p>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="inputText" />
                        </div>

                        <div className="inputContainer">
                            <p>RUT</p>
                            <input
                                type="text"
                                value={rut}
                                onChange={(e) => formatRUT(e.target.value)}
                                className="inputText"
                                maxLength="12"
                                required
                            />
                        </div>

                        <div className="inputContainer">
                            <p>TELEFONO</p>
                            <input
                                type="text"
                                value={telefono}
                                onChange={handleTelefonoChange}
                                className="inputText"
                                maxLength="9"
                                required
                            />
                        </div>

                        <div className="inputContainer">
                            <p>CONTRASEÑA</p>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputText" />
                        </div>

                        <div className="inputContainer">
                            <p>CONFIRMAR CONTRASEÑA</p>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="inputText" />
                        </div>

                        <button className="registerButtonInput" onClick={handleRegister}>Registrarse</button>

                        {errorMessage && <p className="error-message" role="alert">{errorMessage}</p>}
                    </div>
                </div>

                {successModal && (
                    <div className="modal-container" role="dialog" aria-labelledby="success-modal" aria-modal="true">
                        <div className="modal-content">
                            <h2 id="success-modal">Registro exitoso</h2>
                            <button onClick={handleContinue}>Continuar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
