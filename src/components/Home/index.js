import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    // References for the boxes
    const boxesRefs = useRef([]);

    useEffect(() => {
        // Apply GSAP animation to each box
        boxesRefs.current.forEach((box, index) => {
            gsap.to(box, {
                rotation: 360, // Rotate 360 degrees
                scrollTrigger: {
                    trigger: box, // Trigger animation for each box
                    start: "top 80%", // Start when the top of the box hits 80% of the viewport height
                    end: "top 20%", // End when the top of the box hits 20% of the viewport height
                    scrub: true, // Smooth scrubbing for the animation
                    markers: true,
                },
            });
        });
    }, []);

    return (
        <div >
            {/* Render 5 Boxes */}
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                    key={index}
                    ref={(el) => (boxesRefs.current[index] = el)} // Store references to the boxes
                    className={`mx-auto mt-[50vh] w-24 h-24 bg-blue-${index * 200 + 400} flex justify-center items-center`}
                    style={{ backgroundColor: `hsl(${index * 72}, 70%, 50%)` }} // Dynamic color
                />
            ))}
        </div>
    );
};

export default Home;
