// APIs/ticketmasterService.js

export const getEventsInChile = async () => {
    const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY; // Accede a la clave de API desde el archivo .env
    
    // URL de la API de Ticketmaster para obtener eventos en Chile
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=zLQsEqesvhsGyK8tAQpC6eMC060au3A0&locale=es&city=Santiago&countryCode=CL`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Verifica el contenido completo de la respuesta
        console.log("Respuesta completa de Ticketmaster:", data);

        // Verifica si la respuesta contiene los eventos y sus datos
        if (data._embedded && data._embedded.events) {
            // Imprime la lista de eventos en consola para ver cómo están estructurados
            console.log("Eventos disponibles:", data._embedded.events);

            return data._embedded.events.map(event => ({
                name: event.name,
                date: event.dates.start.localDate,
                location: event._embedded.venues[0].city.name,
            }));
        } else {
            console.error("No se encontraron eventos en la respuesta.");
            return [];
        }
    } catch (error) {
        console.error("Error al obtener eventos de Ticketmaster:", error);
        throw new Error("No se pudo obtener eventos.");
    }
};
