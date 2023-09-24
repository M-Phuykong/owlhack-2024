import FoodMain from "./FoodMain";
import MapSouth from "../components/MapSouth";

import React, { useEffect } from 'react';

function PlacesSouth() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [])


  return (
      <div className="h-[85vh]">

        <MapSouth/>


      </div>
  )
};

export default PlacesSouth;