import Image from "next/image";

const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>
      <Image
        src="/footer.png"
        alt="Footer"
        width={1250} // Asegura buena resolución
        height={312} // Ajusta según el diseño
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </footer>
  );
};

export default Footer;
