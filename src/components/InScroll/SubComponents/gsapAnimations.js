import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initAnimations = () => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        infinite: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Lenis and ScrollTrigger integration
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // GSAP Animations
    const scrollTrig = () => {
        const gsapAnim = gsap.utils.toArray('.gsap__anim');
        gsapAnim.forEach((section) => {
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'bottom bottom',
                    end: 'bottom top',
                    scrub: true,
                    snap: true,
                },
                yPercent: 100,
                ease: 'none',
            });
        });

        const parallaxWrapp = gsap.utils.toArray('.parallax__wrapp');
        parallaxWrapp.forEach((parallax) => {
            gsap.to(parallax, {
                scrollTrigger: {
                    trigger: parallax,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
                yPercent: -20,
                ease: 'none',
            });
        });

        // Add more animations as needed (e.g., title, rotate, scale, etc.)
    };

    scrollTrig();
};

export default initAnimations;
