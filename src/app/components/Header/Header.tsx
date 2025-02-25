"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              height={70}
              width={205}
              priority
            />
          </Link>
        </div>

        {/* Botón menú hamburguesa */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <Link href="/quienes-somos" onClick={() => setMenuOpen(false)}>
            ¿QUIÉNES SOMOS?
          </Link>
          <Link href="/productos" onClick={() => setMenuOpen(false)}>
            PRODUCTOS
          </Link>
          <Link href="/proyectos" onClick={() => setMenuOpen(false)}>
            PROYECTOS
          </Link>
          <Link href="/social" onClick={() => setMenuOpen(false)}>
            SOCIAL
          </Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)}>
            CONTÁCTANOS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
