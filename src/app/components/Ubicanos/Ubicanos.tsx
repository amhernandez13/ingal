import styles from "./Ubicanos.module.css";

const Ubicanos = () => {
  return (
    <div className={styles.container}>
      {/* Sección Izquierda */}
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Ubícanos</h2>

        <span className={styles.jump}>
          <i className={`bi bi-geo-alt ${styles.icon}`}></i>
        </span>

        <p className={styles.address}>
          Calle 3 transversal #4-151, La Dolores, Palmira, Valle del Cauca,
          Colombia.
        </p>
      </div>

      {/* Sección Derecha - Google Maps */}
      <div className={styles.rightSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.1863755540794!2d-76.4734720365234!3d3.500882900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a8e5215d0d85%3A0xc6da1aaf2ea93cb8!2sINGENIER%C3%8DA%20EN%20GALVANIZADOS%20DE%20OCCIDENTE%20S.A.S.!5e0!3m2!1ses-419!2sco!4v1738461934721!5m2!1ses-419!2sco"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
        ></iframe>
      </div>
    </div>
  );
};

export default Ubicanos;
