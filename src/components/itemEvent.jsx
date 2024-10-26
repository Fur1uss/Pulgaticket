import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { div, img } from "framer-motion/client";

export const ItemEvent = () => {
    const [eventos, setEventos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Para el índice actual
    const [loadingImages, setLoadingImages] = useState({}); // Para controlar la carga de imágenes

    useEffect(() => {
        const fetchEventos = async () => {
            const eventsCollection = collection(db, "Evento");
            try {
                const answer = await getDocs(eventsCollection);
                const eventosList = answer.docs.map((doc) => {
                    const {
                        ubicacionEvento,
                        fechaEvento,
                        linkImg,
                        nombreEvento,
                        vendedorUser,
                    } = doc.data();

                    return {
                        id: doc.id,
                        ubicacionEvento,
                        fechaEvento,
                        linkImg,
                        nombreEvento,
                        vendedorUser,
                    };
                });

                setEventos(eventosList);
            } catch (error) {
                console.error("Error al obtener los eventos: ", error);
            }
        };

        fetchEventos();
    }, []);

    const nextEvents = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventos.length);
    };

    const prevEvents = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + eventos.length) % eventos.length);
    };

    const displayedEvents = [...eventos, ...eventos, ...eventos].slice(currentIndex, currentIndex + 3); // Repetir eventos

    const handleImageLoad = (id) => {
        setLoadingImages((prev) => ({ ...prev, [id]: false }));
    };

    return (
        <div className="carousel-container" style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={prevEvents} className="leftButton">
                <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fleft-btn.svg?alt=media&token=35aa1b5b-b3e7-41ad-960c-b2329b1d4f60" alt="" />
            </button>
            <div className="event-cards" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                {displayedEvents.map((evento) => {
                    const fechaEvento = evento.fechaEvento.toDate();
                    const fechaFormateada = fechaEvento.toLocaleDateString();
                    const horaFormateada = fechaEvento.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

                    return (
                        <div className="itemEvent-itemList" key={evento.id} style={{ margin: '0 10px', textAlign: 'center' }}>
                            <div className="ItemEvent-container">
                                {/* Mostrar "Cargando imagen..." mientras la imagen está cargando */}
                                {loadingImages[evento.id] !== false && <p>Cargando imagen...</p>}
                                <img
                                    src={evento.linkImg}
                                    alt={evento.nombreEvento}
                                    onLoad={() => handleImageLoad(evento.id)}
                                    style={{ display: loadingImages[evento.id] === false ? 'flex' : 'none', width: '100%', height: 'auto',border: "none" }} // Ocultar hasta que esté cargada
                                />

                                <div className="data-container">
                                    <div className="information-container">
                                        <div className="itemEvent-Location">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fevent-icon.svg?alt=media&token=3f7d0e4d-49eb-4bb8-b1e6-cd33f570b093" alt="" />
                                            <p className="locationText">{evento.ubicacionEvento}</p>
                                        </div>
                                        <div className="date-time-container">
                                            <p className="dateText">{fechaFormateada}</p>
                                            <p className="timeText">{horaFormateada}hrs</p>
                                        </div>
                                        <p className="sellerText">Vendedor: {evento.vendedorUser}</p>
                                    </div>

                                    <div className="buy-container">
                                        <button>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fbuy-icon.svg?alt=media&token=d30206e7-ea04-4b82-a155-98d2265319fa" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button onClick={nextEvents} className="rightButton">
                <img src="https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Fright-btn.svg?alt=media&token=17ab30d0-c00a-417d-9aff-c8e3993f90aa" alt="" />
            </button>
        </div>
    );
};
