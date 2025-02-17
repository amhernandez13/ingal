"use client";

import React from "react";
import Image from "next/image";

export default function Servicios() {
  return (
    <section style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "45px", marginBottom: "20px" }}>
        Nuestros servicios
      </h2>
      <p
        style={{
          maxWidth: "1000px",
          margin: "0 auto 60px auto", // mayor separación del contenido inferior
          fontSize: "20px",
          lineHeight: "1.5",
        }}
      >
        Ofrecemos soluciones integrales, proporcionando productos de alta
        calidad como estructuras para paneles solares, postes de fibra de vidrio
        y metálicos, herrajes eléctricos y brazos mecánicos, garantizando
        durabilidad, resistencia y eficiencia.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <div style={{ padding: "20px 0" }}>
          <Image
            src="/servicios/estructuras-solares.png"
            alt="Estructuras Solares"
            width={1419}
            height={712}
            style={{ width: "auto", height: "250px" }}
          />
          <h4 style={{ fontSize: "24px", color: "#E52521", marginTop: "20px" }}>
            Estructuras Solares
          </h4>
        </div>

        <div style={{ padding: "20px 0" }}>
          <Image
            src="/servicios/postes-metalicos.png"
            alt="Postes Metálicos"
            width={593}
            height={1182}
            style={{ width: "auto", height: "250px" }}
          />
          <h4 style={{ fontSize: "24px", color: "#E52521", marginTop: "20px" }}>
            Postes Metálicos
          </h4>
        </div>

        <div style={{ padding: "20px 0" }}>
          <Image
            src="/servicios/postes-prfv.png"
            alt="Postes en PRFV"
            width={247}
            height={1182}
            style={{ width: "auto", height: "250px" }}
          />
          <h4 style={{ fontSize: "24px", color: "#E52521", marginTop: "20px" }}>
            Postes en PRFV
          </h4>
        </div>

        <div style={{ padding: "20px 0" }}>
          <Image
            src="/servicios/galvanizado-en-caliente.png"
            alt="Galvanizado en Caliente"
            width={1182}
            height={828}
            style={{ width: "auto", height: "250px" }}
          />
          <h4 style={{ fontSize: "24px", color: "#E52521", marginTop: "20px" }}>
            Galvanizado en Caliente
          </h4>
        </div>

        <div style={{ padding: "20px 0" }}>
          <Image
            src="/servicios/brazos-para-iluminacion.png"
            alt="Brazos para Iluminación"
            width={6940}
            height={5238}
            style={{ width: "auto", height: "250px" }}
          />
          <h4 style={{ fontSize: "24px", color: "#E52521", marginTop: "20px" }}>
            Brazos para Iluminación
          </h4>
        </div>

        <div style={{ padding: "20px 0" }}>
          <Image
            src="/servicios/herrajes-electricos.jpg"
            alt="Herrajes Eléctricos"
            width={992}
            height={650}
            style={{ width: "auto", height: "250px" }}
          />
          <h4 style={{ fontSize: "24px", color: "#E52521", marginTop: "20px" }}>
            Herrajes Eléctricos
          </h4>
        </div>
      </div>
    </section>
  );
}
