import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Booking = () => {
  return (
    <section>
      <Head>
        <title>Booking</title>
      </Head>

      <Navbar />

      <h1>Call our Booking office.</h1>

      <p>
        We offer an interactive calender to view the current schedule of our
        entire booking timeline.
      </p>
    </section>
  );
};

export default Booking;
