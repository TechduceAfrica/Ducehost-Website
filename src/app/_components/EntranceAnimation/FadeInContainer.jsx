'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function FadeInContainer({ children }) {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const fadeInAnimateEntrance = (element) => {
            gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            });
        };

        const fadeInExit = (element) => {
            gsap.to(element, {
              opacity: 0,
              y: 50,
              duration: 1,
              ease: "power3.out",
            });
        };

        const fadeInExitonLeave = (element) => {
            gsap.to(element, {
              opacity: 0,
              y: -50,
              duration: 1,
              ease: "power3.out",
            });
        };
    
        const setupScrollTriggers = () => {
            const elements = document.querySelectorAll('.fade__in');
        
            elements.forEach((element) => {
                ScrollTrigger.create({
                    trigger: element,
                    toggleActions: "restart pause reverse play",
                    start: "top 90%",
                    end: "bottom 30%",
                    scrub: 1,
                    onEnter: () => {
                        fadeInAnimateEntrance(element);
                    },
                    onEnterBack: () => {
                        fadeInAnimateEntrance(element);
                    },
                    onLeave: () => {
                        fadeInExitonLeave(element);
                    },
                    onLeaveBack: () => {
                        fadeInExit(element);
                    },
                    });
            });
        };
    
        setupScrollTriggers();
    
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}
