import FoodMain from "./FoodMain";
import MapChina from "../components/MapChina";

import React, { useEffect } from 'react';

function PlacesChina() {

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [])


  return (
      <div className="h-[85vh]">

        <MapChina />


      </div>
  )
};

export default PlacesChina;