import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              height={100} // Altura fija
              width={294} // Ajusta según proporciones
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link href="/quienes-somos">¿QUIÉNES SOMOS?</Link>
          <Link href="/productos">PRODUCTOS</Link>
          <Link href="/proyectos">PROYECTOS</Link>
          <Link href="/social">SOCIAL</Link>
          <Link href="/contacto">CONTÁCTANOS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
