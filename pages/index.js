import Head from "next/head";
import Navbar from "./components/Navbar";
import style from "../styles/Home.module.css";
import typo from "../styles/Typo.module.css";
import btn from "../styles/Button.module.css";

// Home page
export default function Home() {
  return (
    <div>
      <Head>
        <title>Joshua Site</title>
      </Head>

      <main className={style.container}>
        <section className={style.title_container}>
          <Navbar />

          <h1 className={typo.heading_one}>
            Welcome to <span>EverGarden Resorts</span>
          </h1>

          <p className={typo.para_title}>
            Serving the best accomadation to tourist travelling in the paradise.
          </p>

          <section className={style.nav_section}>
            <button className={btn.button}>Contact us</button>
          </section>
        </section>
      </main>
    </div>
  );
}
