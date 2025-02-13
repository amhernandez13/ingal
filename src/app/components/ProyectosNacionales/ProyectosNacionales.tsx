import React from "react";
import Image from "next/image";
import styles from "./ProyectosNacionales.module.css";

const ProyectosNacionales = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <h2 className={styles.title}>
        CON PROYECTOS EN DIFERENTES ZONAS A NIVEL NACIONAL
      </h2>

      <div className={styles.gridContainer}>
        {/* Fila 1, Col 1 */}
        <div className={styles.card}>
          <p className={styles.cardTitle}>SOLUCIONES INDIVIDUALES ZNI</p>
          <div className={styles.imageWrapper}>
            <Image
              src="/isologo1.png"
              alt="Isologo"
              fill
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.iconContainer}>
            <div className={styles.iconItem}>
              <i className={`bi bi-database-fill ${styles.icon}`}></i>
              <p className={styles.iconText}>METAL</p>
            </div>
            <div className={styles.iconItem}>
              <i className={`bi bi-database-fill ${styles.icon}`}></i>
              <p className={styles.iconText}>PRFV</p>
            </div>
          </div>
        </div>

        {/* Fila 1, Col 2 => espacio vacío para la diagonal */}
        <div></div>

        {/* Fila 1, Col 3 */}
        <div className={styles.card}>
          <p className={styles.cardTitle}>POSTES DE ILUMINACIÓN</p>
          <div className={styles.imageWrapper}>
            <Image
              src="/isologo2.png"
              alt="Isologo"
              fill
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.iconContainer}>
            <div className={styles.iconItem}>
              <i className={`bi bi-database-fill ${styles.icon}`}></i>
              <p className={styles.iconText}>METAL</p>
            </div>
            <div className={styles.iconItem}>
              <i className={`bi bi-database-fill ${styles.icon}`}></i>
              <p className={styles.iconText}>PRFV</p>
            </div>
          </div>
        </div>

        {/* Fila 1, Col 4 => espacio vacío para la diagonal */}
        <div></div>

        {/* Fila 1, Col 5 */}
        <div className={styles.card}>
          <p className={styles.cardTitle}>GRANJAS SOLARES</p>
          <div className={styles.imageWrapper}>
            <Image
              src="/isologo3.png"
              alt="Isologo"
              fill
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.iconContainer}>
            <div className={styles.iconItem}>
              <i className={`bi bi-database-fill ${styles.icon}`}></i>
              <p className={styles.iconText}>
                METAL GALVANIZADO <br /> EN CALIENTE
              </p>
            </div>
          </div>
        </div>

        {/* Fila 2, Col 1 => espacio vacío para la diagonal */}
        <div></div>

        {/* Fila 2, Col 2 */}
        <div className={styles.card}>
          <p className={styles.cardTitle}>
            ESTRUCTURA AGROFOTO-
            <br />
            VOLTAICA
          </p>
          <div className={styles.imageWrapper}>
            <Image
              src="/isologo4.png"
              alt="Isologo"
              fill
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.iconContainer}>
            <div className={styles.iconItem}>
              <i className={`bi bi-database-fill ${styles.icon}`}></i>
              <p className={styles.iconText}>
                METAL GALVANIZADO <br /> EN CALIENTE
              </p>
            </div>
          </div>
        </div>

        {/* Fila 2, Col 3 => espacio vacío para la diagonal */}
        <div></div>

        {/* Fila 2, Col 4 */}
        <div className={styles.card}>
          <p className={styles.cardTitle}>
            POSTES DE DISTRIBUCIÓN REDES ELÉCTRICAS
          </p>
          <div className={styles.imageWrapper}>
            <Image
              src="/isologo5.png"
              alt="Isologo"
              fill
              className={styles.responsiveImage}
            />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.iconContainer}>
            <div className={styles.iconItem}>
              <i className={`bi bi-database-fill ${styles.icon}`}></i>
              <p className={styles.iconText}>METAL</p>
            </div>
            <div className={styles.iconItem}>
              <i className={`bi bi-database-fill ${styles.icon}`}></i>
              <p className={styles.iconText}>PRFV</p>
            </div>
          </div>
        </div>

        {/* Fila 2, Col 5 => espacio vacío para la diagonal */}
        <div></div>
      </div>
    </div>
  );
};

export default ProyectosNacionales;
