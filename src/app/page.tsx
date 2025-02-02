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
            margin: "100px auto 490px auto",
          }}
        >
          {/* Primera fila */}
          <div
            style={{
              padding: "10px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              SOLUCIONES INDIVIDUALES ZNI
            </p>

            <Image src="/isologo1.png" alt="Isologo" width={300} height={300} />
            <div
              style={{
                width: "75%",
                height: "7px",
                backgroundColor: "white",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "5px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <i
                  className="bi bi-database-fill"
                  style={{ fontSize: "32px", color: "#007bff" }}
                ></i>
                <p style={{ fontSize: "16px", marginTop: "2px" }}>METAL</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <i
                  className="bi bi-database-fill"
                  style={{ fontSize: "32px", color: "#007bff" }}
                ></i>
                <p style={{ fontSize: "16px", marginTop: "2px" }}>PRFV</p>
              </div>
            </div>
          </div>

          <div></div>
          <div
            style={{
              padding: "10px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              POSTES DE ILUMINACIÓN
            </p>

            <Image src="/isologo2.png" alt="Isologo" width={300} height={300} />
            <div
              style={{
                width: "75%",
                height: "7px",
                backgroundColor: "white",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "5px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <i
                  className="bi bi-database-fill"
                  style={{ fontSize: "32px", color: "#007bff" }}
                ></i>
                <p style={{ fontSize: "16px", marginTop: "2px" }}>METAL</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <i
                  className="bi bi-database-fill"
                  style={{ fontSize: "32px", color: "#007bff" }}
                ></i>
                <p style={{ fontSize: "16px", marginTop: "2px" }}>PRFV</p>
              </div>
            </div>
          </div>
          <div></div>
          <div
            style={{
              padding: "10px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              GRANJAS SOLARES
            </p>

            <Image src="/isologo3.png" alt="Isologo" width={300} height={300} />
            <div
              style={{
                width: "75%",
                height: "7px",
                backgroundColor: "white",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "5px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <i
                  className="bi bi-database-fill"
                  style={{ fontSize: "32px", color: "#007bff" }}
                ></i>
                <p style={{ fontSize: "16px", marginTop: "2px" }}>
                  METAL GALVANIZADO <br></br> EN CALIENTE
                </p>
              </div>
            </div>
          </div>

          {/* Segunda fila */}
          <div></div>
          <div
            style={{
              padding: "10px",
              textAlign: "center",
              borderRadius: "10px",
              marginTop: "130px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              ESTRUCTURA AGROFOTOVALTAICA
            </p>

            <Image src="/isologo4.png" alt="Isologo" width={300} height={300} />
            <div
              style={{
                width: "75%",
                height: "7px",
                backgroundColor: "white",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "5px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <i
                  className="bi bi-database-fill"
                  style={{ fontSize: "32px", color: "#007bff" }}
                ></i>
                <p style={{ fontSize: "16px", marginTop: "2px" }}>
                  METAL GALVANIZADO <br></br> EN CALIENTE
                </p>
              </div>
            </div>
          </div>
          <div></div>
          <div
            style={{
              padding: "10px",
              textAlign: "center",
              borderRadius: "10px",
              marginTop: "130px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              POSTES DE DISTRIBUCIÓN REDES ELÉCTRICAS
            </p>

            <Image src="/isologo5.png" alt="Isologo" width={300} height={300} />
            <div
              style={{
                width: "75%",
                height: "7px",
                backgroundColor: "white",
                margin: "10px auto",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "5px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <i
                  className="bi bi-database-fill"
                  style={{ fontSize: "32px", color: "#007bff" }}
                ></i>
                <p style={{ fontSize: "16px", marginTop: "2px" }}>METAL</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <i
                  className="bi bi-database-fill"
                  style={{ fontSize: "32px", color: "#007bff" }}
                ></i>
                <p style={{ fontSize: "16px", marginTop: "2px" }}>PRFV</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
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
                color: "red",
                marginBottom: "5px",
              }}
            >
              + 40.000
            </h2>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}>
              POSTE PANEL
            </h3>
          </div>

          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "red",
                marginBottom: "5px",
              }}
            >
              + 35.000
            </h2>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}>
              ALUMBRADO PÚBLICO
            </h3>
          </div>

          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "red",
                marginBottom: "5px",
              }}
            >
              + 9.000
            </h2>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}>
              DISTRIBUCIÓN
            </h3>
          </div>

          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "red",
                marginBottom: "5px",
              }}
            >
              + 5.000
            </h2>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}>
              POSTES FIBRA
            </h3>
          </div>

          <div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "red",
                marginBottom: "5px",
              }}
            >
              + 350.000
            </h2>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}>
              BRAZOS PARA LUMINARIA
            </h3>
          </div>
        </div>
      </div>

      <Ubicanos />
    </main>
  );
}
