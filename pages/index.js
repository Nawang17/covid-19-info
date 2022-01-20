import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import navlogo from "../public/virus.png";

export default function Home({ posts }) {
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <>
      <Head>
        <title>Overview</title>
        <meta name="description" content="Total Cases " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navlogo}>
            <Image
              src={navlogo}
              alt="Covid19 virus logo"
              width={60}
              height={60}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
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
      <main className={styles.main}>hellowafa</main>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://cov19.cc/report.json");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
