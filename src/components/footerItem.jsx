import React from "react";
import { LogoComponent } from "../components/logoComponent";
import { Link } from "react-router-dom";

export const FooterItem = () => {
    return (
        <div className="footer-item">
            <LogoComponent />
            <div className="footerInfo-container">
                <div className="footerInfo-nav">
                    <div className="footerNav">
                        <p><Link to="/">Inicio</Link></p>
                        <p><Link to="/about">Sobre nosotros</Link></p>
                        <p><Link to="/contact">Contacto</Link></p>
                    </div>
                </div>
                <div className="footerText-container">
                    <p>Pulgaticket es una plataforma confiable y segura dedicada a la reventa de entradas para cualquier tipo de evento. Ya sea conciertos, deportes, teatro o festivales, conectamos a vendedores y compradores garantizando una transacción rápida, sencilla y segura. Nuestro objetivo es ofrecer una experiencia transparente y sin complicaciones, brindando a los usuarios la oportunidad de acceder a entradas agotadas o revender sus boletos de manera segura.</p>
                </div>
            </div>
            <div className="footerContact-container">
                
                <div className="footerContactItem">
                    <div className="footerContactItemHolder">
                        <div className="footerContactItemIcon">
                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fphone-footer-img.svg?alt=media&token=d6a8f46d-bec7-4cbf-ac6e-ce12c747be54" alt="" />
                        </div>
                        <div className="footerContactItemText">
                            <p>809-000-0000</p>
                        </div>
                    </div>
                </div>

                <div className="footerContactItem">
                    <div className="footerContactItemHolder">
                        <div className="footerContactItemIcon">
                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fmail-footer-img.svg?alt=media&token=3e1ae3db-75c9-4512-8f0f-d58c17bfae25" alt="" />
                        </div>
                        <div className="footerContactItemText">
                            <p>contacto@pulgaticket.cl</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}
