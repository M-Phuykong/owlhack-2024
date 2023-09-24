import FoodMain from "./FoodMain";
import Map from "../components/Map";
// import YelpComponent from "../components/YelpComponent";

import React, { useEffect } from 'react';

function Places() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [])


  return (
      <div className="h-[85vh]">

        <Map />
        {/* <YelpComponent name="Temple" address1="1801 N Broad St, Philadelphia, PA 19122" /> */}

      </div>
  )
};

export default Places;