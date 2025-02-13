import Image from "next/image";
import styles from "./page.module.css";
import Ubicanos from "./components/Ubicanos/Ubicanos";
import OurProjects from "./components/ProyectosNacionales/ProyectosNacionales";

export default function Home() {
  return (
    <main>
      {/* Video */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          height: "590px",
        }}
      >
        <video
          src="/videos/presentacion.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%", // Mantiene el alto fijo del contenedor
            objectFit: "cover", // Recorta el video para ajustarse al contenedor
            display: "block",
          }}
        />
      </div>

      {/* Texto alineado a la derecha */}
      <div
        style={{
          padding: "50px",
          textAlign: "right",
          background: "rgba(0, 0, 0, 0.7)", // Capa oscura semitransparente
          color: "white",
          backgroundImage: "url('/background-footer-2.jpg')", // Ruta de la imagen
          backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor
          backgroundPosition: "top", // Muestra la parte superior de la imagen
          backgroundRepeat: "no-repeat", // Evita que la imagen se repita
          width: "100%", // Ocupa todo el ancho de la pantalla
        }}
      >
        <h1 style={{ fontSize: "41px", fontWeight: "bold", lineHeight: "1.2" }}>
          Fabricamos la mejor solución para su <br /> proyecto
        </h1>
      </div>
      <OurProjects />
      <div
        style={{
          background: "white",
          borderRadius: "150px",
          padding: "30px 50px",
          margin: "50px auto",
          maxWidth: "90%",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "10px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#E52521",
                marginBottom: "5px",
              }}
            >
              + 40.000
            </h2>
            <h3
              style={{ fontSize: "20px", fontWeight: "bold", color: "#232856" }}
            >
              POSTE PANEL
            </h3>
          </div>

          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#E52521",
                marginBottom: "5px",
              }}
            >
              + 35.000
            </h2>
            <h3
              style={{ fontSize: "20px", fontWeight: "bold", color: "#232856" }}
            >
              ALUMBRADO PÚBLICO
            </h3>
          </div>

          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#E52521",
                marginBottom: "5px",
              }}
            >
              + 9.000
            </h2>
            <h3
              style={{ fontSize: "20px", fontWeight: "bold", color: "#232856" }}
            >
              DISTRIBUCIÓN
            </h3>
          </div>

          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#E52521",
                marginBottom: "5px",
              }}
            >
              + 5.000
            </h2>
            <h3
              style={{ fontSize: "20px", fontWeight: "bold", color: "#232856" }}
            >
              POSTES FIBRA
            </h3>
          </div>

          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#E52521",
                marginBottom: "5px",
              }}
            >
              + 350.000
            </h2>
            <h3
              style={{ fontSize: "20px", fontWeight: "bold", color: "#232856" }}
            >
              BRAZOS PARA LUMINARIA
            </h3>
          </div>
        </div>
      </div>

      <Ubicanos />
    </main>
  );
}
