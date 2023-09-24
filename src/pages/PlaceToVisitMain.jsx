import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


import PlaceToVisitCard from "../components/PlaceToVisitCard";
import PlaceToVisitCardSecondary from '../components/PlaceToVisitCardSecondary'

import './PlaceToVisitMain.css'

import lovepark from '../assets/images/lovepark.jpg'
import chinatown from '../assets/images/chinatown.jpg'
import cityhall from '../assets/images/cityhall.jpg'
import fdrpark from '../assets/images/fdrpark.jpg'

import { Link } from "react-router-dom";



function PlaceToVisitMain() {

    gsap.registerPlugin(ScrollTrigger);

    let data = {


    };

    const textRef = useRef(null);

    useEffect(() => {

        const textElements = gsap.utils.toArray('.text');

        textElements.forEach((text) => {
          gsap.to(text, {
            backgroundSize: '100%',
            ease:'none',
            scrollTrigger: {
              trigger: text,
              start: "top 60%",
              end: "bottom 20%",
              scrub: true,
              },
          });
        });

    }, [])

    return (
      <div className="flex flex-col w-full items-center ">
        <h1 ref={textRef} className="
        text-3xl m-10 text font-bolder">
          ATTRACTIONS
        </h1>

        <PlaceToVisitCard
          image={lovepark}
          title="University City (U City)"
          description="Welcome to University City, the vibrant heart of knowledge and innovation in Philadelphia. Home to prestigious universities like the University of Pennsylvania and Drexel University, this neighborhood buzzes with intellectual energy. Explore its tree-lined streets, diverse dining options, and cultural attractions. Discover a blend of academic excellence, historic charm, and modern amenities in this dynamic community."
          //show the map
          nextPage = "/map"
        />

        <PlaceToVisitCardSecondary
          image={cityhall}
          title="Center City"
          description="Center City Philadelphia, often referred to as 'downtown,' is the beating core of the city. It's a place where history and contemporary living intersect. Wander through historic streets like Independence Mall or stroll along the stylish boutiques of Rittenhouse Square. With world-class dining, iconic landmarks, and a bustling arts scene, Center City embodies the essence of Philadelphia's rich heritage and forward-thinking spirit."
          nextPage = "/mapCenter"
        />

        <PlaceToVisitCard
          image={chinatown}
          title="Chinatown"
          description="Step into the lively streets of Philadelphia's Chinatown and experience a fusion of cultures and flavors. This neighborhood is a cultural gem, offering an array of authentic Asian cuisine, vibrant markets, and festive celebrations year-round. Explore the ornate Friendship Gate and immerse yourself in the traditions and diversity that define Chinatown's unique character."
          nextPage = "/mapChina"
        />

        <PlaceToVisitCardSecondary
          image={fdrpark}
          title="South Philadelphia"
          description="South Philadelphia, known for its iconic Italian Market and passionate sports fans, exudes a sense of community and tradition. Home to legendary cheesesteak joints, historic stadiums, and a mix of diverse neighborhoods, South Philly offers a taste of authentic Philadelphia life. Enjoy a game, savor local delicacies, and discover the neighborhoods that give this part of the city its distinctive charm."
          nextPage = "/mapSouth"
       />
      </div>
    );
}

export default PlaceToVisitMain;
