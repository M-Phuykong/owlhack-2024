//npm install api --save

async function getGlobalBusinessId(options) {
  const client = require("api")("@yelp-developers/v1.0#z7c5z2vlkqskzd6");
  client.auth(
    "Bearer G2xoXswkOpZScZHNMQshTQGyh2rghOr1RV9ZBE9N1FbDNJevWHkrqN_4RpTq8uW6PaeA0lwKAPXi1EnJYnm_oRJ1BKL8TI6Mm6ZpEX1G9cGQD5Q6Y1nYfby9ohMPZXYx"
  );

  try {
    const { data } = await client.v3_business_match({
      name: options.name,
      address1: options.address1,
      city: options.city,
      state: options.state,
      country: options.country,
      limit: options.limit,
      match_threshold: options.match_threshold,
    });

    //console.log(data.businesses[0].id);
    return data.businesses[0].id;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Usage example:
const searchOptions = {
  name: "Terakawa",
  address1: "204%20N%209th%20St",
  city: "Philadelphia",
  state: "PA",
  country: "US",
  limit: "3",
  match_threshold: "default",
};

async function getreviewDATA(globalBuisnessId) {
  const client = require("api")("@yelp-developers/v1.0#1a49qhalkmfd1mf");
  client.auth(
    "Bearer G2xoXswkOpZScZHNMQshTQGyh2rghOr1RV9ZBE9N1FbDNJevWHkrqN_4RpTq8uW6PaeA0lwKAPXi1EnJYnm_oRJ1BKL8TI6Mm6ZpEX1G9cGQD5Q6Y1nYfby9ohMPZXYx"
  );

  try {
    const { data } = await client.v3_business_reviews({
      limit: "20",
      sort_by: "yelp_sort",
      business_id_or_alias: globalBuisnessId,
    });

    return data.reviews;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function searchNearMe({ address, miles }) {
  const client = require("api")("@yelp-developers/v1.0#z7c5z2vlkqskzd6");
  client.auth(
    "Bearer G2xoXswkOpZScZHNMQshTQGyh2rghOr1RV9ZBE9N1FbDNJevWHkrqN_4RpTq8uW6PaeA0lwKAPXi1EnJYnm_oRJ1BKL8TI6Mm6ZpEX1G9cGQD5Q6Y1nYfby9ohMPZXYx"
  );

  try {
    const { data } = await client.v3_business_search({
      location: address,
      sort_by: "best_match",
      radius: miles * (40000 / 25), //40,000 meters / 25 miles
      limit: "20",
    });

    return data.businesses;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function main() {
  try {
    const globalBusinessId = await getGlobalBusinessId(searchOptions);
    console.log(globalBusinessId);
    console.log("\n");
    const reviewData = await getreviewDATA(globalBusinessId);
    //console.log(reviewData);

    reviewData.forEach((review) => {
      console.log("RATING: " + review.rating + ", REVIEW:  " + review.text);
    });
    console.log("\n");
    const places = await searchNearMe({
      address: "Chinatown Philadelphia PA",
      miles: 1,
    });
    console.log("\n");
    places.forEach((places) => {
      console.log(places.name + " is closed: " + places.is_closed);
    });
  } catch (err) {
    console.error(err);
    // Handle errors
  }
}

main();
