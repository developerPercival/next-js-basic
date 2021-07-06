import React from "react";
import Link from "next/link";
import style from "../../styles/Review.module.css";

const ShowReview = ({ review }) => {
  return (
    <Link href="/show/[id]" as={`/show/${review.id}`}>
      <a>
        <section className={style.card}>
          <section className={style.content}>
            <h2>
              {review.title.length > 10
                ? review.title.slice(0, 10)
                : review.title}
            </h2>

            <p>
              {review.body.length > 30 ? review.body.slice(0, 30) : review.body}
            </p>
          </section>

          <section className={style.overlay}></section>
        </section>
      </a>
    </Link>
  );
};

export default ShowReview;
