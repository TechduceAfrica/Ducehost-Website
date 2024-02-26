'use client'
import { useEffect } from 'react';
import Image from "next/image";
import PriBtn from "./_components/PriBtn";

export default function NotFoundPage() {

    useEffect( () => {
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    const errorPageImg = {
        src: "/images/ducehost-page-not-found.webp",
        alt: `Ducehost Page not found`,
        title: `Ducehost Page not found`,
        width: `653`,
        height: `653`,
    }

    return (
        <section className="container__width error__404__page padding__block__80">
            <div>
                <h2 
                    data-scroll 
                    data-scroll-speed="0.21"
                >
                    Ooops...
                </h2>
                <h3 
                    data-scroll 
                    data-scroll-speed="0.18"
                >
                    Page not found
                </h3>
                <p 
                    data-scroll 
                    data-scroll-speed="0.15"
                >
                    The page you are looking for doesn’t exist or another error occurred. Go back to home page.
                </p>
                <PriBtn
                    PriBtnText= 'Back to Home'
                    PriBtnLink= '/'
                    data-scroll 
                    data-scroll-speed="0.12"
                />
            </div>
            <div>
                <Image 
                    {...errorPageImg} 
                    data-scroll 
                    data-scroll-speed="0.15"
                />
            </div>
        </section>
    )
}
