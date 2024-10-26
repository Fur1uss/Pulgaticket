import React from "react";
import { motion } from "framer-motion";

import viewImg from "../../assets/comparar-img.svg";
import buyImg from "../../assets/comprar-img.svg";
import sellImg from "../../assets/vender-img.svg";

export const MainApp = () => {

  const items = [
    {
      img: viewImg,
      title: "COMPARA",
      description: "Revisa cientos de eventos y sus precios gracias a nuestro comparador de ofertas.",
    },
    {
      img: buyImg,
      title: "COMPRA",
      description: "Una vez que encontraste lo que necesitabas, selecciona el producto y compralo a nuestros vendedores. Totalmente seguro!.",
    },
    {
      img: sellImg,
      title: "VENDE",
      description: "Si tienes una entrada que no quieres o te sobra, pues vendelo aca!. La mejor plataforma de reventa y seguridad garantizada.",
    },

  ];

  return (
    <main>
        
      <div className="infoItems-container">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="infoItem"
            viewport={{ once: false }}
          >
            <img src={item.img} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </motion.div>
        ))}

      </div>
    </main>
  );
};
