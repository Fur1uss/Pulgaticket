import React from "react";

export const About = () => {
    return (
        <div className="aboutPage-container">
            <div className="aboutInfoContainer">
                <div className="infoTextContainer">
                    <div className="TextItems">
                        <h1>¿Quiénes somos?</h1>
                        <h2>Expertos en reventa, <br /> <b className="h2-b">Comprometidos</b> con tu <br /> seguridad</h2>
                        <p>Somos  <b className="p-b">Pulga</b>Ticket, somos un equipo apasionado por conectar a las personas con sus eventos favoritos <br /> a través de una plataforma de reventa de entradas segura y confiable, queremos<br /> transformar la manera  en que compras y vendes entradas, garantizando que cada transacción sea <br /> transparente, protegida y sin complicaciones.</p>
                    </div>

                </div>
                <div className="infoImageContainer">
                    <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fimg-01.png?alt=media&token=c2e8cd98-f9d2-445d-af8b-881c8ea84b7c" alt="" />
                </div>
            </div>
            <div className="aboutInfoContainer">
                <div className="infoImageContainer">
                    <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fimage-02.png?alt=media&token=aaa8b745-8c37-4210-9ae5-7904321f25e8" alt="" />
                </div>  
                <div className="infoTextContainer">
                    <div className="TextItems">
                        <h1>Nuestro Objetivo</h1>
                        <h2>Tu Puerta Segura a los <br /> Mejores Eventos.</h2>
                        <p>Nuestro objetivo es ofrecer una plataforma segura y sencilla para la reventa de entradas para eventos en vivo, conciertos, deportes y mucho mas. Sabemos lo importante que es disfrutar que es disfrutar de tus eventos favoritos sin preocupaciones, por eso nos comprometemos a garantizar una experiencia segura para todos nuestros usuarios. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="aboutInfoContainer">
                <div className="infoTextContainer">
                    <div className="TextItems">
                        <h1>Nuestra vision</h1>
                        <h2>Transformamos la reventa de <br /> entradas con seguridad y facilidad.</h2>
                        <p>Queremos ser la plataforma líder en reventa de entradas, conocida por nuestra integridad, seguridad y facilidad de uso. Buscamos innovar constantemente para mejorar nuestros servicios y manteneros a la vanguardia de la industria de eventos.</p>
                    </div>

                </div>
                <div className="infoImageContainer">
                    <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fimage-03.png?alt=media&token=4bd29435-3b95-4afe-a122-a7e811f2ddeb" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;
