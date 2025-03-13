"use client";

import Ubicanos from "./components/Ubicanos/Ubicanos";
import OurProjects from "./components/ProyectosNacionales/ProyectosNacionales";
import Servicios from "./components/Servicios/Servicios";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.css";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <main>
      {/* Video */}
      <div className={styles.videoContainer}>
        <video
          src="/videos/presentacion.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoElement}
        />
      </div>

      {/* Texto alineado a la derecha */}
      <div className={styles.textoDerecha}>
        <h1 className={styles.tituloDerecha}>
          Fabricamos la mejor solución para su <br /> proyecto
        </h1>
      </div>

      <OurProjects />

      {/* Sección de números animados */}
      <h2 className={styles.cifrasTitulo}>Ingal en cifras</h2>

      <div ref={ref} className={styles.cifrasContainer}>
        <div className={styles.cifrasGrid}>
          {/* Item 1 */}
          <div>
            <h2 className={styles.cifraNumero}>
              {inView ? (
                <CountUp
                  start={0}
                  end={40000}
                  duration={2.5}
                  prefix="+"
                  separator="."
                />
              ) : (
                "+0"
              )}
            </h2>
            <h3 className={styles.cifraTexto}>POSTE PANEL</h3>
          </div>

          {/* Item 2 */}
          <div>
            <h2 className={styles.cifraNumero}>
              {inView ? (
                <CountUp
                  start={0}
                  end={35000}
                  duration={2.5}
                  prefix="+"
                  separator="."
                />
              ) : (
                "+0"
              )}
            </h2>
            <h3 className={styles.cifraTexto}>ALUMBRADO PÚBLICO</h3>
          </div>

          {/* Item 3 */}
          <div>
            <h2 className={styles.cifraNumero}>
              {inView ? (
                <CountUp
                  start={0}
                  end={9000}
                  duration={2.5}
                  prefix="+"
                  separator="."
                />
              ) : (
                "+0"
              )}
            </h2>
            <h3 className={styles.cifraTexto}>DISTRIBUCIÓN</h3>
          </div>

          {/* Item 4 */}
          <div>
            <h2 className={styles.cifraNumero}>
              {inView ? (
                <CountUp
                  start={0}
                  end={5000}
                  duration={2.5}
                  prefix="+"
                  separator="."
                />
              ) : (
                "+0"
              )}
            </h2>
            <h3 className={styles.cifraTexto}>POSTES FIBRA</h3>
          </div>

          {/* Item 5 */}
          <div>
            <h2 className={styles.cifraNumero}>
              {inView ? (
                <CountUp
                  start={0}
                  end={350000}
                  duration={2.5}
                  prefix="+"
                  separator="."
                />
              ) : (
                "+0"
              )}
            </h2>
            <h3 className={styles.cifraTexto}>BRAZOS PARA LUMINARIA</h3>
          </div>
        </div>
      </div>

      <Servicios />
      <Ubicanos />
    </main>
  );
}
