import React from "react";

export const Contact = () => {
    return (
        <>
            <div className="bottomHeaderContact">
                <div className="contactTextHeader">
                    <p>Contactanos</p>
                    <p>Podemos Ayudarte</p>
                </div>

                <div className="contactImageHeader">
                    <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Flogo.svg?alt=media&token=b485de5c-7327-43ef-b284-7790ba20c65e" alt="" />
                </div>
            </div>
            
            <div className="subtitleInfo">
                <p>Elige un tema</p>
                <h2>Selecciona el tema que mejor describa tu problema, luego completa un formulario con los detalles especificos.</h2>
            </div>

            <div className="contactButtonsContainer">

                <div className="buttonsItems">
                    <div className="contactButtonInfo">
                    
                        <div className="imgTitleInfoDivisor">
                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fitem-img-top-01.png?alt=media&token=c80c6b1a-d7ab-4aed-bed6-4729fc013cf2" alt="" />
                            <p> Problemas con el acceso a tu cuenta</p>
                        </div>

                        <div className="descriptionInfoDivisor">
                            <p>Obtén ayuda para iniciar sesión en PulgaTicket o cambiar alguna información.</p>
                        </div>
                    </div>
                    <div className="contactButtonInfo">
                    
                        <div className="imgTitleInfoDivisor">
                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fitem-img-top-02.png?alt=media&token=ad816908-5355-4d30-a3ab-2a35d16024f0" alt="" />
                            <p>Quejas O Reclamos</p>
                        </div>
                        <div className="descriptionInfoDivisor">
                            <p>Exprésanos tu malestar o algún otro tipo de queja.</p>
                        </div>
                    </div>
                    <div className="contactButtonInfo">
                    
                        <div className="imgTitleInfoDivisor">
                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fitem-img-top-03.png?alt=media&token=a38cdf2a-caf9-470d-b767-b0fa22ca57ee" alt="" />
                            <p>Asistencia en la Reventa de Entradas </p>
                        </div>
                        <div className="descriptionInfoDivisor">
                            <p>Necesitas ayuda para revender tus entradas.</p>
                        </div>
                    </div>
                </div> 

                <div className="buttonsItems">
                    <div className="contactButtonInfo">
                    
                        <div className="imgTitleInfoDivisor">
                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fitem-img-top-04.png?alt=media&token=c949f9cf-c93a-4c52-80c5-397aa632f16a" alt="" />
                            <p>Verificación de Entradas</p>
                        </div>

                        <div className="descriptionInfoDivisor">
                            <p>Para consultas sobre la autenticidad o validación de entradas compradas.</p>
                        </div>
                    </div>
                    <div className="contactButtonInfo">
                    
                        <div className="imgTitleInfoDivisor">
                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fitem-img-top-05.png?alt=media&token=0421b2dd-4a4f-435a-884d-354370e3a4c7" alt="" />
                            <p>Información sobre Políticas</p>
                        </div>
                        <div className="descriptionInfoDivisor">
                            <p>Para consultas sobre las políticas de la plataforma, como términos de servicio o privacidad.</p>
                        </div>
                    </div>
                    <div className="contactButtonInfo">
                    
                        <div className="imgTitleInfoDivisor">
                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fitem-img-top-06.png?alt=media&token=926a1afc-f97a-4efa-83ed-21c86520350d" alt="" />
                            <p>Cambios en el Evento</p>
                        </div>
                        <div className="descriptionInfoDivisor">
                            <p>Para consultas relacionadas con cambios de fecha, hora o lugar de un evento.</p>
                        </div>
                    </div>
                </div> 



            </div>
        </>

        
    );
}

export default Contact;