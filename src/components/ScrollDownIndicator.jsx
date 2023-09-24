import './ScrollDownIndicator.css';
import {gsap} from 'gsap';
import React, {useEffect} from 'react';

export default function ScrollDownIndicator() {

    useEffect(() => {
        gsap.to(".chevron_container", {
            scrollTrigger :{
                trigger: ".chevron_container",
                start: "top 80%",
                end: "top 80%",
                scrub: 1,

            },
            opacity: 0,
        });
    });


    return (
    <div className="chevron_container">
        <div className="chevron__arrow"></div>
    </div>
    );
}