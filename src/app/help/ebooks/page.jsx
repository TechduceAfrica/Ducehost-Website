'use client'
import { useEffect } from 'react';
import SectionWrapper from "@/app/hvco/page";

export default function EbookPage() {

    useEffect( () => {
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    return (
        <main>
           <SectionWrapper/> 
        </main>
    )
}
