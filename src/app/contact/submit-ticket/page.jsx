import { FadeIn, FadeInContainer } from '@/app/_components/EntranceAnimation'
import CtaSection from '@/app/_components/ReportAbuse/CtaSection'
import HeroSection from '@/app/_components/SubmitTicket/HeroSection'
import { CTAsectionCardCopy, CtaSectionTitle } from '@/copyContents/SubmitTicketCopy'
import React from 'react'

export default function SubmitTicket() {
    return (
        <main>
            <FadeInContainer>
                <FadeIn>
                    <HeroSection/>
                    <CtaSection contactCardProps={CTAsectionCardCopy} title={CtaSectionTitle.title}/>
                </FadeIn>
            </FadeInContainer>
        </main>
    )
}
