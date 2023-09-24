//npm install api --save
import { useState, useEffect } from "react";

function YelpComponent({ name, address1 }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const globalBusinessId = await getGlobalBusinessId(name, address1);
        const reviewData = await getReviewData(globalBusinessId);

        setReviews(reviewData);
      } catch (err) {
        console.error(err);
        // Handle errors
      }
    }

    fetchData();
  }, [name, address1]);

  async function getGlobalBusinessId() {
    const client = require("api")("@yelp-developers/v1.0#z7c5z2vlkqskzd6");
    client.auth(
      "Bearer G2xoXswkOpZScZHNMQshTQGyh2rghOr1RV9ZBE9N1FbDNJevWHkrqN_4RpTq8uW6PaeA0lwKAPXi1EnJYnm_oRJ1BKL8TI6Mm6ZpEX1G9cGQD5Q6Y1nYfby9ohMPZXYx"
    );

    try {
      const { data } = await client.v3_business_match({
        name: name,
        address1: address1,
        city: "Philadelphia",
        state: "PA",
        country: "US",
        limit: "3",
        match_threshold: "default",
      });

      return data.businesses[0].id;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async function getReviewData(globalBusinessId) {
    const client = require("api")("@yelp-developers/v1.0#1a49qhalkmfd1mf");
    client.auth(
      "Bearer G2xoXswkOpZScZHNMQshTQGyh2rghOr1RV9ZBE9N1FbDNJevWHkrqN_4RpTq8uW6PaeA0lwKAPXi1EnJYnm_oRJ1BKL8TI6Mm6ZpEX1G9cGQD5Q6Y1nYfby9ohMPZXYx"
    );

    try {
      const { data } = await client.v3_business_reviews({
        limit: "20",
        sort_by: "yelp_sort",
        business_id_or_alias: globalBusinessId,
      });

      return data.reviews;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return (
    <div>
      <h2>Yelp Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            RATING: {review.rating}, REVIEW: {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YelpComponent;
