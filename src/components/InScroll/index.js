import React from 'react';

import './style/normalize.css';
import './style/style.css';
import { useEffect } from 'react';
import Section from "./SubComponents/Section";
import Header from "./SubComponents/Header";
import initAnimations from "./SubComponents/gsapAnimations";


const InScroll = () => {
useEffect(() => {
initAnimations(); // Initialize GSAP & Lenis animations
}, []);

return (
<div className="wrapp">
    {/* Header Section */}

    {/* Main Section */}
    <main className="main">
        <Section
                className="serv"
                title="The Services"
                items={[
                { text: 'Creative direction', img: "img/pirat2.png" },
        { text: 'Brand and identity', img: 'img/pirat3.png' },
        { text: 'Visual content', img: 'img/pirat4.png' },
        ]}
        />

        <Section
                className="portfolio"
                portfolioItems={[
        'img/pirat5.png',
        'img/pirat6.png',
        'img/pirat7.png',
        'img/pirat8.png',
        ]}
        />

        <Section
                className="approve"
                content={
        <span className="approve__txt">
              <span className="approve__star">
                <img src="./img/star.svg" alt="" />
              </span>
              <span className="approve__ix">approvecode</span>
            </span>
        }
        />

        {/* Repeat Header Section at the bottom */}
        <Header title="Infinite Scroll" />
    </main>
</div>
);
};

export default InScroll;
