/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Countries = ({ posts }) => {
  const [search, setsearch] = useState("");
  return (
    <>
      <Head>
        <title>Covid-19 Cases Countries</title>
        <meta name="description" content="Overview of Covid-19 cases. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          margin: "87px auto 0px auto",
          maxWidth: "1000px",
        }}
      >
        <div style={{ padding: "30px 0px 10px 10px" }}>
          <span style={{ fontWeight: "bold" }}>Search : </span>

          <input
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            type="text"
            placeholder="enter country name"
            style={{
              padding: "10px 10px",
              borderRadius: "5PX",
              fontSize: "15px",
            }}
          />
        </div>
        <TableContainer component={Paper}>
          <Table style={{}} sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Country
                </TableCell>
                <TableCell
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                  align="left"
                >
                  Confirmed
                </TableCell>
                <TableCell
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                  align="left"
                >
                  Recovered
                </TableCell>
                <TableCell
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                  align="left"
                >
                  Deceased
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="left">
                  Vaccinated
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts
                .sort((a, b) => a.confirmed - b.confirmed)
                .filter((val) => {
                  return val.country
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((row, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell style={{}} component="th" scope="row">
                      <img
                        style={{ marginRight: "10px" }}
                        src={`https://flagcdn.com/16x12/${row.country_code}.png`}
                        width="16"
                        height="12"
                        alt="Country flag"
                      />

                      {row.country}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#ffa006",
                      }}
                      align="left"
                    >
                      {row.confirmed.toLocaleString()}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        color: "rgb(28 120 107)",
                        fontSize: "16px",
                      }}
                      align="left"
                    >
                      {row.recovered.toLocaleString()}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "red",
                      }}
                      align="left"
                    >
                      {row.deaths.toLocaleString()}
                    </TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#03b1fc",
                      }}
                      align="left"
                    >
                      {row.vaccinated.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))
                .reverse()}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
};

export default Countries;
export async function getStaticProps() {
  const res = await fetch("https://cov19.cc/report.json");
  const hposts = await res.json();
  const posts = await hposts.regions.world.list;

  return {
    props: {
      posts,
    },
  };
}
