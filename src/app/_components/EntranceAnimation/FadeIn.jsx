'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function FadeIn({ children }) {

    const fadeInRef = useRef(null);
    
    const fadeInAnimateEntrance = (element) => {
        gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
        });
    };
    
    useEffect(() => {
        fadeInAnimateEntrance(fadeInRef.current);
    }, []);

    return (
        <div ref={fadeInRef}>
            {children}
        </div>
    )
}
