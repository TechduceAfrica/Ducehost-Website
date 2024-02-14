'use client'
import { useEffect } from 'react';
import CtaSection from '@/app/_components/ReportAbuse/CtaSection'
import HeroSection from '@/app/_components/ReportAbuse/HeroSection'
import { CTAsectionCardCopy, CtaSectionCopy } from '@/copyContents/ReportAbuseCopy'

export default function ReportAbuse() {

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
            <HeroSection/>
            <CtaSection contactCardProps={CTAsectionCardCopy} title={CtaSectionCopy.title}/>
        </main>
    )
}
