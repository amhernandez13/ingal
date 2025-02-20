"use client";

import React from "react";
import Link from "next/link";

export default function WhatsAppButton() {
  const whatsappNumber = "573016826125";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20más%20información`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#25d366",
        borderRadius: "50%",
        width: "90px",
        height: "90px",
        transition: "background-color 0.3s",
        textDecoration: "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
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
        style={{ color: "#fff", fontSize: "3.5rem" }}
      ></i>
    </Link>
  );
}
