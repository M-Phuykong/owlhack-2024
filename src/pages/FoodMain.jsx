import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Cheat from "../components/Cheat";



import './PlaceToVisitMain.css'
import { Subgrid } from "../components/Subgrid";

function FoodMain() {

    gsap.registerPlugin(ScrollTrigger);

    let data = {


    };

    const textRef = useRef(null);

    useEffect(() => {

    }, [])

    return (
      <div className="flex w-full py-20 pe-40">

          <div className="w-2/6 flex text-center justify-end">
            <h1 className="eat_text">
              EATS
            </h1>
          </div>

          <div className="w-4/6">
            <Subgrid />
          </div>


      </div>
    );
}

export default FoodMain;
