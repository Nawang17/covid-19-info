import React from "react";
import Image from "next/image";
import navlogo from "../../public/virus.png";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navlogo}>
          <Image
            src={navlogo}
            width={55}
            height={55}
            alt="Covid-19 virus logo"
          />
          Covid-19 Info
        </div>
        <div className={styles.secondnavdiv}>
          <p>Overview</p>
          <p>Regions</p>
          <p>About</p>
          <p></p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
