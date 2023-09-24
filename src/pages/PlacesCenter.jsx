import FoodMain from "./FoodMain";
import MapCenter from "../components/MapCenter";
// import YelpComponent from "../components/YelpComponent";

import React, { useEffect } from 'react';

function PlacesCenter() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [])


  return (
      <div className="h-[85vh]">

        <MapCenter />
        {/* <YelpComponent name="Independence Hall" address1="520 Chestnut St"/> */}



      </div>
  )
};

export default PlacesCenter;