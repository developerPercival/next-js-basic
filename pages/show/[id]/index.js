import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";

//getServerSideProps - Fetch date during request

// export const getServerSideProps = async (context) => {
//   try {
//     // Fetch data
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//     );

//     // Process
//     const review = await response.json();

//     // Return as props
//     return {
//       props: {
//         review,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };

//getStaticPaths for SSG - generated during build time which get all paths
export const getStaticPaths = async () => {
  try {
    // Fetch data
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    //Process
    const posts = await response.json();

    //get all posts id
    const ids = posts.map((post) => post.id);

    //map all id and transform it to string
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
};

// getStaticProps
export const getStaticProps = async (context) => {
  try {
    // Fetch data
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );

    // Process
    const review = await response.json();

    // Return as props
    return {
      props: {
        review,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

const ShowReview = ({ review }) => {
  return (
    <section>
      <Head>
        <title>{review.title.slice(0, 5)}</title>
      </Head>

      <Navbar />

      <h1>This is my show page review for {review.id}!</h1>
    </section>
  );
};

export default ShowReview;
