import Image from "next/image";
import styles from "./estructuras-solares.module.css";

export default function EstructurasSolares() {
  return (
    <main>
      {/* Espacio para el header */}
      <div className={styles.headerPlaceholder}></div>

      {/* Banner con imagen de fondo y título */}
      <div className={styles.bannerContainer}>
        <Image
          src="/estructuras-solares.jpg"
          alt="Imagen de Estructuras Solares"
          fill
          className={styles.bannerImage}
        />
        <h1 className={styles.title}>GRANJAS SOLARES</h1>
      </div>

      {/* Sección de contenido */}
      <section className={styles.whiteSection}>
        {/* Primer bloque */}
        <h2 className={styles.sectionTitle}>
          Diseño modular y adaptable a cualquier terreno
        </h2>
        <p className={styles.paragraph}>
          Nuestras estructuras metálicas para paneles solares ofrecen una
          solución versátil para proyectos de generación de energía a gran
          escala. Con un diseño optimizado y fabricadas en acero galvanizado en
          caliente, garantizan durabilidad, resistencia y eficiencia en
          instalación.
        </p>

        <p className={styles.paragraph}>
          Tres Opciones de Cimentación para Diferentes Condiciones de Terreno
        </p>

        {/* Video */}
        <div className={styles.videoContainer}>
          <video
            src="/videos/estructuras-solares.mp4"
            controls
            loop
            playsInline
            className={styles.video}
          />
        </div>

        {/* Estructura Hincada */}
        <div className={styles.subsection}>
          <h3>Estructura Hincada – Instalación rápida y costo eficiente</h3>
          <ul className={styles.list}>
            <li>
              Sin necesidad de concreto: Reducción de costos y tiempos de obra.
            </li>
            <li>
              Montaje rápido y seguro: Componentes preperforados para una
              instalación eficiente.
            </li>
            <li>
              Adaptabilidad a terrenos naturales: Ideal para suelos con buena
              capacidad de carga.
            </li>
            <li>
              Bajo impacto ambiental: Minimiza alteraciones en el terreno.
            </li>
          </ul>
          <p className={styles.application}>
            🔹 Aplicación: Proyectos en suelos compactos y con buenas
            condiciones mecánicas.
          </p>
        </div>

        {/* Estructura Micropilotada */}
        <div className={styles.subsection}>
          <h3>
            Estructura Micropilotada – Estabilidad superior en terrenos
            desafiantes
          </h3>
          <ul className={styles.list}>
            <li>
              Mayor resistencia en suelos complejos: Mejora la capacidad de
              carga con micropilotes.
            </li>
            <li>
              Protección estructural prolongada: El hormigón envuelve la base y
              protege el acero en terrenos agresivos con condiciones
              fisicoquímicas adversas como pH ácido, cloruros o sulfatos.
            </li>
            <li>
              Mayor rapidez respecto a la estructura flanchada a cimentación
              especializada: No requiere acero de refuerzo, ya que el perfil se
              embebe directamente en el micropilote fundido.
            </li>
          </ul>
          <p className={styles.application}>
            🔹 Aplicación: Suelos con baja resistencia donde no se pueden hincar
            directamente o con propiedades fisicoquímicas agresivas.
          </p>
        </div>

        {/* Estructura Flanchada */}
        <div className={styles.subsection}>
          <h3>Estructura Flanchada – Robustez y máxima estabilidad</h3>
          <ul className={styles.list}>
            <li>
              Anclaje con pernos embebidos en zapatas de hormigón: Mayor solidez
              estructural.
            </li>
            <li>
              Ideal para suelos de baja compactación o con normativas estrictas
              de cimentación.
            </li>
            <li>
              Construcción de zapatas y pedestales: Fácil alineación y ajuste de
              estructura en obra.
            </li>
            <li>
              Versatilidad en terrenos irregulares: Permite elevar o nivelar la
              columna en zonas con alta rugosidad, pendiente o cercanas a ríos y
              otras áreas de riesgo.
            </li>
          </ul>
          <p className={styles.application}>
            🔹 Aplicación: Proyectos que requieren cimentación en concreto por
            las condiciones del suelo o proyectos pequeños donde se puede
            realizar cimentación tradicional.
          </p>
        </div>

        <div className={styles.subsection}>
          <h2 className={styles.sectionTitle}>
            ¿Por qué elegir nuestras estructuras solares tipo granja?
          </h2>

          <ul className={styles.list}>
            <li>
              Diseño modular y escalable: Permite configurar las mesas según las
              necesidades del proyecto.
            </li>
            <li>
              Cumplimiento normativo: Diseñadas bajo las regulaciones
              estructurales y de resistencia al viento.
            </li>
            <li>
              Compatibilidad universal: Aptas para distintos tipos y tamaños de
              paneles fotovoltaicos.
            </li>
            <li>
              Instalación eficiente: Componentes preensamblados que reducen
              tiempos y costos de montaje.
            </li>
          </ul>

          <p className={styles.contact}>
            Contáctanos y optimiza tu parque solar con la mejor tecnología en
            estructuras metálicas.
          </p>
        </div>

        {/* Imagen Final */}
        <div className={styles.imageContainer}>
          <Image
            src="/estructuras-solares-2.jpg"
            alt="Estructuras Solares Adicional"
            width={1200}
            height={800}
            className={styles.finalImage}
          />
        </div>
      </section>
    </main>
  );
}
