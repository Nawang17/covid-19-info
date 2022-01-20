import React from "react";
import Image from "next/image";
import navlogo from "../../public/virus.png";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <div className={styles.navlogo}>
            <Image
              src={navlogo}
              width={50}
              height={50}
              alt="Covid-19 virus logo"
            />
            Covid-19
          </div>
        </Link>
        <div className={styles.secondnavdiv}>
          <Link href="/" passHref>
            <p>Overview</p>
          </Link>
          <Link href="/Countries" passHref>
            <p>Countries</p>
          </Link>
          <Link href="/About" passHref>
            <p>About</p>
          </Link>
          <p></p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
