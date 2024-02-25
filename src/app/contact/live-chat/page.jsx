import React from 'react'
import CtaSection from '@/app/_components/ReportAbuse/CtaSection'
import { CTAsectionCardCopy, CtaSectionTitle } from '@/copyContents/LiveChatCopy'
import HeroSection from '@/app/_components/LiveChat/HeroSection'
import { FadeInContainer } from '@/app/_components/EntranceAnimation'

export default function LiveChat() {
    return (
        <main className='container__width'>
            <FadeInContainer>
                <FadeInContainer>
                    <HeroSection/>
                    <CtaSection contactCardProps={CTAsectionCardCopy} title={CtaSectionTitle.title}/>
                </FadeInContainer>
            </FadeInContainer>
        </main>
    )
}
