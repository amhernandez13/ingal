"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contactanos() {
  const whatsappNumber = "573016826125";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20más%20información`;

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "450px",
        maxWidth: "1400px",
        margin: "40px auto",
        gap: "20px",
        backgroundColor: "#211e55",
      }}
    >
      {/* Imagen a la izquierda */}
      <div style={{ flexShrink: 0 }}>
        <Image
          src="/contactanos.png"
          alt="Contáctanos"
          width={1080}
          height={795}
          style={{
            objectFit: "contain",
            height: "450px",
            width: "auto",
            paddingTop: "20px",
          }}
        />
      </div>

      {/* Texto y logo de WhatsApp a la derecha */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginRight: "50px",
        }}
      >
        <h4 style={{ margin: 0, fontSize: "40px", color: "#fff" }}>
          ¡Contáctate con nosotros!
        </h4>
        <Link
          href={whatsappUrl}
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#25d366",
            borderRadius: "50%",
            width: "115px",
            height: "115px",
            transition: "background-color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#21be5c")
          }
          onMouseOut={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor = "#25d366")
          }
        >
          <i
            className="bi bi-whatsapp"
            style={{ color: "#fff", fontSize: "4.5rem" }}
          ></i>
        </Link>
      </div>
    </section>
  );
}
