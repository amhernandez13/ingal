"use client";

//import styles from "./page.module.css";
import Ubicanos from "./components/Ubicanos/Ubicanos";
import OurProjects from "./components/ProyectosNacionales/ProyectosNacionales";
import Contactanos from "./components/Contactanos/Contactanos";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
            height: "100%",
            objectFit: "cover",
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
          color: "white",
          backgroundImage: "url('/background-footer-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "41px", fontWeight: "bold", lineHeight: "1.2" }}>
          Fabricamos la mejor solución para su <br /> proyecto
        </h1>
      </div>

      <OurProjects />

      {/* Sección de números animados */}
      <div
        ref={ref}
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
              {inView ? (
                <CountUp start={0} end={40000} duration={2.5} prefix="+" />
              ) : (
                "+0"
              )}
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
              {inView ? (
                <CountUp start={0} end={35000} duration={2.5} prefix="+" />
              ) : (
                "+0"
              )}
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
              {inView ? (
                <CountUp start={0} end={9000} duration={2.5} prefix="+" />
              ) : (
                "+0"
              )}
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
              {inView ? (
                <CountUp start={0} end={5000} duration={2.5} prefix="+" />
              ) : (
                "+0"
              )}
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
              {inView ? (
                <CountUp start={0} end={350000} duration={2.5} prefix="+" />
              ) : (
                "+0"
              )}
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
      <Contactanos />
    </main>
  );
}
