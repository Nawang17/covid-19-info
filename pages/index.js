import Head from "next/head";
import styles from "../styles/Home.module.css";
import moment from "moment";
import Countries from "./Countries";
export default function Home({ posts, lastupdated }) {
  return (
    <>
      <Head>
        <title>Covid-19 Cases Overview</title>
        <meta name="description" content="Overview of Covid-19 cases. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>Overview</h1>
          <div style={{ color: "#1c786b" }} className={styles.sectiondata}>
            {" "}
            {posts.confirmed.toLocaleString()}
          </div>
          <div className={styles.sectionnames}>Confirmed</div>
          <div style={{ color: "#fc5e03" }} className={styles.sectiondata}>
            {posts.critical.toLocaleString()}
          </div>
          <div className={styles.sectionnames}>Critical</div>
          <div style={{ color: "#0ee9cb" }} className={styles.sectiondata}>
            {" "}
            {posts.recovered.toLocaleString()}
          </div>
          <div className={styles.sectionnames}>Recovered</div>

          <div style={{ color: "red" }} className={styles.sectiondata}>
            {" "}
            {posts.deaths.toLocaleString()}
          </div>
          <div className={styles.sectionnames}>Deceased</div>

          <div style={{ color: "#03b1fc" }} className={styles.sectiondata}>
            {posts.vaccinated.toLocaleString()}
          </div>

          <div className={styles.sectionnames}>Vaccinated</div>
          <div style={{ marginTop: "30px", fontSize: "15px" }}>
            {" "}
            Updated: {moment(lastupdated).fromNow(true)} ago
          </div>
        </section>
      </main>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://cov19.cc/report.json");
  const hposts = await res.json();
  const posts = await hposts.regions.world.totals;
  const lastupdated = await hposts.last_updated;

  return {
    props: {
      posts,
      lastupdated,
    },
  };
}
