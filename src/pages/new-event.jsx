import React, { useState, useEffect } from "react";
import { getEventsInChile } from "../APIs/ticketmasterService"; // Importa la función que llama a la API

export const NewEvent = () => {
    const [showEvents, setShowEvents] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventList = await getEventsInChile(); // Llamada a la API
                setEvents(eventList);
            } catch (error) {
                console.error("Error al cargar los eventos:", error);
            }
        };

        fetchEvents();
    }, []);

    const handleToggleEvents = () => {
        setShowEvents(!showEvents);
    };

    return (
        <div>
            <h1>Nuevo evento</h1>
            <button onClick={handleToggleEvents}>
                {showEvents ? "Ocultar eventos" : "Mostrar eventos"}
            </button>
            {showEvents && (
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>
                            <h3>{event.name}</h3>
                            <p>Fecha: {event.date}</p>
                            <p>Ubicación: {event.location}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
