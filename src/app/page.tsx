import Image from "next/image";
import styles from "./page.module.css";
import Ubicanos from "./components/Ubicanos/Ubicanos";

export default function Home() {
  return (
    <main>
      {/* Video */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <video
          src="/videos/presentacion.mp4" // Ruta del video en public/videos
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Texto alineado a la derecha */}
      <div
        style={{
          padding: "50px",
          textAlign: "right",
          background: "rgba(0, 0, 0, 0.7)",
          color: "white", // Asegura que el texto sea legible
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold", lineHeight: "1.2" }}>
          Fabricamos la mejor solución para su <br /> proyecto
        </h1>
      </div>

      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "50px",
            textAlign: "left",
          }}
        >
          CON PROYECTOS EN DIFERENTES ZONAS A NIVEL NACIONAL
        </h2>

        {/* Grilla de 2 filas x 5 columnas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)", // 5 columnas
            gridTemplateRows: "repeat(2, 150px)", // 2 filas con altura fija
            gap: "10px",
            margin: "0 auto",
          }}
        >
          {/* Primera fila */}
          <div style={{ background: "#ddd" }}>
            <Image src="/vercel.svg" alt="Proyecto" width={100} height={100} />
          </div>
          <div></div>
          <div style={{ background: "#ddd" }}>
            <Image src="/vercel.svg" alt="Proyecto" width={100} height={100} />
          </div>
          <div></div>
          <div style={{ background: "#ddd" }}>
            <Image src="/vercel.svg" alt="Proyecto" width={100} height={100} />
          </div>

          {/* Segunda fila */}
          <div></div>
          <div style={{ background: "#ddd" }}>
            <Image src="/vercel.svg" alt="Proyecto" width={100} height={100} />
          </div>
          <div></div>
          <div style={{ background: "#ddd" }}>
            <Image src="/vercel.svg" alt="Proyecto" width={100} height={100} />
          </div>
          <div></div>
        </div>
      </div>
      <div
        style={{
          background: "white",
          borderRadius: "150px",
          padding: "30px 50px",
          margin: "50px auto", // Centra y separa de los extremos
          maxWidth: "90%", // Evita que llegue a los extremos de la pantalla
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Agrega un leve sombreado
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", // Ubica los números a la izquierda, centro y derecha
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "48px", fontWeight: "bold", color: "red" }}>
            40,000+
          </h2>
          <h2 style={{ fontSize: "48px", fontWeight: "bold", color: "red" }}>
            35,000+
          </h2>
          <h2 style={{ fontSize: "48px", fontWeight: "bold", color: "red" }}>
            9,000+
          </h2>
        </div>
      </div>
      <Ubicanos />
    </main>
  );
}
