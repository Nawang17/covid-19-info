import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import moment from "moment";
export default function Home({ posts }) {
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <>
      <Head>
        <title>Covid-19 Cases Overview</title>
        <meta name="description" content="Overview of Covid-19 cases. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <div style={{ color: "black" }} className={styles.sectiondata}>
            {" "}
            {posts.regions.world.totals.confirmed.toLocaleString()}
          </div>
          <div className={styles.sectionnames}>Confirmed</div>
          <div style={{ color: "#fc5e03" }} className={styles.sectiondata}>
            {posts.regions.world.totals.critical.toLocaleString()}
          </div>
          <div className={styles.sectionnames}>Critical</div>
          <div style={{ color: "#0ee9cb" }} className={styles.sectiondata}>
            {" "}
            {posts.regions.world.totals.recovered.toLocaleString()}
          </div>
          <div className={styles.sectionnames}>Recovered</div>

          <div style={{ color: "red" }} className={styles.sectiondata}>
            {" "}
            {posts.regions.world.totals.deaths.toLocaleString()}
          </div>
          <div className={styles.sectionnames}>Deaths</div>

          <div style={{ color: "#03b1fc" }} className={styles.sectiondata}>
            {posts.regions.world.totals.vaccinated.toLocaleString()}
          </div>

          <div className={styles.sectionnames}>Vaccinated</div>
          <div style={{ marginTop: "30px", fontSize: "15px" }}>
            {" "}
            Updated: {moment(posts.last_updated).fromNow(true)} ago
          </div>
        </section>
      </main>
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
