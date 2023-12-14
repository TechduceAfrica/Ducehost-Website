"use client"
import { useEffect } from 'react';

export default function smoothScroll() {

    useEffect( () => {
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

    return (
        <>
            {children}
        </>
    )
}
