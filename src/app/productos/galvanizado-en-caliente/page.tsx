import Image from "next/image";
import styles from "./galvanizado-en-caliente.module.css";

export default function PostesMetalicos() {
  return (
    <main>
      {/* Espacio para el header */}
      <div className={styles.headerPlaceholder}></div>

      {/* Banner con imagen de fondo y título */}
      <div className={styles.bannerContainer}>
        <Image
          src="/estructuras-solares.jpg" // Imagen temporal
          alt="Imagen de Postes Metálicos"
          fill
          className={styles.bannerImage}
        />
        <h1 className={styles.title}>GALVANIZADO EN CALIENTE</h1>
      </div>

      {/* Sección de contenido */}
      <section className={styles.whiteSection}>
        <h2 className={styles.sectionTitle}>Lorem ipsum dolor sit amet</h2>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
          viverra velit. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas.
        </p>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          nulla eget lorem facilisis placerat.
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

        {/* Subsection 1 */}
        <div className={styles.subsection}>
          <h3>Lorem ipsum dolor sit amet</h3>
          <ul className={styles.list}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Phasellus consequat, ligula sed convallis suscipit, ex leo
              facilisis purus.
            </li>
            <li>
              Sed euismod nisl non lectus euismod, nec ullamcorper nisl
              vehicula.
            </li>
            <li>Curabitur vehicula risus nec luctus pretium.</li>
          </ul>
          <p className={styles.application}>
            🔹 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Subsection 2 */}
        <div className={styles.subsection}>
          <h3>Lorem ipsum dolor sit amet</h3>
          <ul className={styles.list}>
            <li>Praesent non lectus vitae massa dictum posuere.</li>
            <li>
              Maecenas porttitor augue ac velit commodo, ac tincidunt magna
              imperdiet.
            </li>
            <li>Morbi nec sapien ut elit luctus ullamcorper nec quis nunc.</li>
          </ul>
          <p className={styles.application}>
            🔹 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Subsection 3 */}
        <div className={styles.subsection}>
          <h3>Lorem ipsum dolor sit amet</h3>
          <ul className={styles.list}>
            <li>Donec at magna id arcu sagittis cursus non a eros.</li>
            <li>
              Fusce ac sapien ut elit fermentum volutpat vel sit amet lectus.
            </li>
            <li>Integer tincidunt elit vel velit suscipit malesuada.</li>
            <li>
              Vestibulum fermentum lorem ut metus luctus, a cursus magna
              posuere.
            </li>
          </ul>
          <p className={styles.application}>
            🔹 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Beneficios */}
        <div className={styles.subsection}>
          <h2 className={styles.sectionTitle}>Lorem ipsum dolor sit amet</h2>
          <ul className={styles.list}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Morbi scelerisque odio ac turpis porttitor, nec blandit justo
              efficitur.
            </li>
            <li>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae.
            </li>
            <li>Ut commodo felis nec augue egestas feugiat.</li>
          </ul>

          <p className={styles.contact}>
            📩 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Imagen final */}
        <div className={styles.imageContainer}>
          <Image
            src="/estructuras-solares-2.jpg"
            alt="Imagen de Postes Metálicos"
            width={1200}
            height={800}
            className={styles.finalImage}
          />
        </div>
      </section>
    </main>
  );
}
