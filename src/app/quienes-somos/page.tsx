"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "./quienes-somos.module.css";

export default function QuienesSomos() {
  // Para animar la entrada de las tarjetas
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Estados para el flip de las tarjetas
  const [isMissionFlipped, setIsMissionFlipped] = useState(false);
  const [isVisionFlipped, setIsVisionFlipped] = useState(false);

  // Hook para detectar cuando el contenedor del video entra en vista
  const { ref: videoObserverRef, inView: videoInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Referencia tipada del video
  const videoElementRef = useRef<HTMLVideoElement | null>(null);

  // Controla si se muestra el overlay para iniciar el video manualmente
  const [showVideoPlayOverlay, setShowVideoPlayOverlay] = useState(false);

  // Intento de reproducción automática cuando el video está en vista
  useEffect(() => {
    if (videoInView && videoElementRef.current) {
      const playPromise = videoElementRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error: unknown) => {
          console.log("Auto-play prevented:", error);
          setShowVideoPlayOverlay(true);
        });
      }
    }
  }, [videoInView]);

  // Handler para el botón que inicia el video manualmente
  const handlePlayVideo = () => {
    if (videoElementRef.current) {
      videoElementRef.current.muted = false;
      videoElementRef.current
        .play()
        .then(() => setShowVideoPlayOverlay(false))
        .catch((error: unknown) => {
          console.log("Error al iniciar el video:", error);
        });
    }
  };

  return (
    <main>
      {/* Espacio para el header */}
      <div className={styles.headerPlaceholder}></div>

      {/* Banner con imagen y título */}
      <div className={styles.bannerContainer}>
        <Image
          src="/quienes-somos-banner.jpg"
          alt="Imagen de Quienes Somos"
          fill
          className={styles.bannerImage}
        />
        <h1 className={styles.title}>
          INGENIERÍA EN GALVANIZADOS DE OCCIDENTE SAS
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

        {/* Contenedor de tarjetas con animación de entrada y efecto flip */}
        <div
          ref={ref}
          className={`${styles.cardsContainer} ${inView ? styles.animate : ""}`}
        >
          {/* Tarjeta Misión */}
          <div
            className={`${styles.card} ${styles.missionCard} ${
              isMissionFlipped ? styles.flipped : ""
            }`}
            onClick={() => setIsMissionFlipped((prev) => !prev)}
          >
            <div className={styles.cardInner}>
              {/* Lado frontal */}
              <div className={styles.cardFaceFront}>
                <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>
                  Misión
                </h2>
                <i className="bi bi-flag" style={{ fontSize: "2.5rem" }}></i>
              </div>
              {/* Lado trasero */}
              <div className={styles.cardFaceBack}>
                <p>
                  Empresa vallecaucana especializada en la fabricación y
                  comercialización de postes metálicos, en poliéster reforzado
                  con fibra de vidrio y elementos para alumbrado púbico.
                  Acompañados de un excelente talento humano, maquinaria y
                  materia prima, que garantizan a los clientes excelente calidad
                  de los productos y cumplimiento en las entregas. Generamos
                  oportunidades de crecimiento a nuestros colaboradores,
                  proveedores y clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta Visión */}
          <div
            className={`${styles.card} ${styles.visionCard} ${
              isVisionFlipped ? styles.flipped : ""
            }`}
            onClick={() => setIsVisionFlipped((prev) => !prev)}
          >
            <div className={styles.cardInner}>
              {/* Lado frontal */}
              <div className={styles.cardFaceFront}>
                <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>
                  Visión
                </h2>
                <i className="bi bi-eye" style={{ fontSize: "2.5rem" }}></i>
              </div>
              {/* Lado trasero */}
              <div className={styles.cardFaceBack}>
                <p>
                  Al 2025 habernos posicionado dentro de las empresas líderes en
                  el sector eléctrico, ofreciendo productos de calidad a precios
                  competitivos en el mercado nacional e internacional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección del video */}
        <div
          ref={videoObserverRef}
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            height: "590px",
            marginTop: "40px",
          }}
        >
          <video
            ref={videoElementRef}
            src="/videos/quienes-somos.mp4"
            controls
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {showVideoPlayOverlay && (
            <button
              onClick={handlePlayVideo}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Reproducir video
            </button>
          )}
        </div>

        {/* NUESTROS VALORES */}
        <h2 className={styles.valuesTitle}>NUESTROS VALORES</h2>
        <div className={styles.valuesContainer}>
          <div className={styles.valueItem}>
            <Image
              src="/quienes-somos-1.JPG"
              alt="Compromiso"
              fill
              className={styles.valueImage}
            />
            <span className={styles.valueText}>COMPROMISO</span>
          </div>

          <div className={styles.valueItem}>
            <Image
              src="/quienes-somos-2.jpg"
              alt="Trabajo en equipo"
              fill
              className={styles.valueImage}
            />
            <span className={styles.valueText}>TRABAJO EN EQUIPO</span>
          </div>

          <div className={styles.valueItem}>
            <Image
              src="/quienes-somos-3.jpg"
              alt="Eficiencia"
              fill
              className={styles.valueImage}
            />
            <span className={styles.valueText}>EFICIENCIA</span>
          </div>
        </div>
      </div>
    </main>
  );
}
