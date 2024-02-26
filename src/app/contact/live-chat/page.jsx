'use client'
import { useEffect } from 'react'
import CtaSection from '@/app/_components/ReportAbuse/CtaSection'
import { CTAsectionCardCopy, CtaSectionTitle } from '@/copyContents/LiveChatCopy'
import HeroSection from '@/app/_components/LiveChat/HeroSection'
import { FadeInContainer } from '@/app/_components/EntranceAnimation'

export default function LiveChat() {

    useEffect( () => {
        (
          async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
          }
        )()
    }, [])

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
