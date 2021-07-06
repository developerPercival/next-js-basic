import React from "react";
import Head from "next/head";
import style from "../../styles/Review.module.css";
import Navbar from "../components/Navbar";
import ShowReview from "./showReview";

//Data fetching

// getStaticProps
export const getStaticProps = async () => {
  try {
    // Make request to jsonplaceholder
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    // Parse the bloated data
    const posts = await response.json();

    // Return response as a property of props
    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

// Recieve props from getStaticProps
const Review = ({ posts }) => {
  return (
    <section>
      <Head>
        <title>Review</title>
      </Head>

      <Navbar />

      <h1 className={style.heading}>Review</h1>

      <section className={style.container}>
        {posts.map((post) => (
          <ShowReview key={post.id} review={post} />
        ))}
      </section>
    </section>
  );
};

export default Review;
