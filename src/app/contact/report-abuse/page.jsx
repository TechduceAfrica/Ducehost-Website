'use client'
import { useEffect } from 'react';
import { FadeInContainer, FadeIn } from '@/app/_components/EntranceAnimation'
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
            <FadeInContainer>
                <FadeIn>
                    <HeroSection/>
                    <CtaSection contactCardProps={CTAsectionCardCopy} title={CtaSectionCopy.title}/>
                </FadeIn>
            </FadeInContainer>
        </main>
    )
}
