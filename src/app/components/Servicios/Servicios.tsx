"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Servicios.module.css";

export default function Servicios() {
  return (
    <section className={styles.serviciosSection}>
      <div className={styles.serviciosHeader}>
        <h2 className={styles.serviciosTitle}>
          Nuestros productos y servicios
        </h2>
        <p className={styles.serviciosDescription}>
          Ofrecemos soluciones integrales, proporcionando productos de alta
          calidad como estructuras para paneles solares, postes de fibra de
          vidrio y metálicos, herrajes eléctricos, brazos para luminaria y
          galvanizado por inmersión en caliente, garantizando durabilidad,
          resistencia y eficiencia.
        </p>
      </div>

      <div className={styles.serviciosGrid}>
        {/* Estructuras Solares */}
        <Link
          href="/productos/estructuras-solares"
          className={styles.serviceLink}
        >
          <div className={styles.serviceItem}>
            <Image
              src="/servicios/estructuras-solares.png"
              alt="Estructuras Solares"
              width={1419}
              height={712}
            />
            <h4>Estructuras Solares</h4>
          </div>
        </Link>

        {/* Postes Metálicos */}
        <Link href="/productos/postes-metalicos" className={styles.serviceLink}>
          <div className={styles.serviceItem}>
            <Image
              src="/servicios/postes-metalicos.png"
              alt="Postes Metálicos"
              width={593}
              height={1182}
            />
            <h4>Postes Metálicos</h4>
          </div>
        </Link>

        {/* Postes en PRFV */}
        <Link href="/productos/postes-prfv" className={styles.serviceLink}>
          <div className={styles.serviceItem}>
            <Image
              src="/servicios/postes-prfv.png"
              alt="Postes en PRFV"
              width={247}
              height={1182}
            />
            <h4>Postes en PRFV</h4>
          </div>
        </Link>

        {/* Galvanizado en Caliente */}
        <Link
          href="/productos/galvanizado-en-caliente"
          className={styles.serviceLink}
        >
          <div className={styles.serviceItem}>
            <Image
              src="/servicios/galvanizado-en-caliente.png"
              alt="Galvanizado en Caliente"
              width={1182}
              height={828}
            />
            <h4>Galvanizado en Caliente</h4>
          </div>
        </Link>

        {/* Brazos para Iluminación */}
        <Link
          href="/productos/brazos-para-iluminacion"
          className={styles.serviceLink}
        >
          <div className={styles.serviceItem}>
            <Image
              src="/servicios/brazos-para-iluminacion.png"
              alt="Brazos para Iluminación"
              width={6940}
              height={5238}
            />
            <h4>Brazos para Iluminación</h4>
          </div>
        </Link>

        {/* Herrajes Eléctricos */}
        <Link
          href="/productos/herrajes-electricos"
          className={styles.serviceLink}
        >
          <div className={styles.serviceItem}>
            <Image
              src="/servicios/herrajes-electricos.jpg"
              alt="Herrajes Eléctricos"
              width={992}
              height={650}
            />
            <h4>Herrajes Eléctricos</h4>
          </div>
        </Link>
      </div>
    </section>
  );
}
