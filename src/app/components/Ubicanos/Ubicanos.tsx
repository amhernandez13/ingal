const Ubicanos = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "20px",
        padding: "30px",
        margin: "50px auto",
        maxWidth: "80%",
        gap: "40px",
      }}
    >
      {/* Sección Izquierda */}
      <div style={{ width: "25%", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "10px",
            fontFamily: "Neuropolitical RG",
          }}
        >
          Ubícanos
        </h2>
        <span className="jump" style={{ marginTop: "6px" }}>
          <i
            className="bi bi-geo-alt"
            style={{ fontSize: "100px", color: "#E52521" }}
          ></i>
        </span>
        <p
          style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: "20px",
            color: "#fff",
            marginTop: "10px",
          }}
        >
          Calle 3 transversal #4-151, La Dolores, Palmira, Valle del Cauca,
          Colombia.
        </p>
        <style jsx global>{`
          .jump {
            display: inline-block;
            animation: jump 1s infinite;
          }
          @keyframes jump {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>

      {/* Sección Derecha - Google Maps */}
      <div style={{ width: "75%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.1863755540794!2d-76.4734720365234!3d3.500882900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a8e5215d0d85%3A0xc6da1aaf2ea93cb8!2sINGENIER%C3%8DA%20EN%20GALVANIZADOS%20DE%20OCCIDENTE%20S.A.S.!5e0!3m2!1ses-419!2sco!4v1738461934721!5m2!1ses-419!2sco"
          width="100%"
          height="500"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Ubicanos;
