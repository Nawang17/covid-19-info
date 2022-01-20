import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";

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
      <Navbar />
      <main className={styles.main}></main>
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
