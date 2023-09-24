import "./PlaceToVisitCardSecondary.css";
import { Link } from "react-router-dom";
import React, {useEffect, useRef} from "react";

import {gsap}  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function PlaceToVisitCardSecondary(props){
  let imgRef = useRef(null);
  let titleRef = useRef(null);
  let descriptionRef = useRef(null);
  let nextPageRef = useRef(null);

  useEffect(() => {

      gsap.to(imgRef.current, {
          scrollTrigger: {
              trigger: imgRef.current,
              start: "top 80%",
              end: "20% 20%",
              scrub: 1,

          },
          opacity: 1,
          duration: 0.1,
      });

      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "20% 20%",
          scrub: 1,
        },
        opacity: 1,
        duration: 0.1,
      });

      gsap.to(descriptionRef.current, {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          end: "20% 20%",
          scrub: 1,

        },
        opacity: 1,
        duration: 0.1,
      });

      gsap.from(nextPageRef.current, {

          opacity: 0,
          y: 100,
          duration: 1,
      });


  }, [])


  let divStyle = {

  }

    return (
      <div style={divStyle} className="flex my-10 ms-96">
        <div className="w-5/12 pe-24">
          <h1 ref={titleRef} className="font-aramisi opacity-0 text-3xl font-bold mb-2">{props.title}</h1>
          <p ref={descriptionRef} className="opacity-0 leading-loose text-md">{props.description}</p>
          <p className="font-bold">
            <Link to={props.nextPage}>Read More</Link>
          </p>
        </div>

        <div ref={imgRef} className="place_image_container_secondary opacity-0">
          <img className="h-64 w-96" src={props.image} alt="" />
          <div className="text-end">
            {props.image_description}
          </div>
        </div>
      </div>
    );
}

