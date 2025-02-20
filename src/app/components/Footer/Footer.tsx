import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: 'url("/footer.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* Sección 1: Texto de la empresa */}
        <div
          style={{
            flex: "1",
            minWidth: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              lineHeight: "1.5",
              margin: 0,
              fontFamily: "'Franklin Gothic', sans-serif",
            }}
          >
            Somos una empresa vallecaucana, fabricación de postes metálicos para
            iluminación y distribución eléctrica, estructuras solares.
          </p>
        </div>

        {/* Sección 2: Servicio */}
        <div
          style={{
            flex: "1",
            minWidth: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#E52521" }}>Servicio</h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <li>
              <Link
                href="/nosotros"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/proyectos"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/contactanos"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Sección 3: Información y Redes Sociales */}
        <div
          style={{
            flex: "1",
            minWidth: "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#E52521" }}>
            Información
          </h2>
          <p style={{ margin: "0 0 5px 0" }}>
            Cl. 3 #4, La Dolores, Cali, Palmira, Valle del Cauca.
          </p>
          <p style={{ margin: "0 0 5px 0" }}>+57 3016826125</p>
          <p style={{ margin: "0 0 20px 0" }}>
            dircomercial@ingaldeoccidente.com
          </p>

          <h3 style={{ marginBottom: "10px", color: "#E52521" }}>
            Redes Sociales
          </h3>
          <div style={{ display: "flex", gap: "10px" }}>
            {/* Facebook */}
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                color: "#fff",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              <i className="bi bi-facebook" style={{ fontSize: "1.2rem" }}></i>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                color: "#fff",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              <i className="bi bi-instagram" style={{ fontSize: "1.2rem" }}></i>
            </Link>

            {/* YouTube */}
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                color: "#fff",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              <i className="bi bi-youtube" style={{ fontSize: "1.2rem" }}></i>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                color: "#fff",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              <i className="bi bi-linkedin" style={{ fontSize: "1.2rem" }}></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr
        style={{
          border: "0.1px solid rgba(128, 128, 128, 0.5)",
          margin: "45px 0",
        }}
      />

      {/* Sección inferior: Copyright */}
      <div style={{ textAlign: "center", fontSize: "18px" }}>
        © 2025 Ingal de Occidente
      </div>
    </footer>
  );
}
