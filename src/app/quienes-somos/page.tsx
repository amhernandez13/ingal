"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "./quienes-somos.module.css";

export default function QuienesSomos() {
  // Configuramos el hook para detectar cuando el contenedor de cuadrados entra en vista
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <main>
      {/* Espacio para el header */}
      <div className={styles.headerPlaceholder}></div>

      {/* Banner con imagen y título */}
      <div className={styles.bannerContainer}>
        <Image
          src="/quienes-somos-banner.jpg" // Asegúrate de tener la imagen en public/
          alt="Imagen de Quienes Somos"
          fill
          className={styles.bannerImage}
        />
        <h1 className={styles.title}>
          INGENIERÍA EN GALVANIZADO DE OCCIDENTE SAS
        </h1>
      </div>

      {/* Sección de fondo blanco */}
      <div className={styles.whiteSection}>
        <p className={styles.description}>
          Empresa vallecaucana, fundada el 20 de octubre de 2016, durante sus
          primeros años, se enfocó en la fabricación de postes metálicos para
          iluminación y distribución eléctrica, atendiendo las crecientes
          necesidades del sector de la construcción e infraestructura. Impulsada
          por un crecimiento constante y la impecable calidad de sus productos,
          la empresa comenzó a fabricar postes en fibra de vidrio, aprovechando
          los beneficios de este material, como su resistencia a la corrosión y
          su ligereza, esta diversificación permitió a la empresa ampliar su
          línea de negocio con el galvanizado en Caliente. Con más de ocho años
          en el mercado, esta empresa ha forjado una sólida trayectoria,
          posicionándose por su enfoque en la calidad de los productos y la
          satisfacción del cliente, manteniendo una amplia experiencia.
        </p>

        {/* Contenedor de cuadrados animados */}
        <div
          ref={ref}
          className={`${styles.squaresContainer} ${
            inView ? styles.animate : ""
          }`}
        >
          {/* Cuadrado Misión */}
          <div className={`${styles.square} ${styles.mission}`}>
            <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>Misión</h2>
            <i className="bi bi-flag" style={{ fontSize: "2.5rem" }}></i>
          </div>

          {/* Cuadrado Visión */}
          <div className={`${styles.square} ${styles.vision}`}>
            <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>Visión</h2>
            <i className="bi bi-eye" style={{ fontSize: "2.5rem" }}></i>
          </div>
        </div>
      </div>
    </main>
  );
}
