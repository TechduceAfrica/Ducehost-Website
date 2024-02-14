'use client'
import { useEffect } from 'react';
import CtaSection from '@/app/_components/ReportAbuse/CtaSection'
import HeroSection from '@/app/_components/SubmitTicket/HeroSection'
import { CTAsectionCardCopy, CtaSectionTitle } from '@/copyContents/SubmitTicketCopy'

export default function SubmitTicket() {

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
            <CtaSection contactCardProps={CTAsectionCardCopy} title={CtaSectionTitle.title}/>
        </main>
    )
}
