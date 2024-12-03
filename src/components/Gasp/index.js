import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './style.css'; // Assuming your styles are in this file

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    // Create a ref for the bg_city div
    const svgContainerRef = useRef(null);

    useEffect(() => {
        loadSVG();
    }, []);

    const loadSVG = async () => {
        // Fetch the SVG content
        const response = await fetch("./city.svg"); // Ensure the path is correct
        const svgText = await response.text();

        console.log("SVG Loaded:", svgText);

        // Insert the SVG into the DOM using ref
        if (svgContainerRef.current) {
            svgContainerRef.current.innerHTML = svgText;

            // Set the preserveAspectRatio attribute
            const svgElement = svgContainerRef.current.querySelector("svg");
            if (svgElement) {
                svgElement.setAttribute("preserveAspectRatio", "xMidYMid slice");
            }

            // Call setAnimationScroll to initialize GSAP animations
            setAnimationScroll();
        }
    };

    const setAnimationScroll = () => {
        const runAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#bg_city",
                start: "top top",
                end: "+=1000",
                scrub: true,
                pin: true
            }
        });

        runAnimation.add([
            gsap.to("#bg_city svg", {
                scale: 1.5,
                duration: 2
            }),
            gsap.to("#full_city", {
                opacity: 0,
                duration: 2
            })
        ]);

        runAnimation.add([
            gsap.to("#building_top", {
                y: -200,
                opacity: 0,
                duration: 2
            }),
            gsap.to("#wall_side", {
                x: -200,
                opacity: 0,
                duration: 2
            }),
            gsap.to("#wall_front", {
                x: 200,
                y: 200,
                opacity: 0,
                duration: 2
            })
        ]);

        runAnimation.add([
            gsap.to("#interior_wall_side", {
                x: -200,
                opacity: 0,
                duration: 2
            }),
            gsap.to("#interior_wall_top", {
                y: -200,
                opacity: 0,
                duration: 2
            }),
            gsap.to("#interior_wall_side_2", {
                opacity: 0,
                duration: 2
            }),
            gsap.to("#interior_wall_front", {
                opacity: 0,
                duration: 2
            })
        ]);
    };

    return (
        <div className="banner">
            {/* Use ref here to link to the SVG container */}
            <div id="bg_city" ref={svgContainerRef}></div>
            <div className="content">
                <div className="item">
                    <div>
                        <p>LUNDEV CHANNEL</p>
                        <p>DEVELOPER & DESIGNER</p>
                    </div>
                    <div>
                        <p>CONTENT CREATER</p>
                        <p>ALL LANGUAGE</p>
                    </div>
                </div>
                <div className="item title">
                    <p>Hong Kong</p>
                    <p>real estate</p>
                </div>
            </div>
        </div>
    );
};

export default App;
