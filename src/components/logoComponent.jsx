import React from "react";
import logoIMG from "../assets/logo.svg";

export const LogoComponent = () => {
    return (
        <div className="logo-container">
            <img src={logoIMG} alt="Logo" />
            <span className="logo-text">Pulga<b>ticket</b></span>
        </div>
    );
}
