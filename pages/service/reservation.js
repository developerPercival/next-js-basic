import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Reservation = () => {
  return (
    <section>
      <Head>
        <title>Reservation</title>
      </Head>

      <Navbar />

      <h1>We accept advance reservation.</h1>

      <p>
        You can make an advance reservation if you wish to use all facility of
        our resorts in just one click of a button.
      </p>
    </section>
  );
};

export default Reservation;
